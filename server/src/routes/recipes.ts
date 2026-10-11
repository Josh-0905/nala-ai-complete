import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { RecipeService } from '../services/ai/recipeService.js';
import { authMiddleware, optionalAuthMiddleware, AuthRequest } from '../middleware/auth.js';
import { db } from '../database/db.js';

const router = Router();

// Recommend recipes based on ingredients and filters
router.post('/recommend', optionalAuthMiddleware, (req: AuthRequest, res: Response): void => {
  try {
    const {
      ingredients = [],
      cuisine,
      mealType,
      dietType,
      allergies,
      maxCookingTime,
      difficulty,
      budget,
      servings,
    } = req.body;

    // If user is authenticated, we can merge their stored preferences if not overridden
    let effectiveDiet = dietType;
    let effectiveAllergies = allergies || [];
    let effectiveBudget = budget;

    if (req.user) {
      const prefs = db.prepare('SELECT * FROM user_preferences WHERE user_id = ?').get(req.user.id) as any;
      if (prefs) {
        if (!effectiveDiet && prefs.diet_type) effectiveDiet = prefs.diet_type;
        if ((!effectiveAllergies || effectiveAllergies.length === 0) && prefs.allergies) {
          try {
            effectiveAllergies = JSON.parse(prefs.allergies);
          } catch (e) {}
        }
        if (!effectiveBudget && prefs.budget) effectiveBudget = prefs.budget;
      }
    }

    const recommendations = RecipeService.getRecommendations({
      ingredients,
      cuisine,
      mealType,
      dietType: effectiveDiet,
      allergies: effectiveAllergies,
      maxCookingTime: maxCookingTime ? Number(maxCookingTime) : undefined,
      difficulty,
      budget: effectiveBudget ? Number(effectiveBudget) : undefined,
      servings: servings ? Number(servings) : undefined,
    });

    const readyToCook = recommendations.filter((r) => r.is100PercentMatch || r.missingCount === 0);
    const extraWithMissingItems = recommendations.filter(
      (r) => !r.is100PercentMatch && r.missingCount !== undefined && r.missingCount >= 1 && r.missingCount <= 3
    );

    res.json({
      total: recommendations.length,
      readyToCookCount: readyToCook.length,
      extraCount: extraWithMissingItems.length,
      recommendations,
      readyToCook,
      extraWithMissingItems,
    });
  } catch (err: any) {
    console.error('Recommendation error:', err);
    res.status(500).json({ error: 'Failed to generate recommendations.', details: err.message });
  }
});

// Get all recipes
router.get('/', optionalAuthMiddleware, (req: AuthRequest, res: Response): void => {
  const { search, cuisine, dietType } = req.query;

  let query = 'SELECT * FROM recipes WHERE 1=1';
  const params: any[] = [];

  if (search) {
    query += ' AND (name LIKE ? OR description LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }
  if (cuisine && cuisine !== 'Any') {
    query += ' AND cuisine LIKE ?';
    params.push(`%${cuisine}%`);
  }
  if (dietType && dietType !== 'Any') {
    query += ' AND diet_type = ?';
    params.push(dietType);
  }

  const recipes = db.prepare(query).all(...params) as any[];

  const formatted = recipes.map((r) => {
    try {
      r.instructions = JSON.parse(r.instructions);
      r.nutrition_data = JSON.parse(r.nutrition_data);
      r.tags = r.tags ? JSON.parse(r.tags) : [];
    } catch (e) {}
    return r;
  });

  res.json({ recipes: formatted });
});

// Get user saved favorites
router.get('/user/favorites', authMiddleware, (req: AuthRequest, res: Response): void => {
  const rows = db.prepare(`
    SELECT r.*, s.created_at as saved_at
    FROM saved_recipes s
    JOIN recipes r ON s.recipe_id = r.id
    WHERE s.user_id = ?
    ORDER BY s.created_at DESC
  `).all(req.user!.id) as any[];

  const formatted = rows.map((r) => {
    try {
      r.instructions = JSON.parse(r.instructions);
      r.nutrition_data = JSON.parse(r.nutrition_data);
      r.tags = r.tags ? JSON.parse(r.tags) : [];
    } catch (e) {}
    return r;
  });

  res.json({ favorites: formatted });
});

// Get user cooking history
router.get('/user/history', authMiddleware, (req: AuthRequest, res: Response): void => {
  const rows = db.prepare(`
    SELECT r.*, h.cooked_at, h.rating, h.notes, h.id as history_id
    FROM recipe_history h
    JOIN recipes r ON h.recipe_id = r.id
    WHERE h.user_id = ?
    ORDER BY h.cooked_at DESC
  `).all(req.user!.id) as any[];

  const formatted = rows.map((r) => {
    try {
      r.instructions = JSON.parse(r.instructions);
      r.nutrition_data = JSON.parse(r.nutrition_data);
      r.tags = r.tags ? JSON.parse(r.tags) : [];
    } catch (e) {}
    return r;
  });

  res.json({ history: formatted });
});

// Get single recipe details
router.get('/:id', optionalAuthMiddleware, (req: AuthRequest, res: Response): void => {
  const id = req.params.id as string;
  const ingredientsParam = (req.query.ingredients as string) || '';
  const userIngredients = ingredientsParam
    ? ingredientsParam.split(',').map((s) => s.trim())
    : [];

  const recipeDetail = RecipeService.getRecipeById(id, userIngredients);
  if (!recipeDetail) {
    res.status(404).json({ error: 'Recipe not found.' });
    return;
  }

  // Check if saved by current user
  let isSaved = false;
  if (req.user) {
    const saved = db.prepare('SELECT id FROM saved_recipes WHERE user_id = ? AND recipe_id = ?').get(req.user.id, id);
    isSaved = !!saved;
  }

  // Fetch rating summary
  const reviewStats = db.prepare(`
    SELECT AVG(rating) as avg_rating, COUNT(*) as count 
    FROM recipe_reviews 
    WHERE recipe_id = ?
  `).get(id) as any;

  const avgRating = reviewStats?.avg_rating ? Math.round(reviewStats.avg_rating * 10) / 10 : 4.9;
  const reviewCount = reviewStats?.count || 0;

  recipeDetail.recipe.rating = avgRating;
  (recipeDetail.recipe as any).reviewCount = reviewCount;

  res.json({
    ...recipeDetail,
    isSaved,
  });
});

// Get recipe reviews
router.get('/:id/reviews', (req: Request, res: Response): void => {
  const id = req.params.id as string;

  const rows = db.prepare(`
    SELECT * FROM recipe_reviews 
    WHERE recipe_id = ? 
    ORDER BY created_at DESC
  `).all(id) as any[];

  const formattedReviews = rows.map((rev) => {
    let parsedTags: string[] = [];
    try {
      parsedTags = rev.tags ? JSON.parse(rev.tags) : [];
    } catch (e) {}
    return {
      ...rev,
      tags: parsedTags,
    };
  });

  const totalReviews = formattedReviews.length;
  const averageRating = totalReviews > 0
    ? Math.round((formattedReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
    : 4.9;

  const ratingDistribution = {
    5: formattedReviews.filter((r) => r.rating === 5).length,
    4: formattedReviews.filter((r) => r.rating === 4).length,
    3: formattedReviews.filter((r) => r.rating === 3).length,
    2: formattedReviews.filter((r) => r.rating === 2).length,
    1: formattedReviews.filter((r) => r.rating === 1).length,
  };

  res.json({
    reviews: formattedReviews,
    averageRating,
    totalReviews,
    ratingDistribution,
  });
});

// Add a community review for a recipe
router.post('/:id/reviews', optionalAuthMiddleware, (req: AuthRequest, res: Response): void => {
  const recipeId = req.params.id as string;
  const { rating = 5, title, comment, tags = [], authorName } = req.body;

  if (!comment || typeof comment !== 'string' || comment.trim().length === 0) {
    res.status(400).json({ error: 'Review comment cannot be empty.' });
    return;
  }

  const numRating = Math.min(5, Math.max(1, Number(rating) || 5));
  const reviewId = uuidv4();
  const userId = req.user ? req.user.id : null;
  let userName = authorName && authorName.trim() ? authorName.trim() : 'Verified Home Cook';
  let userAvatar: string | null = null;

  if (userId) {
    const userRow = db.prepare('SELECT name, profile_image FROM users WHERE id = ?').get(userId) as any;
    if (userRow) {
      userName = userRow.name || userName;
      userAvatar = userRow.profile_image || null;
    }
  }

  const tagList = Array.isArray(tags) ? tags : [];

  db.prepare(`
    INSERT INTO recipe_reviews (id, recipe_id, user_id, user_name, user_avatar, rating, title, comment, tags, helpful_count, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    reviewId,
    recipeId,
    userId,
    userName,
    userAvatar,
    numRating,
    title || 'Home Cook Review',
    comment.trim(),
    JSON.stringify(tagList),
    0,
    new Date().toISOString()
  );

  const newReview = {
    id: reviewId,
    recipe_id: recipeId,
    user_id: userId,
    user_name: userName,
    user_avatar: userAvatar,
    rating: numRating,
    title: title || 'Home Cook Review',
    comment: comment.trim(),
    tags: tagList,
    helpful_count: 0,
    created_at: new Date().toISOString(),
  };

  res.status(201).json({
    message: 'Thank you! Your review was successfully added.',
    review: newReview,
  });
});

// Mark a review as helpful
router.post('/:id/reviews/:reviewId/helpful', (req: Request, res: Response): void => {
  const { id: recipeId, reviewId } = req.params;

  const result = db.prepare(`
    UPDATE recipe_reviews
    SET helpful_count = helpful_count + 1
    WHERE id = ? AND recipe_id = ?
  `).run(reviewId, recipeId);

  if (result.changes === 0) {
    res.status(404).json({ error: 'Review not found.' });
    return;
  }

  const updated = db.prepare('SELECT helpful_count FROM recipe_reviews WHERE id = ?').get(reviewId) as any;

  res.json({
    success: true,
    helpfulCount: updated?.helpful_count || 1,
  });
});

// Toggle favorite
router.post('/:id/favorite', authMiddleware, (req: AuthRequest, res: Response): void => {
  const id = req.params.id as string;
  const userId = req.user!.id;

  const existing = db.prepare('SELECT id FROM saved_recipes WHERE user_id = ? AND recipe_id = ?').get(userId, id) as any;

  if (existing) {
    db.prepare('DELETE FROM saved_recipes WHERE id = ?').run(existing.id);
    res.json({ saved: false, message: 'Removed from favorites' });
  } else {
    db.prepare('INSERT INTO saved_recipes (id, user_id, recipe_id, created_at) VALUES (?, ?, ?, ?)').run(
      uuidv4(),
      userId,
      id,
      new Date().toISOString()
    );
    res.json({ saved: true, message: 'Added to favorites' });
  }
});

// Mark as cooked (Cooking mode completion)
router.post('/:id/cook', authMiddleware, (req: AuthRequest, res: Response): void => {
  const id = req.params.id as string;
  const userId = req.user!.id;
  const { rating = 5, notes } = req.body;

  const historyId = uuidv4();
  db.prepare(`
    INSERT INTO recipe_history (id, user_id, recipe_id, cooked_at, rating, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(historyId, userId, id, new Date().toISOString(), rating, notes || 'Cooked with NALA AI Cooking Mode');

  res.json({
    message: 'Recipe logged as cooked successfully!',
    historyId,
  });
});

export default router;
