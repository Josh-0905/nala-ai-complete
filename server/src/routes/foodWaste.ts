import { Router, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../database/db.js';
import { RecipeService } from '../services/ai/recipeService.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';

const router = Router();

// Get expiring pantry items and priority recipes
router.get('/', authMiddleware, (req: AuthRequest, res: Response): void => {
  const userId = req.user!.id;
  const result = RecipeService.getFoodWastePriorityRecipes(userId);
  res.json(result);
});

// Add ingredient to expiring pantry tracker
router.post('/add', authMiddleware, (req: AuthRequest, res: Response): void => {
  const userId = req.user!.id;
  const { ingredient_name, category = 'Vegetables', days_until_expiry = 3, quantity = 1, unit = 'pcs' } = req.body;

  if (!ingredient_name) {
    res.status(400).json({ error: 'Ingredient name is required.' });
    return;
  }

  const itemId = uuidv4();
  db.prepare(`
    INSERT INTO pantry_items (id, user_id, ingredient_name, category, days_until_expiry, quantity, unit, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    itemId,
    userId,
    ingredient_name.trim(),
    category,
    Number(days_until_expiry),
    Number(quantity),
    unit,
    new Date().toISOString()
  );

  res.status(201).json({
    message: 'Item added to expiring ingredients list.',
    id: itemId,
  });
});

// Remove item from pantry
router.delete('/:id', authMiddleware, (req: AuthRequest, res: Response): void => {
  const id = req.params.id as string;
  const userId = req.user!.id;
  db.prepare('DELETE FROM pantry_items WHERE id = ? AND user_id = ?').run(id, userId);
  res.json({ message: 'Item removed from pantry.' });
});

export default router;
