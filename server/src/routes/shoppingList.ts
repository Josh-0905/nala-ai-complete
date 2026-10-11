import { Router, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../database/db.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';

const router = Router();

// Ensure a default shopping list exists for user
function getOrCreateListId(userId: string): string {
  const existing = db.prepare('SELECT id FROM shopping_lists WHERE user_id = ?').get(userId) as any;
  if (existing) return existing.id;

  const newListId = uuidv4();
  db.prepare('INSERT INTO shopping_lists (id, user_id, name, created_at) VALUES (?, ?, ?, ?)').run(
    newListId,
    userId,
    'My Shopping List',
    new Date().toISOString()
  );
  return newListId;
}

// Get user's shopping list items (grouped by category)
router.get('/', authMiddleware, (req: AuthRequest, res: Response): void => {
  const listId = getOrCreateListId(req.user!.id);

  const items = db.prepare(`
    SELECT * FROM shopping_items
    WHERE shopping_list_id = ?
    ORDER BY category ASC, created_at DESC
  `).all(listId) as any[];

  // Group items by category
  const grouped: Record<string, any[]> = {};
  for (const item of items) {
    const cat = item.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({
      ...item,
      purchased: Boolean(item.purchased),
    });
  }

  res.json({
    listId,
    items: items.map((i) => ({ ...i, purchased: Boolean(i.purchased) })),
    grouped,
    totalItems: items.length,
    purchasedCount: items.filter((i) => i.purchased).length,
  });
});

// Add items (supports single item or array of missing ingredients from recipe)
router.post('/add', authMiddleware, (req: AuthRequest, res: Response): void => {
  const listId = getOrCreateListId(req.user!.id);
  const { items, name, category, quantity, unit } = req.body;

  const insertItem = db.prepare(`
    INSERT INTO shopping_items (id, shopping_list_id, ingredient_id, name, category, quantity, unit, purchased, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)
  `);

  if (Array.isArray(items) && items.length > 0) {
    // Batch add missing ingredients
    for (const item of items) {
      insertItem.run(
        uuidv4(),
        listId,
        null,
        item.name || item.ingredient_name,
        item.category || 'Pantry',
        item.quantity || 1,
        item.unit || 'pcs',
        new Date().toISOString()
      );
    }
    res.json({ message: `Added ${items.length} items to shopping list.` });
    return;
  }

  if (name) {
    // Single item add
    insertItem.run(
      uuidv4(),
      listId,
      null,
      name.trim(),
      category || 'Vegetables',
      quantity || 1,
      unit || 'pcs',
      new Date().toISOString()
    );
    res.json({ message: 'Item added successfully.' });
    return;
  }

  res.status(400).json({ error: 'Item name or items array required.' });
});

// Toggle item purchased state
router.patch('/item/:id', authMiddleware, (req: AuthRequest, res: Response): void => {
  const id = req.params.id as string;
  const { purchased, quantity } = req.body;

  if (purchased !== undefined) {
    db.prepare('UPDATE shopping_items SET purchased = ? WHERE id = ?').run(purchased ? 1 : 0, id);
  }
  if (quantity !== undefined) {
    db.prepare('UPDATE shopping_items SET quantity = ? WHERE id = ?').run(quantity, id);
  }

  res.json({ message: 'Item updated successfully.' });
});

// Delete single item
router.delete('/item/:id', authMiddleware, (req: AuthRequest, res: Response): void => {
  const id = req.params.id as string;
  db.prepare('DELETE FROM shopping_items WHERE id = ?').run(id);
  res.json({ message: 'Item deleted.' });
});

// Clear all purchased items
router.post('/clear-purchased', authMiddleware, (req: AuthRequest, res: Response): void => {
  const listId = getOrCreateListId(req.user!.id);
  db.prepare('DELETE FROM shopping_items WHERE shopping_list_id = ? AND purchased = 1').run(listId);
  res.json({ message: 'Purchased items cleared.' });
});

export default router;
