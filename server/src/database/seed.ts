import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { db, initDatabase } from './db.js';
import { seedReviews } from './seedReviews.js';
import { insertHundredRecipes } from './add100Recipes.js';
import { insertTelanganaRecipes } from './telanganaRecipes.js';
import { insertCatalogRecipes } from './add250MoreRecipes.js';
import { insertGlobalCuisineRecipes } from './addGlobalCuisineRecipes.js';

export function seedDatabase() {
  initDatabase();
  seedReviews();
  insertHundredRecipes();
  insertTelanganaRecipes();
  insertCatalogRecipes();
  insertGlobalCuisineRecipes();

  const recipeCount = db.prepare('SELECT COUNT(*) as count FROM recipes').get() as { count: number };
  if (recipeCount.count >= 20) {
    console.log(`Database already has ${recipeCount.count} recipes. Skipping full reseed.`);
    return;
  }

  console.log('🌱 Seeding expanded 26+ production recipes and ingredients into NALA AI database...');

  const hashPassword = (pwd: string) => bcrypt.hashSync(pwd, 10);

  // 1. Ensure Default Demo Users
  const demoUserId = 'usr-demo-001';
  const adminUserId = 'usr-admin-001';

  db.prepare(`
    INSERT OR REPLACE INTO users (id, name, email, password_hash, profile_image, role, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    demoUserId,
    'Aarav Sharma',
    'demo@nala.ai',
    hashPassword('password123'),
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    'user',
    new Date().toISOString()
  );

  db.prepare(`
    INSERT OR REPLACE INTO users (id, name, email, password_hash, profile_image, role, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    adminUserId,
    'NALA Admin',
    'admin@nala.ai',
    hashPassword('admin123'),
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80',
    'admin',
    new Date().toISOString()
  );

  // 2. User Preferences for Demo User
  db.prepare(`
    INSERT OR REPLACE INTO user_preferences (id, user_id, diet_type, dietary_restrictions, cuisine_preferences, cooking_preferences, allergies, budget)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    'pref-demo-001',
    demoUserId,
    'Vegetarian',
    JSON.stringify(['Low-sugar']),
    JSON.stringify(['Indian', 'Italian']),
    JSON.stringify(['Quick meals', 'High protein', 'Budget meals']),
    JSON.stringify(['Peanuts']),
    500
  );

  // 3. Extended Ingredients Catalog
  const ingredientsList = [
    { name: 'Tomato', category: 'Vegetables', unit: 'pcs', cal: 18, p: 0.9, c: 3.9, f: 0.2 },
    { name: 'Onion', category: 'Vegetables', unit: 'pcs', cal: 40, p: 1.1, c: 9.3, f: 0.1 },
    { name: 'Potato', category: 'Vegetables', unit: 'pcs', cal: 77, p: 2.0, c: 17.5, f: 0.1 },
    { name: 'Green Chilli', category: 'Vegetables', unit: 'pcs', cal: 40, p: 2.0, c: 9.0, f: 0.2 },
    { name: 'Coriander', category: 'Vegetables', unit: 'bunch', cal: 23, p: 2.1, c: 3.7, f: 0.5 },
    { name: 'Garlic', category: 'Vegetables', unit: 'cloves', cal: 149, p: 6.4, c: 33.1, f: 0.5 },
    { name: 'Ginger', category: 'Vegetables', unit: 'inch', cal: 80, p: 1.8, c: 17.8, f: 0.8 },
    { name: 'Egg', category: 'Proteins', unit: 'pcs', cal: 74, p: 6.3, c: 0.4, f: 5.0 },
    { name: 'Chicken', category: 'Proteins', unit: 'g', cal: 165, p: 31.0, c: 0, f: 3.6 },
    { name: 'Paneer', category: 'Dairy', unit: 'g', cal: 296, p: 18.0, c: 4.5, f: 22.0 },
    { name: 'Spinach', category: 'Vegetables', unit: 'bunch', cal: 23, p: 2.9, c: 3.6, f: 0.4 },
    { name: 'Rice', category: 'Grains', unit: 'g', cal: 130, p: 2.7, c: 28.2, f: 0.3 },
    { name: 'Lentils', category: 'Grains', unit: 'g', cal: 116, p: 9.0, c: 20.0, f: 0.4 },
    { name: 'Chickpeas', category: 'Grains', unit: 'g', cal: 164, p: 8.9, c: 27.4, f: 2.6 },
    { name: 'Pasta', category: 'Grains', unit: 'g', cal: 157, p: 5.8, c: 31.0, f: 0.9 },
    { name: 'Bell Pepper', category: 'Vegetables', unit: 'pcs', cal: 26, p: 1.0, c: 6.0, f: 0.3 },
    { name: 'Carrot', category: 'Vegetables', unit: 'pcs', cal: 41, p: 0.9, c: 9.6, f: 0.2 },
    { name: 'Milk', category: 'Dairy', unit: 'ml', cal: 60, p: 3.2, c: 4.8, f: 3.3 },
    { name: 'Butter', category: 'Dairy', unit: 'tbsp', cal: 102, p: 0.1, c: 0, f: 11.5 },
    { name: 'Lemon', category: 'Fruits', unit: 'pcs', cal: 29, p: 1.1, c: 9.3, f: 0.3 },
    { name: 'Cucumber', category: 'Vegetables', unit: 'pcs', cal: 15, p: 0.7, c: 3.6, f: 0.1 },
    { name: 'Cooking Oil', category: 'Oils & Condiments', unit: 'tbsp', cal: 120, p: 0, c: 0, f: 14.0 },
    { name: 'Cumin Seeds', category: 'Spices', unit: 'tsp', cal: 22, p: 1.1, c: 2.6, f: 1.3 },
    { name: 'Turmeric Powder', category: 'Spices', unit: 'tsp', cal: 24, p: 0.5, c: 4.4, f: 0.7 },
    { name: 'Red Chilli Powder', category: 'Spices', unit: 'tsp', cal: 20, p: 0.8, c: 3.5, f: 0.9 },
    { name: 'Garam Masala', category: 'Spices', unit: 'tsp', cal: 20, p: 0.6, c: 3.0, f: 0.8 },
    { name: 'Soy Sauce', category: 'Oils & Condiments', unit: 'tbsp', cal: 10, p: 1.3, c: 1.0, f: 0.1 },
    { name: 'Salt', category: 'Spices', unit: 'tsp', cal: 0, p: 0, c: 0, f: 0 }
  ];

  const insertIngredient = db.prepare(`
    INSERT OR IGNORE INTO ingredients (id, name, category, nutritional_data, default_unit)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const ing of ingredientsList) {
    insertIngredient.run(
      uuidv4(),
      ing.name,
      ing.category,
      JSON.stringify({ calories: ing.cal, protein: ing.p, carbs: ing.c, fat: ing.f }),
      ing.unit
    );
  }

  // 4. Expanded Recipe Library (22+ Real Recipes)
  const recipesData = [
    {
      id: 'rec-001',
      name: 'Masala Egg Rice',
      description: 'Fragrant and flavorful spiced rice stir-fried with scrambled eggs, caramelized onions, tomatoes, and aromatic herbs.',
      cuisine: 'Indian',
      meal_type: 'Lunch',
      diet_type: 'Eggetarian',
      difficulty: 'Easy',
      preparation_time: 10,
      cooking_time: 15,
      total_time: 25,
      servings: 2,
      estimated_cost: 95,
      image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Quick meals', 'Budget meals', 'Under 30 min'],
      nutrition: { calories: 420, protein: 18, carbs: 54, fat: 14, fiber: 3, sodium: 480 },
      instructions: [
        { step: 1, instruction: 'Finely chop 1 onion, 2 tomatoes, 2 green chillies, and fresh coriander leaves.', timerMinutes: 3 },
        { step: 2, instruction: 'Heat 2 tablespoons of cooking oil in a pan over medium flame. Crack in 2 eggs and scramble gently until just cooked. Remove and set aside.', timerMinutes: 3 },
        { step: 3, instruction: 'In the same pan, heat another tablespoon of oil, add cumin seeds, chopped onions, and sauté until golden brown.', timerMinutes: 4 },
        { step: 4, instruction: 'Add chopped tomatoes, turmeric, red chilli powder, and salt. Cook until tomatoes are soft and oil separates.', timerMinutes: 5 },
        { step: 5, instruction: 'Toss in 2 cups of cooked rice and the scrambled eggs. Stir fry on high flame for 2 minutes to blend all flavors.', timerMinutes: 2 },
        { step: 6, instruction: 'Garnish with freshly chopped coriander and squeeze a dash of fresh lemon juice. Serve hot!', timerMinutes: 0 }
      ],
      ingredients: [
        { name: 'Rice', quantity: 200, unit: 'g', category: 'Grains' },
        { name: 'Egg', quantity: 2, unit: 'pcs', category: 'Proteins' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Cumin Seeds', quantity: 0.5, unit: 'tsp', category: 'Spices' },
        { name: 'Salt', quantity: 1, unit: 'tsp', category: 'Spices' }
      ]
    },
    {
      id: 'rec-002',
      name: 'Crispy Jeera Aloo (Cumin Spiced Potatoes)',
      description: 'Golden spiced potato cubes tossed with toasted cumin seeds, vibrant turmeric, and fiery green chillies.',
      cuisine: 'North Indian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 8,
      cooking_time: 14,
      total_time: 22,
      servings: 2,
      estimated_cost: 60,
      image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Vegan', 'Budget meals', 'Quick meals', 'Gluten-free'],
      nutrition: { calories: 230, protein: 4, carbs: 36, fat: 8, fiber: 4, sodium: 390 },
      instructions: [
        { step: 1, instruction: 'Wash, peel, and dice 3 medium potatoes into 1-inch bite-sized cubes.', timerMinutes: 3 },
        { step: 2, instruction: 'Heat 2 tablespoons of oil in a heavy-bottomed skillet over medium heat.', timerMinutes: 2 },
        { step: 3, instruction: 'Add 1.5 teaspoons of cumin seeds and let them sizzle for 30 seconds until aromatic.', timerMinutes: 1 },
        { step: 4, instruction: 'Add slit green chillies and diced potatoes. Sauté on medium-high heat for 3 minutes.', timerMinutes: 3 },
        { step: 5, instruction: 'Lower heat, sprinkle turmeric, red chilli powder, and salt. Cover with lid and cook for 8-10 minutes until fork-tender and crispy.', timerMinutes: 9 },
        { step: 6, instruction: 'Uncover, roast on high heat for 1 minute for extra crispiness, and top with fresh chopped coriander.', timerMinutes: 1 }
      ],
      ingredients: [
        { name: 'Potato', quantity: 3, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cumin Seeds', quantity: 1.5, unit: 'tsp', category: 'Spices' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Salt', quantity: 1, unit: 'tsp', category: 'Spices' }
      ]
    },
    {
      id: 'rec-003',
      name: 'Spicy Potato Onion Bhurji',
      description: 'A comforting homestyle dry curry featuring shredded potatoes and caramelized onions seasoned with green chillies and warm spices.',
      cuisine: 'Indian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 10,
      cooking_time: 15,
      total_time: 25,
      servings: 2,
      estimated_cost: 65,
      image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Budget meals', 'Under 30 min'],
      nutrition: { calories: 260, protein: 5, carbs: 42, fat: 9, fiber: 5, sodium: 410 },
      instructions: [
        { step: 1, instruction: 'Thinly slice 2 onions and grate or finely dice 2 peeled potatoes.', timerMinutes: 4 },
        { step: 2, instruction: 'Heat 2 tablespoons of oil in a kadai. Add cumin seeds and minced green chillies.', timerMinutes: 2 },
        { step: 3, instruction: 'Add sliced onions and cook until translucent and lightly golden.', timerMinutes: 4 },
        { step: 4, instruction: 'Add diced potatoes, turmeric, red chilli powder, and salt. Stir well to coat evenly.', timerMinutes: 3 },
        { step: 5, instruction: 'Cover and simmer on medium-low for 8 minutes until potatoes are thoroughly cooked.', timerMinutes: 8 },
        { step: 6, instruction: 'Garnish generously with finely chopped fresh coriander leaves.', timerMinutes: 0 }
      ],
      ingredients: [
        { name: 'Potato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Salt', quantity: 1, unit: 'tsp', category: 'Spices' }
      ]
    },
    {
      id: 'rec-004',
      name: 'Classic Tomato Onion Egg Curry',
      description: 'Rich and spicy North Indian style curry with pan-fried boiled eggs simmered in a luscious tomato and onion gravy.',
      cuisine: 'North Indian',
      meal_type: 'Dinner',
      diet_type: 'Eggetarian',
      difficulty: 'Medium',
      preparation_time: 10,
      cooking_time: 20,
      total_time: 30,
      servings: 3,
      estimated_cost: 110,
      image_url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Dinner', 'Family meals'],
      nutrition: { calories: 340, protein: 21, carbs: 18, fat: 20, fiber: 4, sodium: 520 },
      instructions: [
        { step: 1, instruction: 'Hard-boil 4 eggs, peel them, and prick lightly with a fork. Dust with turmeric and salt.', timerMinutes: 10 },
        { step: 2, instruction: 'Heat 2 tbsp oil in a pan and shallow-fry eggs until golden blistered. Set aside.', timerMinutes: 4 },
        { step: 3, instruction: 'Sauté chopped onions, minced garlic, and ginger until deep golden brown.', timerMinutes: 6 },
        { step: 4, instruction: 'Add diced tomatoes and spices. Cook until tomatoes are completely soft and fragrant.', timerMinutes: 6 },
        { step: 5, instruction: 'Slide in eggs, simmer for 5 minutes, and finish with fresh coriander.', timerMinutes: 5 }
      ],
      ingredients: [
        { name: 'Egg', quantity: 4, unit: 'pcs', category: 'Proteins' },
        { name: 'Onion', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 3, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Ginger', quantity: 1, unit: 'inch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Salt', quantity: 1, unit: 'tsp', category: 'Spices' }
      ]
    },
    {
      id: 'rec-005',
      name: 'South Indian Tomato Rice (Thakkali Sadam)',
      description: 'Zesty and tangy temple-style spiced tomato rice tempered with mustard seeds, onions, and fresh chillies.',
      cuisine: 'South Indian',
      meal_type: 'Lunch',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 10,
      cooking_time: 15,
      total_time: 25,
      servings: 2,
      estimated_cost: 75,
      image_url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'South Indian', 'Quick meals', 'Under 30 min'],
      nutrition: { calories: 350, protein: 7, carbs: 62, fat: 8, fiber: 5, sodium: 440 },
      instructions: [
        { step: 1, instruction: 'Cook 1 cup of raw rice until fluffy and let it cool completely.', timerMinutes: 12 },
        { step: 2, instruction: 'Heat 2 tbsp oil in a pan, crackle mustard seeds and green chillies.', timerMinutes: 2 },
        { step: 3, instruction: 'Add sliced onions and cook until soft and translucent.', timerMinutes: 3 },
        { step: 4, instruction: 'Add chopped tomatoes, salt, and turmeric. Cook until soft and mushy.', timerMinutes: 6 },
        { step: 5, instruction: 'Gently fold in cooked rice and top with coriander.', timerMinutes: 2 }
      ],
      ingredients: [
        { name: 'Rice', quantity: 200, unit: 'g', category: 'Grains' },
        { name: 'Tomato', quantity: 3, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Salt', quantity: 1, unit: 'tsp', category: 'Spices' }
      ]
    },
    {
      id: 'rec-006',
      name: 'Quick Vegetable Fried Rice',
      description: 'Wok-tossed aromatic rice with finely diced vegetables, garlic, and savory soy sauce.',
      cuisine: 'Chinese',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 10,
      cooking_time: 10,
      total_time: 20,
      servings: 2,
      estimated_cost: 90,
      image_url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Chinese', 'Quick meals', 'Under 30 min'],
      nutrition: { calories: 380, protein: 8, carbs: 64, fat: 10, fiber: 4, sodium: 620 },
      instructions: [
        { step: 1, instruction: 'Finely dice carrots, bell peppers, onions, and mince garlic.', timerMinutes: 5 },
        { step: 2, instruction: 'Flash-fry garlic and vegetables on high flame for 3 minutes.', timerMinutes: 3 },
        { step: 3, instruction: 'Add cold cooked rice, soy sauce, and toss thoroughly for 2 minutes.', timerMinutes: 2 }
      ],
      ingredients: [
        { name: 'Rice', quantity: 200, unit: 'g', category: 'Grains' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Carrot', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Bell Pepper', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Soy Sauce', quantity: 1.5, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-007',
      name: 'Creamy Garlic Tomato Pasta',
      description: 'Penne tossed in a silky homemade garlic-infused tomato sauce with herbs and olive oil.',
      cuisine: 'Italian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 10,
      cooking_time: 15,
      total_time: 25,
      servings: 2,
      estimated_cost: 130,
      image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80',
      tags: ['Italian', 'Under 30 min', 'Comfort food'],
      nutrition: { calories: 440, protein: 14, carbs: 68, fat: 12, fiber: 5, sodium: 490 },
      instructions: [
        { step: 1, instruction: 'Boil pasta in salted water for 9 minutes until al dente.', timerMinutes: 9 },
        { step: 2, instruction: 'Sauté garlic and onion in olive oil until golden.', timerMinutes: 3 },
        { step: 3, instruction: 'Add pureed tomatoes and simmer into a thick marinara sauce.', timerMinutes: 6 },
        { step: 4, instruction: 'Stir in milk/cream and toss pasta until completely coated.', timerMinutes: 2 }
      ],
      ingredients: [
        { name: 'Pasta', quantity: 200, unit: 'g', category: 'Grains' },
        { name: 'Tomato', quantity: 3, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Milk', quantity: 50, unit: 'ml', category: 'Dairy' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-008',
      name: 'Paneer Bhurji (Scrambled Spiced Paneer)',
      description: 'Crumbled cottage cheese cooked with chopped onions, tomatoes, ginger, and aromatic Indian spices.',
      cuisine: 'North Indian',
      meal_type: 'Breakfast',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 8,
      cooking_time: 12,
      total_time: 20,
      servings: 2,
      estimated_cost: 140,
      image_url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Low-carb', 'Quick meals', 'Under 30 min'],
      nutrition: { calories: 360, protein: 22, carbs: 12, fat: 25, fiber: 3, sodium: 450 },
      instructions: [
        { step: 1, instruction: 'Crumble 200g of fresh paneer with your fingers.', timerMinutes: 2 },
        { step: 2, instruction: 'Sauté chopped onions, ginger, and chillies in oil until soft.', timerMinutes: 4 },
        { step: 3, instruction: 'Add tomatoes and spices, cook until juicy.', timerMinutes: 3 },
        { step: 4, instruction: 'Fold in crumbled paneer, cook for 3 minutes, garnish with coriander.', timerMinutes: 3 }
      ],
      ingredients: [
        { name: 'Paneer', quantity: 200, unit: 'g', category: 'Dairy' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Ginger', quantity: 1, unit: 'inch', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 1.5, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-009',
      name: 'Homestyle Chicken Curry',
      description: 'Tender chicken pieces simmered in an aromatic onion, ginger, garlic, and tomato curry sauce.',
      cuisine: 'North Indian',
      meal_type: 'Dinner',
      diet_type: 'Non-Vegetarian',
      difficulty: 'Medium',
      preparation_time: 10,
      cooking_time: 20,
      total_time: 30,
      servings: 3,
      estimated_cost: 220,
      image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Non-Vegetarian', 'Dinner', 'Under 30 min'],
      nutrition: { calories: 410, protein: 36, carbs: 10, fat: 24, fiber: 3, sodium: 580 },
      instructions: [
        { step: 1, instruction: 'Clean and cut 350g chicken into bite-sized curry cuts.', timerMinutes: 5 },
        { step: 2, instruction: 'Sauté chopped onions, garlic, and ginger in oil until rich deep golden.', timerMinutes: 6 },
        { step: 3, instruction: 'Add chopped tomatoes, chilli powder, turmeric, and salt. Cook until oil glazes on top.', timerMinutes: 5 },
        { step: 4, instruction: 'Add chicken pieces and sear on high heat for 4 minutes to seal juices.', timerMinutes: 4 },
        { step: 5, instruction: 'Add 1/2 cup warm water, cover and simmer on medium flame for 12 minutes until chicken is tender.', timerMinutes: 12 },
        { step: 6, instruction: 'Finish with chopped coriander and serve hot with steamed rice or flatbreads.', timerMinutes: 0 }
      ],
      ingredients: [
        { name: 'Chicken', quantity: 350, unit: 'g', category: 'Proteins' },
        { name: 'Onion', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 5, unit: 'cloves', category: 'Vegetables' },
        { name: 'Ginger', quantity: 1, unit: 'inch', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-010',
      name: 'Restaurant Style Butter Chicken',
      description: 'Succulent chicken in a velvety, buttery tomato and cream gravy infused with garlic and warm spices.',
      cuisine: 'North Indian',
      meal_type: 'Dinner',
      diet_type: 'Non-Vegetarian',
      difficulty: 'Medium',
      preparation_time: 10,
      cooking_time: 20,
      total_time: 30,
      servings: 3,
      estimated_cost: 250,
      image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
      tags: ['Non-Vegetarian', 'Dinner', 'High protein', 'Comfort food'],
      nutrition: { calories: 490, protein: 34, carbs: 14, fat: 32, fiber: 2, sodium: 620 },
      instructions: [
        { step: 1, instruction: 'Pan-sear chicken cubes in 1 tbsp butter for 5 minutes until lightly browned. Set aside.', timerMinutes: 5 },
        { step: 2, instruction: 'In the pan, sauté minced garlic, ginger, and onion in butter.', timerMinutes: 3 },
        { step: 3, instruction: 'Add pureed ripe tomatoes and simmer until rich and concentrated.', timerMinutes: 7 },
        { step: 4, instruction: 'Pour in milk or fresh cream and slide the chicken back into the gravy.', timerMinutes: 5 },
        { step: 5, instruction: 'Garnish with a dollop of butter and fresh coriander.', timerMinutes: 0 }
      ],
      ingredients: [
        { name: 'Chicken', quantity: 300, unit: 'g', category: 'Proteins' },
        { name: 'Tomato', quantity: 4, unit: 'pcs', category: 'Vegetables' },
        { name: 'Butter', quantity: 2, unit: 'tbsp', category: 'Dairy' },
        { name: 'Milk', quantity: 60, unit: 'ml', category: 'Dairy' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Ginger', quantity: 1, unit: 'inch', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' }
      ]
    },
    {
      id: 'rec-011',
      name: 'Kadai Paneer & Bell Peppers',
      description: 'Paneer cubes stir-fried with crunchy bell peppers, onions, tomatoes, and freshly ground coriander spices.',
      cuisine: 'North Indian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 8,
      cooking_time: 14,
      total_time: 22,
      servings: 2,
      estimated_cost: 160,
      image_url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'High protein', 'Under 30 min'],
      nutrition: { calories: 370, protein: 20, carbs: 14, fat: 26, fiber: 4, sodium: 460 },
      instructions: [
        { step: 1, instruction: 'Cut bell peppers and onions into 1-inch crunchy petals. Cube paneer.', timerMinutes: 4 },
        { step: 2, instruction: 'Flash sauté bell peppers and onion petals on high flame for 2 minutes to keep them crisp. Remove.', timerMinutes: 2 },
        { step: 3, instruction: 'In the same pan, make a rich onion-tomato masala with ginger, garlic, and spices.', timerMinutes: 6 },
        { step: 4, instruction: 'Toss paneer and sauteed bell peppers into the masala. Cook for 2 minutes.', timerMinutes: 2 }
      ],
      ingredients: [
        { name: 'Paneer', quantity: 200, unit: 'g', category: 'Dairy' },
        { name: 'Bell Pepper', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 3, unit: 'cloves', category: 'Vegetables' },
        { name: 'Ginger', quantity: 1, unit: 'inch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-012',
      name: 'Creamy Palak Paneer (Spinach Cottage Cheese)',
      description: 'Soft paneer cubes simmered in a vibrant, velvety spiced pureed spinach gravy with garlic and ginger.',
      cuisine: 'North Indian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Medium',
      preparation_time: 10,
      cooking_time: 15,
      total_time: 25,
      servings: 2,
      estimated_cost: 150,
      image_url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'High protein', 'Healthy', 'Under 30 min'],
      nutrition: { calories: 340, protein: 21, carbs: 11, fat: 23, fiber: 5, sodium: 430 },
      instructions: [
        { step: 1, instruction: 'Blanch spinach in boiling water for 2 minutes, then puree into a smooth green cream.', timerMinutes: 4 },
        { step: 2, instruction: 'Sauté chopped onions, garlic, and ginger in oil until golden.', timerMinutes: 4 },
        { step: 3, instruction: 'Add chopped tomatoes and spices, cook until oil separates.', timerMinutes: 4 },
        { step: 4, instruction: 'Pour in the vibrant green spinach puree, add paneer cubes, and simmer for 3 minutes.', timerMinutes: 3 }
      ],
      ingredients: [
        { name: 'Spinach', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Paneer', quantity: 200, unit: 'g', category: 'Dairy' },
        { name: 'Garlic', quantity: 5, unit: 'cloves', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Ginger', quantity: 1, unit: 'inch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 1.5, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-013',
      name: 'Golden Homestyle Dal Tadka',
      description: 'Comforting yellow lentils tempered with sizzled cumin seeds, garlic, onions, tomatoes, and red chillies.',
      cuisine: 'Indian',
      meal_type: 'Lunch',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 5,
      cooking_time: 20,
      total_time: 25,
      servings: 2,
      estimated_cost: 55,
      image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Vegan', 'Budget meals', 'Comfort food', 'Under 30 min'],
      nutrition: { calories: 290, protein: 16, carbs: 46, fat: 6, fiber: 11, sodium: 420 },
      instructions: [
        { step: 1, instruction: 'Boil yellow lentils in water with turmeric and salt until tender and creamy.', timerMinutes: 14 },
        { step: 2, instruction: 'In a tadka pan, heat oil, add cumin seeds, sliced garlic, and chillies until aromatic.', timerMinutes: 2 },
        { step: 3, instruction: 'Add chopped onions and tomatoes, sauté until soft.', timerMinutes: 4 },
        { step: 4, instruction: 'Pour the sizzling tadka over the hot boiled dal. Top with coriander and serve.', timerMinutes: 1 }
      ],
      ingredients: [
        { name: 'Lentils', quantity: 150, unit: 'g', category: 'Grains' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 1.5, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-014',
      name: 'Nourishing Dal Palak (Spinach Lentil Stew)',
      description: 'Wholesome protein-packed stew combining tender yellow lentils, wilted spinach leaves, garlic, and cumin.',
      cuisine: 'Indian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 8,
      cooking_time: 18,
      total_time: 26,
      servings: 2,
      estimated_cost: 65,
      image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Vegan', 'High protein', 'Healthy', 'Budget meals'],
      nutrition: { calories: 310, protein: 18, carbs: 48, fat: 6, fiber: 13, sodium: 410 },
      instructions: [
        { step: 1, instruction: 'Cook lentils until tender.', timerMinutes: 12 },
        { step: 2, instruction: 'Sauté garlic, onions, and tomatoes in oil until fragrant.', timerMinutes: 4 },
        { step: 3, instruction: 'Stir in chopped fresh spinach leaves until wilted.', timerMinutes: 3 },
        { step: 4, instruction: 'Combine with the cooked dal, simmer for 3 minutes, and finish with lemon juice.', timerMinutes: 3 }
      ],
      ingredients: [
        { name: 'Lentils', quantity: 150, unit: 'g', category: 'Grains' },
        { name: 'Spinach', quantity: 1, unit: 'bunch', category: 'Vegetables' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 1.5, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-015',
      name: 'Spicy Mumbai Egg Bhurji',
      description: 'Street-style scrambled eggs tossed with chopped onions, tomatoes, butter, green chillies, and fresh herbs.',
      cuisine: 'Indian',
      meal_type: 'Breakfast',
      diet_type: 'Eggetarian',
      difficulty: 'Easy',
      preparation_time: 5,
      cooking_time: 8,
      total_time: 13,
      servings: 2,
      estimated_cost: 70,
      image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Under 15 min', 'Quick meals', 'Budget meals'],
      nutrition: { calories: 290, protein: 19, carbs: 8, fat: 21, fiber: 2, sodium: 490 },
      instructions: [
        { step: 1, instruction: 'Finely chop onions, tomatoes, green chillies, and coriander.', timerMinutes: 3 },
        { step: 2, instruction: 'Heat 1 tbsp butter/oil in a pan, sauté onions and green chillies for 2 minutes.', timerMinutes: 2 },
        { step: 3, instruction: 'Add tomatoes and cook until soft and juicy.', timerMinutes: 2 },
        { step: 4, instruction: 'Crack in 3 eggs, scramble gently on medium heat for 2-3 minutes until soft and creamy.', timerMinutes: 3 },
        { step: 5, instruction: 'Garnish with coriander and serve hot with toast or pav.', timerMinutes: 0 }
      ],
      ingredients: [
        { name: 'Egg', quantity: 3, unit: 'pcs', category: 'Proteins' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Butter', quantity: 1, unit: 'tbsp', category: 'Dairy' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' }
      ]
    },
    {
      id: 'rec-016',
      name: 'Mediterranean Shakshuka',
      description: 'Gently poached eggs resting in a bubbling, spiced skillet sauce of crushed tomatoes, sweet onions, and bell peppers.',
      cuisine: 'Continental',
      meal_type: 'Breakfast',
      diet_type: 'Eggetarian',
      difficulty: 'Easy',
      preparation_time: 6,
      cooking_time: 14,
      total_time: 20,
      servings: 2,
      estimated_cost: 95,
      image_url: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Under 30 min', 'Healthy'],
      nutrition: { calories: 310, protein: 18, carbs: 16, fat: 19, fiber: 4, sodium: 470 },
      instructions: [
        { step: 1, instruction: 'Sauté chopped onions, sliced bell peppers, and garlic in oil until soft.', timerMinutes: 5 },
        { step: 2, instruction: 'Add chopped tomatoes, cumin, and salt; simmer into a thick chunky sauce.', timerMinutes: 5 },
        { step: 3, instruction: 'Make 3 small wells in the sauce and crack an egg into each well.', timerMinutes: 1 },
        { step: 4, instruction: 'Cover with lid and simmer on low heat for 5 minutes until egg whites are set and yolks remain runny.', timerMinutes: 5 }
      ],
      ingredients: [
        { name: 'Egg', quantity: 3, unit: 'pcs', category: 'Proteins' },
        { name: 'Tomato', quantity: 3, unit: 'pcs', category: 'Vegetables' },
        { name: 'Bell Pepper', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 3, unit: 'cloves', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 1.5, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-017',
      name: 'Spaghetti Aglio e Olio with Chilli & Garlic',
      description: 'Classic minimalist Italian pasta tossed with golden sautéed garlic slivers, red chillies, and extra virgin olive oil.',
      cuisine: 'Italian',
      meal_type: 'Dinner',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 5,
      cooking_time: 12,
      total_time: 17,
      servings: 2,
      estimated_cost: 110,
      image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      tags: ['Italian', 'Under 20 min', 'Quick meals'],
      nutrition: { calories: 430, protein: 12, carbs: 67, fat: 13, fiber: 4, sodium: 320 },
      instructions: [
        { step: 1, instruction: 'Boil pasta in salted water for 9 minutes until al dente. Reserve 1/2 cup pasta cooking water.', timerMinutes: 9 },
        { step: 2, instruction: 'In a skillet, gently sizzle thinly sliced garlic and chopped chillies in oil until garlic is pale golden.', timerMinutes: 3 },
        { step: 3, instruction: 'Toss in the hot pasta with a splash of starchy pasta water to emulsify the glossy sauce.', timerMinutes: 2 },
        { step: 4, instruction: 'Garnish with freshly chopped herbs and serve immediately.', timerMinutes: 0 }
      ],
      ingredients: [
        { name: 'Pasta', quantity: 200, unit: 'g', category: 'Grains' },
        { name: 'Garlic', quantity: 6, unit: 'cloves', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2.5, unit: 'tbsp', category: 'Oils & Condiments' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' }
      ]
    },
    {
      id: 'rec-018',
      name: 'Fresh Tomato Cucumber Koshimbir Salad',
      description: 'Refreshing and crunchy chopped tomato and cucumber salad tossed with lemon juice, green chillies, and coriander.',
      cuisine: 'Indian',
      meal_type: 'Snack',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 7,
      cooking_time: 0,
      total_time: 7,
      servings: 2,
      estimated_cost: 40,
      image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Vegan', 'Under 15 min', 'Healthy', 'Low-carb'],
      nutrition: { calories: 85, protein: 3, carbs: 14, fat: 1, fiber: 4, sodium: 210 },
      instructions: [
        { step: 1, instruction: 'Finely dice 2 tomatoes, 1 peeled cucumber, and 1 green chilli.', timerMinutes: 4 },
        { step: 2, instruction: 'Transfer to a mixing bowl, toss with fresh coriander and salt.', timerMinutes: 1 },
        { step: 3, instruction: 'Squeeze fresh lemon juice over the top, toss well, and serve chilled.', timerMinutes: 1 }
      ],
      ingredients: [
        { name: 'Tomato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Cucumber', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Green Chilli', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Lemon', quantity: 1, unit: 'pcs', category: 'Fruits' },
        { name: 'Coriander', quantity: 1, unit: 'bunch', category: 'Vegetables' }
      ]
    },
    {
      id: 'rec-019',
      name: 'Aromatic Vegetable Masala Pulao',
      description: 'Fragrant one-pot basmati rice infused with potatoes, carrots, onions, tomatoes, and toasted cumin.',
      cuisine: 'Indian',
      meal_type: 'Lunch',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 10,
      cooking_time: 15,
      total_time: 25,
      servings: 3,
      estimated_cost: 90,
      image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Vegan', 'Family meals', 'Under 30 min'],
      nutrition: { calories: 380, protein: 8, carbs: 68, fat: 7, fiber: 5, sodium: 430 },
      instructions: [
        { step: 1, instruction: 'Dice potatoes, onions, carrots, and tomatoes into bite-sized cubes.', timerMinutes: 4 },
        { step: 2, instruction: 'Heat oil, add cumin seeds, and sauté onions until golden.', timerMinutes: 3 },
        { step: 3, instruction: 'Add diced potatoes, carrots, and tomatoes with turmeric and salt; sauté for 3 minutes.', timerMinutes: 3 },
        { step: 4, instruction: 'Add washed rice and 2 cups of water. Cover and cook on medium flame for 12 minutes until water is absorbed.', timerMinutes: 12 }
      ],
      ingredients: [
        { name: 'Rice', quantity: 200, unit: 'g', category: 'Grains' },
        { name: 'Potato', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Carrot', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-020',
      name: 'Crispy Garlic Herb Potato Wedges',
      description: 'Crunchy golden roasted potato wedges tossed in crushed garlic, cooking oil, and herbs.',
      cuisine: 'Continental',
      meal_type: 'Snack',
      diet_type: 'Vegetarian',
      difficulty: 'Easy',
      preparation_time: 6,
      cooking_time: 18,
      total_time: 24,
      servings: 2,
      estimated_cost: 50,
      image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Vegan', 'Budget meals', 'Under 30 min'],
      nutrition: { calories: 250, protein: 5, carbs: 42, fat: 8, fiber: 5, sodium: 360 },
      instructions: [
        { step: 1, instruction: 'Slice 3 washed potatoes into long wedges.', timerMinutes: 3 },
        { step: 2, instruction: 'Toss wedges with crushed garlic, oil, and salt.', timerMinutes: 2 },
        { step: 3, instruction: 'Pan-roast in a heavy skillet or air fry on medium-high for 18 minutes until golden and crispy.', timerMinutes: 18 }
      ],
      ingredients: [
        { name: 'Potato', quantity: 3, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', category: 'Oils & Condiments' }
      ]
    },
    {
      id: 'rec-021',
      name: 'Garlic Butter Chicken & Peppers Skillet',
      description: 'Tender seasoned chicken breast strips pan-seared with bell peppers, onions, and aromatic garlic butter.',
      cuisine: 'Continental',
      meal_type: 'Dinner',
      diet_type: 'Non-Vegetarian',
      difficulty: 'Easy',
      preparation_time: 8,
      cooking_time: 14,
      total_time: 22,
      servings: 2,
      estimated_cost: 210,
      image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
      tags: ['Non-Vegetarian', 'High protein', 'Low-carb', 'Under 30 min'],
      nutrition: { calories: 380, protein: 35, carbs: 8, fat: 22, fiber: 2, sodium: 510 },
      instructions: [
        { step: 1, instruction: 'Cut chicken into strips and slice bell peppers and onions.', timerMinutes: 4 },
        { step: 2, instruction: 'Heat 1 tbsp butter and sear chicken for 6 minutes until cooked through. Set aside.', timerMinutes: 6 },
        { step: 3, instruction: 'Sauté minced garlic, onions, and bell peppers in remaining butter for 3 minutes.', timerMinutes: 3 },
        { step: 4, instruction: 'Toss chicken back in, season with pepper and salt, and serve hot.', timerMinutes: 2 }
      ],
      ingredients: [
        { name: 'Chicken', quantity: 300, unit: 'g', category: 'Proteins' },
        { name: 'Bell Pepper', quantity: 2, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Garlic', quantity: 4, unit: 'cloves', category: 'Vegetables' },
        { name: 'Butter', quantity: 2, unit: 'tbsp', category: 'Dairy' }
      ]
    },
    {
      id: 'rec-022',
      name: 'Vegetable & Egg Breakfast Frittata',
      description: 'Fluffy baked skillet omelette loaded with diced bell peppers, sweet onions, tomatoes, and herbs.',
      cuisine: 'Continental',
      meal_type: 'Breakfast',
      diet_type: 'Eggetarian',
      difficulty: 'Easy',
      preparation_time: 6,
      cooking_time: 12,
      total_time: 18,
      servings: 2,
      estimated_cost: 85,
      image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
      tags: ['High protein', 'Breakfast', 'Under 20 min'],
      nutrition: { calories: 280, protein: 18, carbs: 7, fat: 19, fiber: 2, sodium: 430 },
      instructions: [
        { step: 1, instruction: 'Whisk 3 eggs with 2 tbsp milk, salt, and pepper in a bowl.', timerMinutes: 2 },
        { step: 2, instruction: 'Sauté diced onions, bell peppers, and tomatoes in a skillet for 4 minutes.', timerMinutes: 4 },
        { step: 3, instruction: 'Pour the whisked egg mixture over the vegetables.', timerMinutes: 1 },
        { step: 4, instruction: 'Cover with a lid and cook on low heat for 7 minutes until firm and fluffy.', timerMinutes: 7 }
      ],
      ingredients: [
        { name: 'Egg', quantity: 3, unit: 'pcs', category: 'Proteins' },
        { name: 'Bell Pepper', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Onion', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Tomato', quantity: 1, unit: 'pcs', category: 'Vegetables' },
        { name: 'Milk', quantity: 30, unit: 'ml', category: 'Dairy' },
        { name: 'Butter', quantity: 1, unit: 'tbsp', category: 'Dairy' }
      ]
    }
  ];

  const insertRecipe = db.prepare(`
    INSERT OR REPLACE INTO recipes (
      id, name, description, cuisine, meal_type, diet_type, difficulty,
      preparation_time, cooking_time, total_time, servings, instructions,
      nutrition_data, estimated_cost, image_url, tags
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertRecipeIngredient = db.prepare(`
    INSERT INTO recipe_ingredients (id, recipe_id, ingredient_id, ingredient_name, quantity, unit, category, is_optional)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  // Clear existing recipe_ingredients to prevent duplicates during re-seed
  db.prepare('DELETE FROM recipe_ingredients').run();

  for (const r of recipesData) {
    insertRecipe.run(
      r.id,
      r.name,
      r.description,
      r.cuisine,
      r.meal_type,
      r.diet_type,
      r.difficulty,
      r.preparation_time,
      r.cooking_time,
      r.total_time,
      r.servings,
      JSON.stringify(r.instructions),
      JSON.stringify(r.nutrition),
      r.estimated_cost,
      r.image_url,
      JSON.stringify(r.tags)
    );

    for (const ing of r.ingredients) {
      insertRecipeIngredient.run(
        uuidv4(),
        r.id,
        null,
        ing.name,
        ing.quantity,
        ing.unit,
        ing.category,
        0
      );
    }
  }

  console.log(`✅ Successfully seeded ${recipesData.length} production recipes!`);
}

// Run if called directly
if (process.argv[1]?.endsWith('seed.ts') || process.argv[1]?.endsWith('seed.js')) {
  seedDatabase();
}
