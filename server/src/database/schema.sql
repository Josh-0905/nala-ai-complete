-- NALA AI Database Schema (SQLite compatible)

CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    profile_image TEXT,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_preferences (
    id TEXT PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    diet_type TEXT DEFAULT 'Vegetarian', -- 'Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian'
    dietary_restrictions TEXT, -- JSON array of strings e.g. ["Gluten-free", "Nut-free"]
    cuisine_preferences TEXT, -- JSON array e.g. ["Indian", "Italian"]
    cooking_preferences TEXT, -- JSON array e.g. ["Quick meals", "High protein"]
    allergies TEXT, -- JSON array e.g. ["Peanuts", "Shellfish"]
    budget INTEGER DEFAULT 500, -- in INR: 100, 250, 500, 1000
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ingredients (
    id TEXT PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL, -- 'Vegetables', 'Fruits', 'Dairy', 'Spices', 'Grains', 'Proteins', 'Oils & Condiments'
    nutritional_data TEXT, -- JSON: { calories, protein, carbs, fat, fiber }
    default_unit TEXT DEFAULT 'g',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS recipes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    cuisine TEXT NOT NULL, -- 'Indian', 'South Indian', 'North Indian', 'Italian', 'Chinese', 'Mexican', 'Continental'
    meal_type TEXT NOT NULL, -- 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'
    diet_type TEXT NOT NULL, -- 'Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian'
    difficulty TEXT NOT NULL, -- 'Easy', 'Medium', 'Hard'
    preparation_time INTEGER NOT NULL, -- minutes
    cooking_time INTEGER NOT NULL, -- minutes
    total_time INTEGER NOT NULL, -- minutes
    servings INTEGER NOT NULL DEFAULT 2,
    instructions TEXT NOT NULL, -- JSON array of strings or step objects: [{ step: 1, instruction: "...", timerMinutes: 5 }]
    nutrition_data TEXT NOT NULL, -- JSON: { calories, protein, carbs, fat, fiber, sodium }
    estimated_cost INTEGER NOT NULL DEFAULT 150, -- in INR
    image_url TEXT NOT NULL,
    tags TEXT, -- JSON array of keywords: ["High protein", "Quick", "Budget"]
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
    id TEXT PRIMARY KEY,
    recipe_id TEXT NOT NULL,
    ingredient_id TEXT,
    ingredient_name TEXT NOT NULL,
    quantity REAL NOT NULL,
    unit TEXT NOT NULL,
    category TEXT DEFAULT 'Pantry',
    is_optional BOOLEAN DEFAULT 0,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS saved_recipes (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    recipe_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, recipe_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS recipe_history (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    recipe_id TEXT NOT NULL,
    cooked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    rating INTEGER DEFAULT 5,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS shopping_lists (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT DEFAULT 'My Shopping List',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS shopping_items (
    id TEXT PRIMARY KEY,
    shopping_list_id TEXT NOT NULL,
    ingredient_id TEXT,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'Other',
    quantity REAL DEFAULT 1,
    unit TEXT DEFAULT 'pcs',
    purchased BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (shopping_list_id) REFERENCES shopping_lists(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS scans (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    image_url TEXT,
    detected_ingredients TEXT NOT NULL, -- JSON array of { name, confidence, category }
    confirmed_ingredients TEXT, -- JSON array of strings
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pantry_items (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    ingredient_name TEXT NOT NULL,
    category TEXT DEFAULT 'Vegetables',
    days_until_expiry INTEGER DEFAULT 3,
    quantity REAL DEFAULT 1,
    unit TEXT DEFAULT 'pcs',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS recipe_reviews (
    id TEXT PRIMARY KEY,
    recipe_id TEXT NOT NULL,
    user_id TEXT,
    user_name TEXT NOT NULL,
    user_avatar TEXT,
    rating INTEGER NOT NULL DEFAULT 5,
    title TEXT,
    comment TEXT NOT NULL,
    tags TEXT, -- JSON array of strings e.g. ["Quick & Easy", "Family Favorite"]
    helpful_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

