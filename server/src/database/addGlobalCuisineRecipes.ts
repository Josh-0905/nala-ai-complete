import { v4 as uuidv4 } from 'uuid';
import { db } from './db.js';

export function insertGlobalCuisineRecipes() {
  const count = db.prepare("SELECT COUNT(*) as count FROM recipes WHERE id LIKE 'rec-global-%'").get() as { count: number };
  if (count.count >= 20) {
    console.log(`✓ Global cuisines catalog already loaded (${count.count} recipes).`);
    return;
  }

  console.log('🌏 Seeding diverse authentic Global Cuisines (Chinese, Thai, Japanese, Mexican, French, Italian, Middle Eastern, Korean, American)...');

  const insertRecipe = db.prepare(`
    INSERT OR REPLACE INTO recipes (
      id, name, description, cuisine, meal_type, diet_type,
      difficulty, preparation_time, cooking_time, total_time,
      servings, instructions, nutrition_data, estimated_cost,
      image_url, tags
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertIng = db.prepare(`
    INSERT INTO recipe_ingredients (
      id, recipe_id, ingredient_id, ingredient_name,
      quantity, unit, category, is_optional
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const globalRecipes = [
    // 🇨🇳 CHINESE
    {
      id: 'rec-global-chn-001',
      name: 'Wok-Tossed Cantonese Egg Fried Rice',
      description: 'Fragrant day-old rice wok-fried on high heat with fluffy scrambled eggs, spring onions, cooking oil, and savory soy sauce.',
      cuisine: 'Chinese',
      mealType: 'Dinner',
      dietType: 'Eggetarian',
      difficulty: 'Easy',
      prepTime: 5,
      cookTime: 8,
      servings: 2,
      cost: 90,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
      tags: ['Chinese', 'Wok', 'Quick 15m', 'High Protein'],
      nut: { calories: 380, protein: 12, carbs: 54, fat: 12, fiber: 2 },
      ings: ['Rice', 'Egg', 'Cooking Oil', 'Garlic', 'Green Chilli', 'Soy Sauce', 'Salt'],
      steps: [
        { step: 1, instruction: 'Heat 1 tbsp cooking oil in a hot wok. Pour whisked eggs and soft-scramble for 1 minute; set aside.', timerMinutes: 2 },
        { step: 2, instruction: 'Add another tbsp cooking oil, sauté minced garlic and chillies on high flame for 30 seconds.', timerMinutes: 1 },
        { step: 3, instruction: 'Toss in cooked rice, break clumps, and stir-fry vigorously for 3 minutes on high heat.', timerMinutes: 3 },
        { step: 4, instruction: 'Fold in scrambled eggs, soy sauce, and salt. Toss for 2 minutes until smoky and fragrant.', timerMinutes: 2 },
      ],
    },
    {
      id: 'rec-global-chn-002',
      name: 'Sizzling Garlic Chicken & Scallion Wok Toss',
      description: 'Tender chicken strips flash-seared in golden cooking oil with garlic, ginger, and cracked black pepper.',
      cuisine: 'Chinese',
      mealType: 'Dinner',
      dietType: 'Non-Vegetarian',
      difficulty: 'Medium',
      prepTime: 8,
      cookTime: 10,
      servings: 2,
      cost: 160,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85',
      tags: ['Chinese', 'Stir Fry', 'High Protein', 'Gluten-Free'],
      nut: { calories: 340, protein: 38, carbs: 6, fat: 18, fiber: 1.5 },
      ings: ['Chicken', 'Cooking Oil', 'Garlic', 'Ginger', 'Black Pepper', 'Salt', 'Soy Sauce'],
      steps: [
        { step: 1, instruction: 'Slice chicken breast into uniform thin strips. Season with salt and black pepper.', timerMinutes: 3 },
        { step: 2, instruction: 'Heat 2 tbsp cooking oil in a wok until shimmering hot. Flash-sear chicken for 5 minutes until golden.', timerMinutes: 5 },
        { step: 3, instruction: 'Toss in finely minced garlic and sliced ginger; stir-fry rapidly on high heat for 2 minutes.', timerMinutes: 2 },
        { step: 4, instruction: 'Drizzle with a dash of soy sauce, toss for 1 minute to glaze, and serve steaming hot.', timerMinutes: 1 },
      ],
    },
    {
      id: 'rec-global-chn-003',
      name: 'Street-Style Garlic Chilli Wok Noodles',
      description: 'Springy noodles wok-tossed in smoking cooking oil with garlic, crunchy bell peppers, and chili sauce.',
      cuisine: 'Chinese',
      mealType: 'Dinner',
      dietType: 'Vegetarian',
      difficulty: 'Easy',
      prepTime: 6,
      cookTime: 8,
      servings: 2,
      cost: 80,
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=85',
      tags: ['Chinese', 'Noodles', 'Street Style', 'Vegan'],
      nut: { calories: 360, protein: 9, carbs: 62, fat: 9, fiber: 4 },
      ings: ['Noodles', 'Cooking Oil', 'Garlic', 'Bell Pepper', 'Onion', 'Soy Sauce', 'Green Chilli'],
      steps: [
        { step: 1, instruction: 'Boil noodles until al dente; rinse with cold water and toss with 1 tsp cooking oil to prevent sticking.', timerMinutes: 5 },
        { step: 2, instruction: 'Heat 2 tbsp cooking oil in a wide wok. Sauté sliced garlic, onions, and bell peppers on high flame for 2 minutes.', timerMinutes: 2 },
        { step: 3, instruction: 'Add noodles, soy sauce, and chillies. Toss vigorously on high heat for 3 minutes until smoky.', timerMinutes: 3 },
      ],
    },

    // 🇹🇭 THAI
    {
      id: 'rec-global-tha-001',
      name: 'Authentic Thai Basil Chicken (Pad Krapow)',
      description: 'Minced chicken stir-fried on blazing heat with fragrant garlic, fresh chillies, cooking oil, and savory Thai seasonings.',
      cuisine: 'Thai',
      mealType: 'Dinner',
      dietType: 'Non-Vegetarian',
      difficulty: 'Easy',
      prepTime: 7,
      cookTime: 8,
      servings: 2,
      cost: 150,
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1000&q=85',
      tags: ['Thai', 'Spicy', 'High Protein', 'Authentic'],
      nut: { calories: 350, protein: 36, carbs: 8, fat: 19, fiber: 1.5 },
      ings: ['Chicken', 'Cooking Oil', 'Garlic', 'Green Chilli', 'Soy Sauce', 'Sugar'],
      steps: [
        { step: 1, instruction: 'Mince or finely dice chicken. Pound garlic and green chillies into a coarse paste.', timerMinutes: 3 },
        { step: 2, instruction: 'Heat 2 tbsp cooking oil in a skillet or wok over medium-high heat. Fry garlic-chilli paste for 1 minute until intensely aromatic.', timerMinutes: 1 },
        { step: 3, instruction: 'Add minced chicken, break apart with spatula, and stir-fry for 5 minutes until cooked through.', timerMinutes: 5 },
        { step: 4, instruction: 'Stir in soy sauce and a pinch of sugar; toss for 2 minutes and serve over steamed jasmine rice.', timerMinutes: 2 },
      ],
    },
    {
      id: 'rec-global-tha-002',
      name: 'Thai Style Coconut Vegetable Curry',
      description: 'Fresh vegetables gently simmered in creamy spiced coconut milk, garlic, ginger, and turmeric.',
      cuisine: 'Thai',
      mealType: 'Dinner',
      dietType: 'Vegetarian',
      difficulty: 'Easy',
      prepTime: 8,
      cookTime: 12,
      servings: 2,
      cost: 110,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
      tags: ['Thai', 'Curry', 'Coconut', 'Vegan'],
      nut: { calories: 290, protein: 7, carbs: 24, fat: 19, fiber: 6 },
      ings: ['Coconut', 'Cooking Oil', 'Garlic', 'Ginger', 'Bell Pepper', 'Carrot', 'Spinach', 'Green Chilli'],
      steps: [
        { step: 1, instruction: 'Heat 1 tbsp cooking oil in a pan; sauté minced garlic, ginger, and chillies for 2 minutes.', timerMinutes: 2 },
        { step: 2, instruction: 'Add sliced carrots and bell peppers; sauté for 3 minutes.', timerMinutes: 3 },
        { step: 3, instruction: 'Pour in 1 cup fresh coconut milk and 1/2 cup water; simmer on low heat for 6 minutes.', timerMinutes: 6 },
        { step: 4, instruction: 'Fold in spinach leaves, season with salt, and simmer 1 minute until wilted. Serve hot with rice.', timerMinutes: 1 },
      ],
    },

    // 🇯🇵 JAPANESE
    {
      id: 'rec-global-jpn-001',
      name: 'Glazed Chicken Teriyaki Skillet',
      description: 'Pan-seared chicken fillets glazed in a savory-sweet reduction of soy sauce, ginger, garlic, and golden cooking oil.',
      cuisine: 'Japanese',
      mealType: 'Dinner',
      dietType: 'Non-Vegetarian',
      difficulty: 'Easy',
      prepTime: 6,
      cookTime: 10,
      servings: 2,
      cost: 155,
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1000&q=85',
      tags: ['Japanese', 'Teriyaki', 'High Protein', 'Glazed'],
      nut: { calories: 370, protein: 39, carbs: 14, fat: 17, fiber: 1 },
      ings: ['Chicken', 'Cooking Oil', 'Soy Sauce', 'Honey', 'Garlic', 'Ginger'],
      steps: [
        { step: 1, instruction: 'Score chicken lightly; season with salt and minced ginger.', timerMinutes: 2 },
        { step: 2, instruction: 'Heat 1 tbsp cooking oil in a skillet over medium heat. Sear chicken skin-side down for 5 minutes until crispy and golden.', timerMinutes: 5 },
        { step: 3, instruction: 'Flip chicken and cook for 3 minutes. Pour in soy sauce, honey, and minced garlic.', timerMinutes: 3 },
        { step: 4, instruction: 'Simmer glaze for 2 minutes, basting chicken constantly until glossy and rich.', timerMinutes: 2 },
      ],
    },
    {
      id: 'rec-global-jpn-002',
      name: 'Tamagoyaki (Japanese Sweet Rolled Omelette)',
      description: 'Delicate, golden layered rolled egg omelette cooked in gentle cooking oil with a hint of honey and soy.',
      cuisine: 'Japanese',
      mealType: 'Breakfast',
      dietType: 'Eggetarian',
      difficulty: 'Medium',
      prepTime: 4,
      cookTime: 6,
      servings: 2,
      cost: 50,
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1000&q=85',
      tags: ['Japanese', 'Breakfast', 'Eggs', 'Quick 10m'],
      nut: { calories: 210, protein: 14, carbs: 4, fat: 15, fiber: 0 },
      ings: ['Egg', 'Cooking Oil', 'Soy Sauce', 'Honey', 'Salt'],
      steps: [
        { step: 1, instruction: 'Whisk 3 eggs with 1/2 tsp soy sauce, 1/2 tsp honey, and a pinch of salt until well combined.', timerMinutes: 2 },
        { step: 2, instruction: 'Lightly grease a non-stick skillet with cooking oil using a paper towel; heat on medium-low.', timerMinutes: 1 },
        { step: 3, instruction: 'Pour a thin layer of egg, let set partially, then gently roll to one side. Grease pan again and repeat in layers.', timerMinutes: 3 },
        { step: 4, instruction: 'Slice into thick diagonal rounds and serve warm.', timerMinutes: 1 },
      ],
    },

    // 🇲🇽 MEXICAN
    {
      id: 'rec-global-mex-001',
      name: 'Sizzling Skillet Chicken Fajitas',
      description: 'Juicy chicken strips, crisp bell peppers, and caramelized onions pan-seared in cooking oil with Mexican spices.',
      cuisine: 'Mexican',
      mealType: 'Dinner',
      dietType: 'Non-Vegetarian',
      difficulty: 'Easy',
      prepTime: 8,
      cookTime: 12,
      servings: 2,
      cost: 165,
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85',
      tags: ['Mexican', 'Fajitas', 'High Protein', 'One Pan'],
      nut: { calories: 380, protein: 37, carbs: 12, fat: 20, fiber: 3 },
      ings: ['Chicken', 'Cooking Oil', 'Bell Pepper', 'Onion', 'Garlic', 'Lemon', 'Black Pepper', 'Cumin'],
      steps: [
        { step: 1, instruction: 'Slice chicken, bell peppers, and onions into long uniform strips.', timerMinutes: 4 },
        { step: 2, instruction: 'Heat 2 tbsp cooking oil in a heavy cast-iron skillet on high flame until very hot.', timerMinutes: 2 },
        { step: 3, instruction: 'Add chicken and sear undisturbed for 4 minutes until browned; stir and cook 2 minutes more.', timerMinutes: 6 },
        { step: 4, instruction: 'Toss in onions, bell peppers, cumin, and garlic. Sauté on blazing heat for 3 minutes. Finish with fresh lemon juice.', timerMinutes: 3 },
      ],
    },
    {
      id: 'rec-global-mex-002',
      name: 'Fiesta Mexican Rice Skillet',
      description: 'Long grain rice toasted golden in cooking oil and simmered with onions, garlic, fresh tomatoes, and cumin.',
      cuisine: 'Mexican',
      mealType: 'Dinner',
      dietType: 'Vegetarian',
      difficulty: 'Easy',
      prepTime: 5,
      cookTime: 18,
      servings: 3,
      cost: 70,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
      tags: ['Mexican', 'Rice', 'Comfort', 'Vegan'],
      nut: { calories: 310, protein: 6, carbs: 55, fat: 8, fiber: 3 },
      ings: ['Rice', 'Cooking Oil', 'Tomato', 'Onion', 'Garlic', 'Cumin', 'Salt'],
      steps: [
        { step: 1, instruction: 'Heat 2 tbsp cooking oil in a skillet. Add dry rice and toast on medium flame for 4 minutes until golden-tan.', timerMinutes: 4 },
        { step: 2, instruction: 'Add diced onions and garlic; sauté for 2 minutes until translucent.', timerMinutes: 2 },
        { step: 3, instruction: 'Stir in pureed tomato, cumin, salt, and 2 cups of water. Bring to a boil.', timerMinutes: 2 },
        { step: 4, instruction: 'Cover tightly with lid, reduce heat to low, and simmer for 15 minutes undisturbed until fluffy.', timerMinutes: 15 },
      ],
    },

    // 🇮🇹 ITALIAN
    {
      id: 'rec-global-ita-001',
      name: 'Spaghetti Aglio, Olio e Peperoncino',
      description: 'Classic Italian masterpiece of al dente pasta tossed in warm extra virgin olive oil, sliced golden garlic, and chili flakes.',
      cuisine: 'Italian',
      mealType: 'Dinner',
      dietType: 'Vegetarian',
      difficulty: 'Easy',
      prepTime: 4,
      cookTime: 10,
      servings: 2,
      cost: 85,
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=1000&q=85',
      tags: ['Italian', 'Pasta', 'Classic', 'Quick 15m'],
      nut: { calories: 390, protein: 11, carbs: 64, fat: 11, fiber: 3 },
      ings: ['Pasta', 'Olive Oil', 'Garlic', 'Green Chilli', 'Black Pepper', 'Salt'],
      steps: [
        { step: 1, instruction: 'Boil pasta in generously salted water until al dente (about 8 minutes). Reserve 1/2 cup pasta cooking water.', timerMinutes: 8 },
        { step: 2, instruction: 'In a wide skillet, heat 3 tbsp olive oil on low heat. Add thinly sliced garlic and chillies; gently sizzle for 2 minutes until garlic is pale golden.', timerMinutes: 2 },
        { step: 3, instruction: 'Transfer pasta directly to the skillet with a splash of pasta water. Toss vigorously for 2 minutes to emulsify a glossy sauce.', timerMinutes: 2 },
        { step: 4, instruction: 'Season with cracked black pepper and serve immediately.', timerMinutes: 1 },
      ],
    },
    {
      id: 'rec-global-ita-002',
      name: 'Rustic Tuscan Tomato & Garlic Bruschetta',
      description: 'Artisanal crusty bread toasted golden in olive oil, rubbed with garlic, and topped with marinated sweet tomatoes.',
      cuisine: 'Italian',
      mealType: 'Snack',
      dietType: 'Vegetarian',
      difficulty: 'Easy',
      prepTime: 5,
      cookTime: 5,
      servings: 2,
      cost: 60,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85',
      tags: ['Italian', 'Appetizer', 'Vegan', 'Fresh'],
      nut: { calories: 230, protein: 6, carbs: 32, fat: 9, fiber: 2.5 },
      ings: ['Bread', 'Olive Oil', 'Tomato', 'Garlic', 'Salt', 'Black Pepper'],
      steps: [
        { step: 1, instruction: 'Dice tomatoes finely; toss in a bowl with 1 tbsp olive oil, salt, and pepper. Let rest 5 minutes.', timerMinutes: 5 },
        { step: 2, instruction: 'Brush bread slices with olive oil and toast on a hot griddle or skillet for 3 minutes until crisp and golden.', timerMinutes: 3 },
        { step: 3, instruction: 'Rub cut garlic clove gently over the warm toasted bread surfaces.', timerMinutes: 1 },
        { step: 4, instruction: 'Spoon the seasoned tomatoes over the bread and serve immediately.', timerMinutes: 1 },
      ],
    },

    // 🇫🇷 FRENCH
    {
      id: 'rec-global-fra-001',
      name: 'Classic French Rolled Herb Omelette au Beurre',
      description: 'A silky, creamy French rolled omelette cooked in foamy golden butter with fresh aromatics and delicate curds.',
      cuisine: 'French',
      mealType: 'Breakfast',
      dietType: 'Eggetarian',
      difficulty: 'Medium',
      prepTime: 3,
      cookTime: 4,
      servings: 1,
      cost: 45,
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1000&q=85',
      tags: ['French', 'Breakfast', 'Eggs', 'Chef Technique'],
      nut: { calories: 250, protein: 17, carbs: 2, fat: 20, fiber: 0 },
      ings: ['Egg', 'Butter', 'Cooking Oil', 'Salt', 'Black Pepper'],
      steps: [
        { step: 1, instruction: 'Whisk eggs thoroughly with salt and pepper until no whites remain visible.', timerMinutes: 2 },
        { step: 2, instruction: 'Melt butter with a drop of cooking oil in an 8-inch non-stick skillet over medium-low heat until gently foaming.', timerMinutes: 1 },
        { step: 3, instruction: 'Pour in eggs. Shake the pan rapidly with one hand while stirring in circles with a fork to form velvety small curds.', timerMinutes: 2 },
        { step: 4, instruction: 'When the egg is creamy on top and set on bottom, tilt the pan and roll the omelette onto a warm plate.', timerMinutes: 1 },
      ],
    },

    // 🇲🇪 MIDDLE EASTERN
    {
      id: 'rec-global-mde-001',
      name: 'Traditional Skillet Shakshuka with Poached Eggs',
      description: 'Gently poached fresh eggs nestled in a spiced, simmering skillet of tomatoes, bell peppers, garlic, and cumin in olive oil.',
      cuisine: 'Middle Eastern',
      mealType: 'Breakfast',
      dietType: 'Eggetarian',
      difficulty: 'Easy',
      prepTime: 6,
      cookTime: 12,
      servings: 2,
      cost: 80,
      image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1000&q=85',
      tags: ['Middle Eastern', 'Shakshuka', 'Eggs', 'One Pan'],
      nut: { calories: 280, protein: 16, carbs: 16, fat: 18, fiber: 4 },
      ings: ['Egg', 'Olive Oil', 'Tomato', 'Bell Pepper', 'Onion', 'Garlic', 'Cumin', 'Salt'],
      steps: [
        { step: 1, instruction: 'Heat 2 tbsp olive oil in a wide skillet. Sauté chopped onions, bell peppers, and garlic for 4 minutes until tender.', timerMinutes: 4 },
        { step: 2, instruction: 'Add diced tomatoes, cumin, and salt. Simmer over medium-low heat for 6 minutes until a rich, fragrant sauce forms.', timerMinutes: 6 },
        { step: 3, instruction: 'Make small wells in the tomato sauce using a spoon; gently crack an egg into each well.', timerMinutes: 2 },
        { step: 4, instruction: 'Cover with a lid and cook on low for 5 minutes until egg whites are set but yolks remain soft. Serve with warm bread.', timerMinutes: 5 },
      ],
    },

    // 🇺🇸 AMERICAN
    {
      id: 'rec-global-ame-001',
      name: 'Classic Diner-Style Scrambled Eggs & Artisanal Toast',
      description: 'Soft, buttery diner scrambled eggs served with golden pan-toasted artisanal bread slices.',
      cuisine: 'American',
      mealType: 'Breakfast',
      dietType: 'Eggetarian',
      difficulty: 'Easy',
      prepTime: 3,
      cookTime: 5,
      servings: 2,
      cost: 60,
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=85',
      tags: ['American', 'Breakfast', 'Diner', 'Quick 10m'],
      nut: { calories: 340, protein: 18, carbs: 26, fat: 18, fiber: 2 },
      ings: ['Egg', 'Bread', 'Butter', 'Cooking Oil', 'Milk', 'Salt', 'Black Pepper'],
      steps: [
        { step: 1, instruction: 'Whisk eggs with a splash of milk, pinch of salt, and cracked black pepper.', timerMinutes: 2 },
        { step: 2, instruction: 'Melt 1 tbsp butter and 1 tsp cooking oil in a skillet over medium-low heat.', timerMinutes: 1 },
        { step: 3, instruction: 'Pour eggs and gently push curds from edge to center with a silicone spatula for 3 minutes until soft and custardy.', timerMinutes: 3 },
        { step: 4, instruction: 'Toast bread to deep golden crunch; plate scrambled eggs alongside warm toast.', timerMinutes: 2 },
      ],
    },

    // 🇰🇷 KOREAN
    {
      id: 'rec-global-kor-001',
      name: 'Korean Sesame Garlic Egg Rice Skillet',
      description: 'Crispy bottom rice skillet topped with fried egg, toasted sesame oil, garlic, and fresh chillies.',
      cuisine: 'Korean',
      mealType: 'Dinner',
      dietType: 'Eggetarian',
      difficulty: 'Easy',
      prepTime: 4,
      cookTime: 8,
      servings: 1,
      cost: 65,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
      tags: ['Korean', 'Comfort Food', 'Sesame', 'Quick 15m'],
      nut: { calories: 360, protein: 13, carbs: 50, fat: 13, fiber: 2 },
      ings: ['Rice', 'Egg', 'Sesame Oil', 'Cooking Oil', 'Garlic', 'Soy Sauce', 'Green Chilli'],
      steps: [
        { step: 1, instruction: 'Heat 1 tbsp cooking oil in a skillet on medium-high heat. Fry egg until edges are delightfully lace-crisp and yolk is runny.', timerMinutes: 3 },
        { step: 2, instruction: 'Drizzle 1 tbsp sesame oil into the bottom of the pan, add cooked rice, and press down lightly to crisp the bottom for 3 minutes.', timerMinutes: 3 },
        { step: 3, instruction: 'Top crispy rice with fried egg, minced garlic, soy sauce, and sliced green chillies. Mix vigorously while hot!', timerMinutes: 2 },
      ],
    },
  ];

  for (const r of globalRecipes) {
    const totalTime = r.prepTime + r.cookTime;
    insertRecipe.run(
      r.id,
      r.name,
      r.description,
      r.cuisine,
      r.mealType,
      r.dietType,
      r.difficulty,
      r.prepTime,
      r.cookTime,
      totalTime,
      r.servings,
      JSON.stringify(r.steps),
      JSON.stringify(r.nut),
      r.cost,
      r.image,
      JSON.stringify(r.tags)
    );

    // Clean prior ingredients if any
    db.prepare('DELETE FROM recipe_ingredients WHERE recipe_id = ?').run(r.id);

    for (const ingName of r.ings) {
      insertIng.run(
        uuidv4(),
        r.id,
        null,
        ingName,
        1,
        'portion',
        ingName.toLowerCase().includes('oil') ? 'Oils & Fats' : 'Pantry',
        0
      );
    }
  }

  console.log(`✅ Successfully seeded ${globalRecipes.length} international multi-cuisine recipes!`);
}
