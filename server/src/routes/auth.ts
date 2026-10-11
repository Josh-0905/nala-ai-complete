import { Router, Response } from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../database/db.js';
import { authMiddleware, AuthRequest, generateToken } from '../middleware/auth.js';

const router = Router();

// Sign Up
router.post('/signup', (req: AuthRequest, res: Response): void => {
  const { name, email, password, diet_type, dietary_restrictions, allergies, cuisine_preferences, cooking_preferences, budget } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: 'Name, email, and password are required.' });
    return;
  }

  // Check if email already registered
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email.toLowerCase().trim());
  if (existing) {
    res.status(409).json({ error: 'An account with this email already exists.' });
    return;
  }

  const userId = uuidv4();
  const passwordHash = bcrypt.hashSync(password, 10);
  const now = new Date().toISOString();

  // Insert user
  db.prepare(`
    INSERT INTO users (id, name, email, password_hash, profile_image, role, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    userId,
    name.trim(),
    email.toLowerCase().trim(),
    passwordHash,
    `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`,
    'user',
    now
  );

  // Insert initial preferences
  db.prepare(`
    INSERT INTO user_preferences (id, user_id, diet_type, dietary_restrictions, cuisine_preferences, cooking_preferences, allergies, budget)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    uuidv4(),
    userId,
    diet_type || 'Vegetarian',
    JSON.stringify(dietary_restrictions || []),
    JSON.stringify(cuisine_preferences || ['Indian']),
    JSON.stringify(cooking_preferences || ['Quick meals']),
    JSON.stringify(allergies || []),
    budget || 500
  );

  // Create initial empty shopping list
  db.prepare(`
    INSERT INTO shopping_lists (id, user_id, name, created_at)
    VALUES (?, ?, ?, ?)
  `).run(uuidv4(), userId, 'My Shopping List', now);

  const token = generateToken({ id: userId, email: email.toLowerCase().trim(), role: 'user' });

  res.status(201).json({
    message: 'User created successfully',
    token,
    user: {
      id: userId,
      name,
      email: email.toLowerCase().trim(),
      role: 'user',
      preferences: {
        diet_type: diet_type || 'Vegetarian',
        dietary_restrictions: dietary_restrictions || [],
        cuisine_preferences: cuisine_preferences || ['Indian'],
        cooking_preferences: cooking_preferences || ['Quick meals'],
        allergies: allergies || [],
        budget: budget || 500,
      },
    },
  });
});

// Login
router.post('/login', (req: AuthRequest, res: Response): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required.' });
    return;
  }

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email.toLowerCase().trim()) as any;
  if (!user) {
    res.status(401).json({ error: 'Invalid email or password.' });
    return;
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password_hash);
  if (!isPasswordValid) {
    res.status(401).json({ error: 'Invalid email or password.' });
    return;
  }

  const preferences = db.prepare('SELECT * FROM user_preferences WHERE user_id = ?').get(user.id) as any;

  const parsedPrefs = preferences
    ? {
        ...preferences,
        dietary_restrictions: JSON.parse(preferences.dietary_restrictions || '[]'),
        cuisine_preferences: JSON.parse(preferences.cuisine_preferences || '[]'),
        cooking_preferences: JSON.parse(preferences.cooking_preferences || '[]'),
        allergies: JSON.parse(preferences.allergies || '[]'),
      }
    : null;

  const token = generateToken({ id: user.id, email: user.email, role: user.role });

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile_image: user.profile_image,
      preferences: parsedPrefs,
    },
  });
});

// Get current user profile & preferences
router.get('/me', authMiddleware, (req: AuthRequest, res: Response): void => {
  const user = db.prepare('SELECT id, name, email, profile_image, role, created_at FROM users WHERE id = ?').get(req.user!.id) as any;
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  const preferences = db.prepare('SELECT * FROM user_preferences WHERE user_id = ?').get(user.id) as any;
  const parsedPrefs = preferences
    ? {
        ...preferences,
        dietary_restrictions: JSON.parse(preferences.dietary_restrictions || '[]'),
        cuisine_preferences: JSON.parse(preferences.cuisine_preferences || '[]'),
        cooking_preferences: JSON.parse(preferences.cooking_preferences || '[]'),
        allergies: JSON.parse(preferences.allergies || '[]'),
      }
    : null;

  res.json({
    user: {
      ...user,
      preferences: parsedPrefs,
    },
  });
});

// Update preferences
router.put('/preferences', authMiddleware, (req: AuthRequest, res: Response): void => {
  const { diet_type, dietary_restrictions, cuisine_preferences, cooking_preferences, allergies, budget } = req.body;

  const existingPref = db.prepare('SELECT id FROM user_preferences WHERE user_id = ?').get(req.user!.id) as any;

  if (existingPref) {
    db.prepare(`
      UPDATE user_preferences
      SET diet_type = ?, dietary_restrictions = ?, cuisine_preferences = ?, cooking_preferences = ?, allergies = ?, budget = ?, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = ?
    `).run(
      diet_type || 'Vegetarian',
      JSON.stringify(dietary_restrictions || []),
      JSON.stringify(cuisine_preferences || []),
      JSON.stringify(cooking_preferences || []),
      JSON.stringify(allergies || []),
      budget || 500,
      req.user!.id
    );
  } else {
    db.prepare(`
      INSERT INTO user_preferences (id, user_id, diet_type, dietary_restrictions, cuisine_preferences, cooking_preferences, allergies, budget)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      uuidv4(),
      req.user!.id,
      diet_type || 'Vegetarian',
      JSON.stringify(dietary_restrictions || []),
      JSON.stringify(cuisine_preferences || []),
      JSON.stringify(cooking_preferences || []),
      JSON.stringify(allergies || []),
      budget || 500
    );
  }

  res.json({
    message: 'Preferences updated successfully',
    preferences: {
      diet_type,
      dietary_restrictions,
      cuisine_preferences,
      cooking_preferences,
      allergies,
      budget,
    },
  });
});

export default router;
