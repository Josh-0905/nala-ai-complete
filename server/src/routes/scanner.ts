import { Router, Request, Response } from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { visionService } from '../services/ai/visionService.js';
import { optionalAuthMiddleware, AuthRequest } from '../middleware/auth.js';
import { db } from '../database/db.js';

const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  storage: multer.memoryStorage(),
});

const router = Router();

// Analyze image
router.post('/analyze', optionalAuthMiddleware, upload.single('image'), async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const file = req.file;
    const { preset, fileName: customFileName, apiKey: bodyApiKey, apiProvider: bodyProvider, dishHint } = req.body;

    const apiKey = bodyApiKey || (req.headers['x-gemini-key'] as string) || (req.headers['x-openai-key'] as string);
    const apiProvider = bodyProvider || (req.headers['x-openai-key'] ? 'openai' : 'gemini');

    let buffer: Buffer | undefined = file ? file.buffer : undefined;
    let mimeType: string | undefined = file ? file.mimetype : 'image/jpeg';
    let fileName: string = file ? file.originalname : customFileName || preset || 'camera-capture.jpg';

    // If preset test tray provided
    if (preset) {
      fileName = preset;
    }

    const detection = await visionService.detectIngredients(buffer, mimeType, fileName, apiKey, apiProvider, dishHint);

    // Save scan entry
    const scanId = uuidv4();
    const userId = req.user ? req.user.id : null;

    db.prepare(`
      INSERT INTO scans (id, user_id, image_url, detected_ingredients, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      scanId,
      userId,
      file ? `data:${mimeType};base64,${buffer?.toString('base64').substring(0, 100)}...` : 'demo-tray',
      JSON.stringify(detection.ingredients),
      new Date().toISOString()
    );

    res.json({
      scanId,
      ingredients: detection.ingredients,
      lowConfidenceFound: detection.lowConfidenceFound,
      source: detection.source,
      message: detection.message,
    });
  } catch (err: any) {
    console.error('Image analysis error:', err);
    res.status(500).json({
      error: "Hmm... we couldn't clearly identify the ingredients. Try taking a brighter, clearer photo.",
      details: err.message,
    });
  }
});

// Confirm ingredients
router.post('/confirm', optionalAuthMiddleware, (req: AuthRequest, res: Response): void => {
  const { scanId, confirmedIngredients } = req.body;

  if (scanId) {
    db.prepare(`
      UPDATE scans
      SET confirmed_ingredients = ?
      WHERE id = ?
    `).run(JSON.stringify(confirmedIngredients || []), scanId);
  }

  res.json({
    message: 'Ingredients confirmed successfully',
    confirmedIngredients,
  });
});

// Parse ingredients from natural language chat or messages
router.post('/parse-message', (req: Request, res: Response): void => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Please provide a message containing items.' });
      return;
    }

    const detected = parseIngredientsFromText(message);
    res.json({
      ingredients: detected,
      count: detected.length,
      message: detected.length > 0
        ? `Identified ${detected.length} ingredients from your message!`
        : `Could not recognize specific food ingredients. Try naming items like 'eggs, bread, butter' or 'chicken, garlic, lemon'.`,
    });
  } catch (err: any) {
    console.error('Parse message error:', err);
    res.status(500).json({ error: 'Failed to parse ingredients.', details: err.message });
  }
});

// Comprehensive culinary dictionary and categories for message parsing
const INGREDIENT_LOOKUP: { [key: string]: { name: string; category: string } } = {
  // Oils & Fats
  'cooking oil': { name: 'Cooking Oil', category: 'Oils & Fats' },
  oil: { name: 'Cooking Oil', category: 'Oils & Fats' },
  'vegetable oil': { name: 'Cooking Oil', category: 'Oils & Fats' },
  'olive oil': { name: 'Olive Oil', category: 'Oils & Fats' },
  'sunflower oil': { name: 'Cooking Oil', category: 'Oils & Fats' },
  'mustard oil': { name: 'Mustard Oil', category: 'Oils & Fats' },
  'sesame oil': { name: 'Sesame Oil', category: 'Oils & Fats' },
  'coconut oil': { name: 'Coconut Oil', category: 'Oils & Fats' },
  ghee: { name: 'Ghee', category: 'Oils & Fats' },
  butter: { name: 'Butter', category: 'Oils & Fats' },

  // Proteins
  egg: { name: 'Egg', category: 'Proteins' },
  eggs: { name: 'Egg', category: 'Proteins' },
  chicken: { name: 'Chicken', category: 'Proteins' },
  mutton: { name: 'Mutton', category: 'Proteins' },
  meat: { name: 'Mutton', category: 'Proteins' },
  fish: { name: 'Fish', category: 'Proteins' },
  prawn: { name: 'Prawns', category: 'Proteins' },
  prawns: { name: 'Prawns', category: 'Proteins' },
  shrimp: { name: 'Prawns', category: 'Proteins' },
  paneer: { name: 'Paneer', category: 'Dairy' },
  cheese: { name: 'Cheese', category: 'Dairy' },
  milk: { name: 'Milk', category: 'Dairy' },
  curd: { name: 'Curd', category: 'Dairy' },
  yogurt: { name: 'Curd', category: 'Dairy' },
  dahi: { name: 'Curd', category: 'Dairy' },
  cream: { name: 'Milk', category: 'Dairy' },
  tofu: { name: 'Tofu', category: 'Proteins' },
  'soya chunks': { name: 'Soya Chunks', category: 'Proteins' },
  soya: { name: 'Soya Chunks', category: 'Proteins' },

  // Grains & Bakery
  bread: { name: 'Bread', category: 'Grains' },
  toast: { name: 'Bread', category: 'Grains' },
  rice: { name: 'Rice', category: 'Grains' },
  'basmati rice': { name: 'Rice', category: 'Grains' },
  pasta: { name: 'Pasta', category: 'Grains' },
  spaghetti: { name: 'Pasta', category: 'Grains' },
  penne: { name: 'Pasta', category: 'Grains' },
  macaroni: { name: 'Pasta', category: 'Grains' },
  noodles: { name: 'Noodles', category: 'Grains' },
  noodle: { name: 'Noodles', category: 'Grains' },
  oats: { name: 'Oats', category: 'Grains' },
  oatmeal: { name: 'Oats', category: 'Grains' },
  flour: { name: 'Wheat Flour', category: 'Grains' },
  maida: { name: 'All Purpose Flour', category: 'Grains' },
  atta: { name: 'Wheat Flour', category: 'Grains' },
  poha: { name: 'Poha', category: 'Grains' },
  dal: { name: 'Toor Dal', category: 'Grains' },
  'toor dal': { name: 'Toor Dal', category: 'Grains' },
  'moong dal': { name: 'Moong Dal', category: 'Grains' },
  lentils: { name: 'Toor Dal', category: 'Grains' },
  chickpeas: { name: 'Chickpeas', category: 'Grains' },
  chana: { name: 'Chickpeas', category: 'Grains' },
  peanuts: { name: 'Peanuts', category: 'Grains' },
  peanut: { name: 'Peanuts', category: 'Grains' },

  // Vegetables
  potato: { name: 'Potato', category: 'Vegetables' },
  potatoes: { name: 'Potato', category: 'Vegetables' },
  aloo: { name: 'Potato', category: 'Vegetables' },
  tomato: { name: 'Tomato', category: 'Vegetables' },
  tomatoes: { name: 'Tomato', category: 'Vegetables' },
  onion: { name: 'Onion', category: 'Vegetables' },
  onions: { name: 'Onion', category: 'Vegetables' },
  garlic: { name: 'Garlic', category: 'Vegetables' },
  ginger: { name: 'Ginger', category: 'Vegetables' },
  chilli: { name: 'Green Chilli', category: 'Vegetables' },
  chillies: { name: 'Green Chilli', category: 'Vegetables' },
  mirchi: { name: 'Green Chilli', category: 'Vegetables' },
  coriander: { name: 'Coriander', category: 'Vegetables' },
  cilantro: { name: 'Coriander', category: 'Vegetables' },
  carrot: { name: 'Carrot', category: 'Vegetables' },
  carrots: { name: 'Carrot', category: 'Vegetables' },
  capsicum: { name: 'Bell Pepper', category: 'Vegetables' },
  pepper: { name: 'Bell Pepper', category: 'Vegetables' },
  'bell pepper': { name: 'Bell Pepper', category: 'Vegetables' },
  broccoli: { name: 'Broccoli', category: 'Vegetables' },
  mushroom: { name: 'Mushroom', category: 'Vegetables' },
  mushrooms: { name: 'Mushroom', category: 'Vegetables' },
  spinach: { name: 'Spinach', category: 'Vegetables' },
  palak: { name: 'Spinach', category: 'Vegetables' },
  corn: { name: 'Sweet Corn', category: 'Vegetables' },
  'sweet corn': { name: 'Sweet Corn', category: 'Vegetables' },
  peas: { name: 'Green Peas', category: 'Vegetables' },
  cucumber: { name: 'Cucumber', category: 'Vegetables' },
  cabbage: { name: 'Cabbage', category: 'Vegetables' },
  cauliflower: { name: 'Cauliflower', category: 'Vegetables' },
  gobi: { name: 'Cauliflower', category: 'Vegetables' },
  okra: { name: 'Okra', category: 'Vegetables' },
  bhindi: { name: 'Okra', category: 'Vegetables' },
  eggplant: { name: 'Eggplant', category: 'Vegetables' },
  brinjal: { name: 'Eggplant', category: 'Vegetables' },
  baingan: { name: 'Eggplant', category: 'Vegetables' },
  zucchini: { name: 'Zucchini', category: 'Vegetables' },
  mint: { name: 'Mint', category: 'Vegetables' },
  tamarind: { name: 'Tamarind', category: 'Vegetables' },
  'curry leaves': { name: 'Curry Leaves', category: 'Vegetables' },
  'curry leaf': { name: 'Curry Leaves', category: 'Vegetables' },

  // Fruits
  lemon: { name: 'Lemon', category: 'Fruits' },
  lime: { name: 'Lemon', category: 'Fruits' },
  nimbu: { name: 'Lemon', category: 'Fruits' },
  apple: { name: 'Apple', category: 'Fruits' },
  apples: { name: 'Apple', category: 'Fruits' },
  banana: { name: 'Banana', category: 'Fruits' },
  bananas: { name: 'Banana', category: 'Fruits' },
  mango: { name: 'Mango', category: 'Fruits' },
  strawberry: { name: 'Strawberry', category: 'Fruits' },
  strawberries: { name: 'Strawberry', category: 'Fruits' },
  avocado: { name: 'Avocado', category: 'Fruits' },
  'dragon fruit': { name: 'Dragon Fruit', category: 'Fruits' },
  orange: { name: 'Orange', category: 'Fruits' },
  pomegranate: { name: 'Pomegranate', category: 'Fruits' },
  watermelon: { name: 'Watermelon', category: 'Fruits' },

  // Daily Vegetables & Gourds
  'bottle gourd': { name: 'Bottle Gourd', category: 'Vegetables' },
  lauki: { name: 'Bottle Gourd', category: 'Vegetables' },
  sorakaya: { name: 'Bottle Gourd', category: 'Vegetables' },
  'ridge gourd': { name: 'Ridge Gourd', category: 'Vegetables' },
  turai: { name: 'Ridge Gourd', category: 'Vegetables' },
  beerakaya: { name: 'Ridge Gourd', category: 'Vegetables' },
  'bitter gourd': { name: 'Bitter Gourd', category: 'Vegetables' },
  karela: { name: 'Bitter Gourd', category: 'Vegetables' },
  drumstick: { name: 'Drumstick', category: 'Vegetables' },
  munakkaya: { name: 'Drumstick', category: 'Vegetables' },
  'french beans': { name: 'French Beans', category: 'Vegetables' },
  beans: { name: 'French Beans', category: 'Vegetables' },
  beetroot: { name: 'Beetroot', category: 'Vegetables' },
  radish: { name: 'Radish', category: 'Vegetables' },
  mooli: { name: 'Radish', category: 'Vegetables' },
  'sweet potato': { name: 'Sweet Potato', category: 'Vegetables' },
  pumpkin: { name: 'Pumpkin', category: 'Vegetables' },
  kaddu: { name: 'Pumpkin', category: 'Vegetables' },

  // Masalas & Ground Spice Powders
  'garam masala': { name: 'Garam Masala', category: 'Masalas' },
  'chicken masala': { name: 'Chicken Masala', category: 'Masalas' },
  'chicken curry masala': { name: 'Chicken Masala', category: 'Masalas' },
  'mutton masala': { name: 'Mutton Masala', category: 'Masalas' },
  'meat masala': { name: 'Mutton Masala', category: 'Masalas' },
  'biryani masala': { name: 'Biryani Masala', category: 'Masalas' },
  'red chilli powder': { name: 'Red Chilli Powder', category: 'Masalas' },
  'chilli powder': { name: 'Red Chilli Powder', category: 'Masalas' },
  'mirchi powder': { name: 'Red Chilli Powder', category: 'Masalas' },
  'turmeric powder': { name: 'Turmeric Powder', category: 'Masalas' },
  turmeric: { name: 'Turmeric Powder', category: 'Masalas' },
  haldi: { name: 'Turmeric Powder', category: 'Masalas' },
  'coriander powder': { name: 'Coriander Powder', category: 'Masalas' },
  'dhania powder': { name: 'Coriander Powder', category: 'Masalas' },
  'cumin powder': { name: 'Cumin Powder', category: 'Masalas' },
  'jeera powder': { name: 'Cumin Powder', category: 'Masalas' },
  'sambar powder': { name: 'Sambar Powder', category: 'Masalas' },
  'rasam powder': { name: 'Rasam Powder', category: 'Masalas' },
  'chaat masala': { name: 'Chaat Masala', category: 'Masalas' },
  'pav bhaji masala': { name: 'Pav Bhaji Masala', category: 'Masalas' },
  'chole masala': { name: 'Chole Masala', category: 'Masalas' },
  'kitchen king masala': { name: 'Kitchen King Masala', category: 'Masalas' },
  'kasuri methi': { name: 'Kasuri Methi', category: 'Masalas' },
  'curry powder': { name: 'Curry Powder', category: 'Masalas' },
  'magic masala': { name: 'Magic Masala', category: 'Masalas' },

  // Pantry & Spices
  honey: { name: 'Honey', category: 'Pantry' },
  sugar: { name: 'Sugar', category: 'Pantry' },
  salt: { name: 'Salt', category: 'Pantry' },
  'black pepper': { name: 'Black Pepper', category: 'Spices' },
  cumin: { name: 'Cumin Seeds', category: 'Spices' },
  jeera: { name: 'Cumin Seeds', category: 'Spices' },
  mustard: { name: 'Mustard Seeds', category: 'Spices' },
  cinnamon: { name: 'Cinnamon', category: 'Spices' },
  coconut: { name: 'Coconut', category: 'Pantry' },
  cashew: { name: 'Cashews', category: 'Pantry' },
  cashews: { name: 'Cashews', category: 'Pantry' },
  almond: { name: 'Almonds', category: 'Pantry' },
  almonds: { name: 'Almonds', category: 'Pantry' },
  mayo: { name: 'Mayonnaise', category: 'Pantry' },
  mayonnaise: { name: 'Mayonnaise', category: 'Pantry' },
  'soy sauce': { name: 'Soy Sauce', category: 'Pantry' },
  vinegar: { name: 'Vinegar', category: 'Pantry' },
};

function parseIngredientsFromText(text: string): any[] {
  const clean = text
    .toLowerCase()
    .replace(/[?!.,;:()\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const detectedMap = new Map<string, any>();

  // 1. Check dictionary keys (sorted longest first to match phrases like 'cooking oil' before 'oil')
  const sortedKeys = Object.keys(INGREDIENT_LOOKUP).sort((a, b) => b.length - a.length);
  const fullText = ` ${clean} `;

  for (const key of sortedKeys) {
    if (fullText.includes(` ${key} `)) {
      const val = INGREDIENT_LOOKUP[key];
      if (!detectedMap.has(val.name.toLowerCase())) {
        detectedMap.set(val.name.toLowerCase(), {
          name: val.name,
          confidence: 1.0,
          category: val.category,
          confirmed: true,
        });
      }
    }
  }

  // 2. ALSO parse freeform list / comma / 'and' separated items for ANY arbitrary unlisted ingredients
  const rawParts = text
    .replace(/i have|i got|we have|got|some|a few|in my fridge|in the kitchen|in my pantry|what can i cook|what can i make|please|can you|with|using|and also/gi, ',')
    .split(/,|\sand\s|\splus\s|\s\+\s|\n/)
    .map((s) => s.trim().replace(/^\d+\s*(kg|g|cups?|tbsp|tsp|pieces?|pcs|slices?|portion)?\s*/i, '').trim())
    .filter((s) => s.length >= 2);

  for (const part of rawParts) {
    const lower = part.toLowerCase();
    // Skip single letter or common stop words
    if (['and', 'the', 'for', 'with', 'item', 'items', 'recipe', 'cook', 'make'].includes(lower)) continue;

    // Check if this part is already covered by a detected item
    const alreadyCovered = Array.from(detectedMap.keys()).some(
      (k) => k === lower || lower.includes(k) || k.includes(lower)
    );

    if (!alreadyCovered) {
      const capitalized = part.charAt(0).toUpperCase() + part.slice(1);
      detectedMap.set(capitalized.toLowerCase(), {
        name: capitalized,
        confidence: 1.0,
        category: capitalized.toLowerCase().includes('oil') ? 'Oils & Fats' : 'Pantry',
        confirmed: true,
      });
    }
  }

  return Array.from(detectedMap.values());
}

export default router;
