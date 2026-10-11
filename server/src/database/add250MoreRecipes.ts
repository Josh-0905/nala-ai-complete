import { v4 as uuidv4 } from 'uuid';
import { db } from './db.js';
import { NewRecipeItem } from './add100Recipes.js';

export const expandedNewRecipes: NewRecipeItem[] = [
  {
    "id": "cat-001",
    "name": "French Butter Rolled Omelette",
    "description": "Classic Parisian soft and velvety folded omelette with fresh herbs, chives, and creamy butter.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Eggetarian",
    "difficulty": "Medium",
    "preparation_time": 5,
    "cooking_time": 5,
    "total_time": 10,
    "servings": 2,
    "estimated_cost": 80,
    "image_url": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Breakfast",
      "Eggs",
      "High Protein",
      "Quick 10m"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Crack 3 eggs into a bowl with a pinch of salt and black pepper; whisk vigorously until completely homogeneous.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Melt generous butter in an 8-inch non-stick skillet over medium-low heat until foaming.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Pour in eggs and shake pan while stirring rapidly in small circles with a spatula until soft curds form.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Tilt skillet, gently roll into an almond cylinder shape, and slide onto a warm plate with fresh chives.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 260,
      "protein": 18,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 3,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Black Pepper",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Coriander",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-002",
    "name": "Classic Soft Scrambled Eggs with Buttered Toast",
    "description": "Luxurious creamy scrambled eggs cooked slowly over gentle heat, served atop crisp golden toasted bread.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 7,
    "total_time": 12,
    "servings": 2,
    "estimated_cost": 90,
    "image_url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Breakfast",
      "Eggs",
      "Comfort Food",
      "10m Meal"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Whisk eggs with a splash of milk, salt, and freshly cracked black pepper.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Melt butter in a skillet over low heat and pour in egg mixture.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Gently sweep spatula across the pan creating soft, creamy folds. Remove just before set.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Toast bread slices until golden brown; butter generously and spoon hot scrambled eggs on top.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 20,
      "carbs": 26,
      "fat": 18,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 4,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Bread",
        "quantity": 2,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Milk",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-003",
    "name": "Street Style Mumbai Egg Bhurji",
    "description": "Fiery scrambled eggs tossed with finely chopped onions, juicy tomatoes, slit green chillies, and aromatic cumin.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 10,
    "total_time": 18,
    "servings": 2,
    "estimated_cost": 70,
    "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Street Food",
      "Quick",
      "Spicy",
      "Eggs"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil or butter in a pan; add cumin seeds and sauté chopped onions, ginger, and green chillies until translucent.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Add chopped tomatoes, turmeric, red chilli powder, and salt. Cook until tomatoes turn mushy.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Crack eggs directly into the masala or whisk beforehand. Scramble vigorously over medium-high heat until cooked.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Finish with chopped fresh coriander and squeeze fresh lemon juice. Serve hot with pav or roti.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 280,
      "protein": 19,
      "carbs": 9,
      "fat": 19,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 3,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-004",
    "name": "Cheesy Egg-in-a-Hole (Toad in the Hole)",
    "description": "Fun and crispy breakfast bread with a sunny egg cooked directly inside the center cutout, topped with melted cheese.",
    "cuisine": "American",
    "meal_type": "Breakfast",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 3,
    "cooking_time": 6,
    "total_time": 9,
    "servings": 1,
    "estimated_cost": 65,
    "image_url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Breakfast",
      "Kids Favorite",
      "Quick",
      "Cheese"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut a 2-inch circle from the center of bread slice using a biscuit cutter or glass rim.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Melt butter in a pan over medium heat; place bread slice and the cutout circle into the pan.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Crack egg directly into the center hole. Season with salt, pepper, and top with cheese.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Flip gently once the bottom is golden and egg white is partially set. Cook for 2 more minutes.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 16,
      "carbs": 22,
      "fat": 18,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 1,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Bread",
        "quantity": 1,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Cheese",
        "quantity": 30,
        "unit": "g",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-005",
    "name": "Classic Golden French Toast with Honey & Cinnamon",
    "description": "Thick slices of bread dipped in a rich spiced egg-milk batter and pan-fried golden brown with honey.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1484723091739-00821c432021?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Breakfast",
      "Sweet",
      "Brunch",
      "Comfort"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Whisk eggs, milk, cinnamon powder, and a teaspoon of honey or sugar in a wide shallow bowl.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Heat butter in a non-stick skillet over medium flame.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Dip bread slices in the egg mixture for 15 seconds per side until soaked but not soggy.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Cook slices in the pan for 3 minutes per side until golden brown and puffed. Drizzle honey and serve warm.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 360,
      "protein": 14,
      "carbs": 46,
      "fat": 14,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Bread",
        "quantity": 4,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Egg",
        "quantity": 2,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Milk",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "name": "Butter",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-006",
    "name": "Dhaba Style Egg Curry",
    "description": "Boiled eggs lightly fried with turmeric and simmered in a spiced onion, tomato, ginger-garlic gravy.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 20,
    "total_time": 30,
    "servings": 3,
    "estimated_cost": 110,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Curry",
      "Egg",
      "Dhaba Style",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil eggs for 10 minutes, peel, make shallow slits, and pan-fry in oil with a pinch of turmeric until golden.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "In same pan, sauté cumin seeds, chopped onions, and ginger-garlic paste until deeply browned.",
        "timerMinutes": 5
      },
      {
        "step": 3,
        "instruction": "Stir in tomato puree, red chilli powder, coriander powder, garam masala, and salt; cook until oil releases.",
        "timerMinutes": 5
      },
      {
        "step": 4,
        "instruction": "Pour 1 cup water, drop in fried eggs, simmer for 5 minutes, and garnish with fresh coriander.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 18,
      "carbs": 12,
      "fat": 19,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 4,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-007",
    "name": "Creamy Egg Salad Sandwich",
    "description": "Hard-boiled eggs diced and mixed with creamy mayo or hung curd, mustard, black pepper, and crisp celery on toast.",
    "cuisine": "American",
    "meal_type": "Lunch",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 5,
    "total_time": 15,
    "servings": 2,
    "estimated_cost": 95,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Sandwich",
      "Quick",
      "No Cook",
      "High Protein"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Roughly chop hard-boiled eggs into small uniform cubes.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "In a bowl, mix eggs with mayonnaise or yogurt, mustard, black pepper, and chopped onions.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Toast bread slices lightly until crisp.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Spread generous egg salad filling between bread slices, slice diagonally, and enjoy.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 21,
      "carbs": 28,
      "fat": 20,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 4,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Bread",
        "quantity": 4,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Black Pepper",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-008",
    "name": "Spicy Boiled Egg Pepper Fry",
    "description": "Hard boiled egg halves tossed on a tawa with caramelized onions, curry leaves, crushed garlic, and black pepper.",
    "cuisine": "South Indian",
    "meal_type": "Dinner",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 10,
    "total_time": 15,
    "servings": 2,
    "estimated_cost": 75,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "South Indian",
      "Quick",
      "High Protein",
      "Appetizer"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut hard boiled eggs lengthwise into halves.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Heat oil in a flat pan; splutter mustard seeds, curry leaves, and lots of sliced onions and garlic.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Add turmeric, red chilli powder, and lots of freshly crushed black pepper with salt.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Place egg halves face down, spoon the spicy onion-pepper masala on top, and roast for 4 minutes until crisp.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 230,
      "protein": 17,
      "carbs": 8,
      "fat": 15,
      "fiber": 1.8
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 4,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      },
      {
        "name": "Black Pepper",
        "quantity": 1.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-009",
    "name": "Fiery Egg Fried Rice",
    "description": "Cold cooked basmati rice wok-tossed with fluffy scrambled eggs, garlic, spring onions, and spicy soy seasoning.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Fried Rice",
      "Asian",
      "Quick 15m",
      "Eggs"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Beat 2 eggs with a pinch of salt. Scramble in a smoking hot wok with 1 tsp oil until just set; set aside.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Add remaining oil; stir-fry minced garlic, onions, and green chillies for 1 minute.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Add chilled cooked rice and toss vigorously on high heat for 2 minutes.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Fold in scrambled eggs, 1 tbsp soy sauce, and black pepper. Toss on blazing flame for 2 minutes and garnish with spring onions.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 390,
      "protein": 15,
      "carbs": 58,
      "fat": 11,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Egg",
        "quantity": 3,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-010",
    "name": "Mediterranean Shakshuka with Poached Eggs",
    "description": "Silky spiced stew of simmering tomatoes, sweet bell peppers, onions, and cumin with soft eggs poached right in the sauce.",
    "cuisine": "Mediterranean",
    "meal_type": "Breakfast",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 15,
    "total_time": 23,
    "servings": 2,
    "estimated_cost": 110,
    "image_url": "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Shakshuka",
      "Breakfast",
      "One Pan",
      "Healthy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat olive oil in a skillet; sauté chopped onions, minced garlic, and diced bell peppers for 5 minutes until soft.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Add chopped tomatoes, cumin, paprika, salt, and black pepper. Simmer for 8 minutes until a thick rich sauce forms.",
        "timerMinutes": 8
      },
      {
        "step": 3,
        "instruction": "Make 3 small wells in the sauce with a spoon; crack an egg directly into each well.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Cover skillet with a lid and cook on low heat for 5 minutes until egg whites are set but yolks remain runny. Garnish with coriander.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 17,
      "carbs": 16,
      "fat": 18,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 3,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Tomato",
        "quantity": 4,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Bell Pepper",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-011",
    "name": "Pan-Seared Garlic Lemon Butter Chicken",
    "description": "Succulent tender chicken breasts seared in a skillet with sizzling garlic, fresh lemon juice, butter, and cracked pepper.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 15,
    "total_time": 25,
    "servings": 2,
    "estimated_cost": 190,
    "image_url": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Chicken",
      "Keto",
      "High Protein",
      "20m Meal"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Pound chicken breasts to even thickness; season both sides with salt, black pepper, and garlic powder.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Heat 1 tbsp olive oil and 1 tbsp butter in a skillet over medium-high heat.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Sear chicken for 5-6 minutes per side until golden brown and cooked through (165°F internally).",
        "timerMinutes": 7
      },
      {
        "step": 4,
        "instruction": "Add minced garlic, remaining butter, and fresh lemon juice; baste chicken with the bubbling sauce for 2 minutes.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 42,
      "carbs": 3,
      "fat": 22,
      "fiber": 0.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 400,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-012",
    "name": "Crispy Garlic Chicken Stir-Fry with Bell Peppers",
    "description": "Juicy chicken cubes flash-fried in a hot wok with crunchy capsicum, sliced onions, and savory soy garlic sauce.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 12,
    "total_time": 22,
    "servings": 3,
    "estimated_cost": 210,
    "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Stir Fry",
      "Asian",
      "High Protein",
      "Quick"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut boneless chicken into bite-sized cubes. Toss with salt, pepper, and 1 tsp cornstarch or flour.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Heat oil in a wok until smoking hot. Sear chicken pieces for 5 minutes until golden; remove and set aside.",
        "timerMinutes": 5
      },
      {
        "step": 3,
        "instruction": "In the same wok, toss sliced bell peppers, onions, and minced garlic on high heat for 3 minutes until crisp-tender.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Return chicken to pan, add soy sauce or seasonings, toss vigorously for 1 minute, and garnish with spring onions.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 36,
      "carbs": 12,
      "fat": 16,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 400,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Bell Pepper",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-013",
    "name": "Classic Indian Chicken Curry",
    "description": "Homestyle aromatic chicken curry prepared with tender bone-in chicken simmered in a spiced onion tomato gravy.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 25,
    "total_time": 40,
    "servings": 4,
    "estimated_cost": 240,
    "image_url": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Curry",
      "Homestyle",
      "Chicken",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Marinate chicken pieces with turmeric, salt, and ginger-garlic paste for 15 minutes.",
        "timerMinutes": 15
      },
      {
        "step": 2,
        "instruction": "Heat oil in a heavy pot; sauté sliced onions with whole spices until deeply caramelized.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Add chopped tomatoes, red chilli powder, coriander powder, and cook until oil separates.",
        "timerMinutes": 5
      },
      {
        "step": 4,
        "instruction": "Add marinated chicken; sear on high flame for 5 minutes. Add 1 cup water, cover and simmer for 15 minutes until tender.",
        "timerMinutes": 15
      }
    ],
    "nutrition": {
      "calories": 420,
      "protein": 38,
      "carbs": 8,
      "fat": 26,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 600,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 8,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-014",
    "name": "Chicken Alfredo Penne Pasta",
    "description": "Al dente penne pasta and sliced seared chicken breast coated in a velvety garlic parmesan cream sauce.",
    "cuisine": "Italian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 10,
    "cooking_time": 18,
    "total_time": 28,
    "servings": 3,
    "estimated_cost": 260,
    "image_url": "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pasta",
      "Italian",
      "Comfort Food",
      "Creamy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil penne pasta in salted water for 10 minutes until al dente; drain and reserve half cup pasta water.",
        "timerMinutes": 10
      },
      {
        "step": 2,
        "instruction": "Season chicken breast with salt and pepper; sear in butter for 6 minutes per side until cooked, then slice into strips.",
        "timerMinutes": 8
      },
      {
        "step": 3,
        "instruction": "In same pan, sauté minced garlic in butter; pour in cream/milk and simmer gently until thickened.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Toss pasta and sliced chicken in the rich sauce with cheese and black pepper. Garnish with parsley.",
        "timerMinutes": 3
      }
    ],
    "nutrition": {
      "calories": 560,
      "protein": 38,
      "carbs": 54,
      "fat": 22,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 300,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Pasta",
        "quantity": 250,
        "unit": "g",
        "category": "Grains"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Cheese",
        "quantity": 50,
        "unit": "g",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-015",
    "name": "Quick Cheesy Chicken Quesadilla",
    "description": "Pan-crisped tortillas or flatbreads loaded with shredded seasoned chicken, onions, melted cheese, and green chillies.",
    "cuisine": "Mexican",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 10,
    "total_time": 18,
    "servings": 2,
    "estimated_cost": 160,
    "image_url": "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Mexican",
      "Quick",
      "Cheesy",
      "Snack"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Shred cooked chicken or pan-fry chicken strips with cumin, chilli powder, salt, and diced onions.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Heat a dry skillet over medium heat; place tortilla or flatbread and scatter shredded cheese on one half.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Top cheese with seasoned chicken, diced green chillies, fold the other half over, and press down.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Cook for 3 minutes per side until tortilla is golden-brown crisp and cheese is completely melted.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 480,
      "protein": 36,
      "carbs": 32,
      "fat": 24,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 250,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Cheese",
        "quantity": 100,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-016",
    "name": "Chicken Fried Rice (Takeout Style)",
    "description": "Fragrant jasmine or basmati rice stir-fried in a blazing hot wok with tender chicken, scrambled egg, and scallions.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 10,
    "total_time": 20,
    "servings": 3,
    "estimated_cost": 175,
    "image_url": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Fried Rice",
      "Asian",
      "One Pan",
      "Takeout"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat 1 tbsp oil in a wok on high flame. Cook diced chicken pieces for 4 minutes until golden; push to the side.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Crack egg directly into the wok and scramble softly.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Add chilled cooked rice, diced carrots, onions, and minced garlic.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Drizzle 2 tbsp soy sauce and pepper; toss on high flame for 3 minutes until aromatic and slightly smoky.",
        "timerMinutes": 3
      }
    ],
    "nutrition": {
      "calories": 490,
      "protein": 32,
      "carbs": 62,
      "fat": 12,
      "fiber": 2.8
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 250,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Egg",
        "quantity": 2,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Carrot",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-017",
    "name": "Honey Garlic Pan Chicken",
    "description": "Crispy pan-fried chicken bites coated in a sticky, sweet and savory honey garlic butter glaze.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 12,
    "total_time": 20,
    "servings": 2,
    "estimated_cost": 190,
    "image_url": "https://images.unsplash.com/photo-1527477321055-436158a2b00d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Honey Garlic",
      "Chicken",
      "Quick Dinner",
      "Sticky"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut boneless chicken into bite-sized nuggets; season with salt and pepper.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Sear chicken in 1 tbsp oil over medium-high heat for 6 minutes until cooked and browned.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Reduce flame; add 1 tbsp butter, 6 minced garlic cloves, 3 tbsp honey, and 1 tbsp soy sauce.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Simmer glaze rapidly for 2 minutes until bubbling and caramelized around the chicken. Sprinkle sesame seeds.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 370,
      "protein": 34,
      "carbs": 22,
      "fat": 16,
      "fiber": 0.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 350,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Honey",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-018",
    "name": "Classic Chicken Clear Soup",
    "description": "Nourishing comforting broth simmered with tender chicken, sliced carrots, crushed ginger, garlic, and cracked pepper.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 15,
    "total_time": 23,
    "servings": 3,
    "estimated_cost": 120,
    "image_url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Soup",
      "Comfort Food",
      "Healthy",
      "Chicken"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "In a soup pot, heat 1 tsp butter; add crushed ginger and garlic; sauté for 1 minute.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Add chicken pieces, sliced carrots, onions, and 4 cups water or broth.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Bring to boil; skim foam, then simmer on low heat for 12 minutes until chicken is tender.",
        "timerMinutes": 12
      },
      {
        "step": 4,
        "instruction": "Season with salt and lots of freshly crushed black pepper. Garnish with coriander and serve steaming hot.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 180,
      "protein": 26,
      "carbs": 6,
      "fat": 5,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 300,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Carrot",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-019",
    "name": "Restaurant Style Paneer Butter Masala",
    "description": "Soft paneer cubes simmered in a silky, rich, mildly sweet tomato-butter gravy scented with kasuri methi.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 20,
    "total_time": 35,
    "servings": 4,
    "estimated_cost": 180,
    "image_url": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Paneer",
      "Restaurant Style",
      "Rich",
      "Vegetarian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Puree boiled ripe tomatoes with ginger, garlic, and cashews into a smooth silky paste.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Heat butter and oil in a pan; add whole spices, turmeric, and Kashmiri red chilli powder for vibrant color.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Pour in tomato puree; cook on medium flame for 10 minutes until thickened and oil floats on top.",
        "timerMinutes": 10
      },
      {
        "step": 4,
        "instruction": "Add fresh paneer cubes, cream, salt, and crushed kasuri methi. Simmer gently for 4 minutes.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 430,
      "protein": 16,
      "carbs": 16,
      "fat": 34,
      "fiber": 3.5
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 300,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Tomato",
        "quantity": 4,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Milk",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-020",
    "name": "Homestyle Paneer Bhurji",
    "description": "Crumbled fresh paneer sautéed with caramelized onions, tangy tomatoes, green chillies, and fragrant spices.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 12,
    "total_time": 20,
    "servings": 2,
    "estimated_cost": 120,
    "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Paneer",
      "Quick 15m",
      "High Protein",
      "Vegetarian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil or butter in a pan. Splutter cumin seeds and sauté chopped onions and ginger-garlic until translucent.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Add chopped tomatoes, green chillies, turmeric, red chilli powder, and salt. Cook until mushy.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "Crumble fresh paneer with your fingers and fold into the spiced tomato-onion masala.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Cook for just 3 minutes so paneer stays soft and moist. Garnish with chopped coriander and serve with roti.",
        "timerMinutes": 3
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 20,
      "carbs": 10,
      "fat": 24,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 250,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-021",
    "name": "Classic Palak Paneer (Spinach Cottage Cheese)",
    "description": "Fresh vibrant spinach blanched and pureed into a velvety spiced garlic gravy with tender golden-seared paneer cubes.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 12,
    "cooking_time": 15,
    "total_time": 27,
    "servings": 3,
    "estimated_cost": 150,
    "image_url": "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Palak",
      "Paneer",
      "Iron Rich",
      "North Indian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Blanch fresh spinach in boiling water for 2 minutes; immediately plunge into ice-cold water and blend to a smooth puree.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Heat oil in a pan; fry paneer cubes lightly for 2 minutes until pale golden and set aside.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "In same pan, sauté cumin, lots of chopped garlic, onions, and green chillies until fragrant.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Add pureed spinach, salt, garam masala, and fried paneer cubes. Simmer for 4 minutes and finish with butter.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 320,
      "protein": 18,
      "carbs": 12,
      "fat": 22,
      "fiber": 5.5
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 250,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Spinach",
        "quantity": 300,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 8,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-022",
    "name": "Kadai Paneer with Bell Peppers & Onions",
    "description": "Paneer cubes and crunchy bell pepper petals tossed in a spicy, freshly pounded coriander-red chilli kadai masala.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 12,
    "cooking_time": 15,
    "total_time": 27,
    "servings": 3,
    "estimated_cost": 160,
    "image_url": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Kadai",
      "Paneer",
      "Spicy",
      "Restaurant Style"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Dry roast coriander seeds and dry red chillies; grind coarsely into kadai masala.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Heat oil in a kadai; toss cubed capsicum and onion petals on high heat for 3 minutes until crisp-tender; set aside.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "In same kadai, cook onion-tomato puree with ginger-garlic paste and kadai masala until fragrant.",
        "timerMinutes": 6
      },
      {
        "step": 4,
        "instruction": "Fold in paneer cubes and sautéed bell peppers. Simmer for 3 minutes and garnish with fresh ginger juliennes.",
        "timerMinutes": 3
      }
    ],
    "nutrition": {
      "calories": 360,
      "protein": 17,
      "carbs": 14,
      "fat": 26,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 300,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Bell Pepper",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-023",
    "name": "Crispy Chilli Paneer (Indo-Chinese Wok)",
    "description": "Golden batter-crisped paneer cubes tossed in a sizzling wok with dark soy, chilli sauce, diced bell peppers, and spring onions.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 12,
    "cooking_time": 12,
    "total_time": 24,
    "servings": 3,
    "estimated_cost": 170,
    "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Chilli Paneer",
      "Indo-Chinese",
      "Appetizer",
      "Spicy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut paneer into cubes; coat in a light dusting of flour, cornstarch, salt, and black pepper.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Shallow fry paneer in 2 tbsp oil on high flame until crisp and golden on all sides; remove.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "In same pan, flash-fry minced garlic, green chillies, onion cubes, and bell peppers on high heat for 2 minutes.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Add soy sauce, chilli sauce, vinegar, and 2 tbsp water. Toss fried paneer into the bubbling sauce for 1 minute.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 18,
      "carbs": 22,
      "fat": 26,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 250,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Bell Pepper",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-024",
    "name": "Garlic Butter Sautéed Mushrooms",
    "description": "Fresh sliced button mushrooms pan-roasted in foaming garlic herb butter until caramelized, juicy, and golden.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 95,
    "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Mushrooms",
      "Quick 10m",
      "Keto",
      "Side Dish"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Wipe mushrooms clean with a damp towel and cut into thick slices.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Melt generous butter with 1 tsp oil in a wide skillet over medium-high heat.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Add mushrooms in a single layer without crowding; cook undisturbed for 4 minutes until deeply browned.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Flip, add minced garlic, black pepper, and salt. Sauté for 2 minutes and finish with fresh coriander.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 160,
      "protein": 5,
      "carbs": 6,
      "fat": 14,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Mushroom",
        "quantity": 300,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Coriander",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-025",
    "name": "Cream of Mushroom Soup",
    "description": "Velvety comforting soup prepared with deeply browned mushrooms, sweet caramelized onions, garlic, and cream.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 15,
    "total_time": 25,
    "servings": 3,
    "estimated_cost": 110,
    "image_url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Soup",
      "Mushroom",
      "Creamy",
      "Comfort Food"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Slice mushrooms and dice onions and garlic.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Melt butter in a pot; sauté onions and garlic for 3 minutes, then add mushrooms and cook for 6 minutes until browned.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Pour in milk or water, black pepper, and salt. Simmer gently for 6 minutes.",
        "timerMinutes": 6
      },
      {
        "step": 4,
        "instruction": "Blend half of the soup for a thick creamy texture, return to pot, and serve hot with crusty bread.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 210,
      "protein": 6,
      "carbs": 14,
      "fat": 15,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Mushroom",
        "quantity": 300,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-026",
    "name": "Crispy Jeera Aloo (Cumin Spiced Potatoes)",
    "description": "Boiled potatoes cut into cubes and pan-roasted with abundant roasted cumin seeds, green chillies, and amchur.",
    "cuisine": "Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 10,
    "total_time": 18,
    "servings": 3,
    "estimated_cost": 45,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Quick 15m",
      "Vegan",
      "Potato",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil potatoes until just tender; peel and cut into 1-inch uniform cubes.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Heat oil or ghee in a pan. Add 2 tsp cumin seeds and let them sizzle until fragrant and deeply browned.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Add slit green chillies, turmeric, red chilli powder, salt, and the potato cubes.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Toss on medium-high heat for 6-8 minutes until potatoes develop a golden crispy exterior. Sprinkle fresh coriander.",
        "timerMinutes": 6
      }
    ],
    "nutrition": {
      "calories": 210,
      "protein": 4,
      "carbs": 36,
      "fat": 6,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Potato",
        "quantity": 4,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      },
      {
        "name": "Cumin Seeds",
        "quantity": 2,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-027",
    "name": "Homestyle Aloo Gobi Matar (Potato, Cauliflower & Peas)",
    "description": "Classic North Indian everyday dry curry cooked with tender florets of cauliflower, diced potatoes, and sweet green peas.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 12,
    "cooking_time": 18,
    "total_time": 30,
    "servings": 4,
    "estimated_cost": 80,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Vegan",
      "Everyday",
      "Curry",
      "Homestyle"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Chop cauliflower into small florets, peel and cube potatoes, and rinse green peas.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Heat oil in a kadai; splutter cumin seeds, sliced ginger, and green chillies.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Add potatoes and cauliflower; sauté on medium heat with turmeric and salt for 5 minutes.",
        "timerMinutes": 5
      },
      {
        "step": 4,
        "instruction": "Add green peas, chopped tomatoes, and garam masala. Cover and cook on low heat for 10 minutes until vegetables are tender.",
        "timerMinutes": 10
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 6,
      "carbs": 32,
      "fat": 5,
      "fiber": 6.5
    },
    "ingredients": [
      {
        "name": "Potato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Cauliflower",
        "quantity": 250,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Green Peas",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-028",
    "name": "Crispy Garlic Potato Wedges",
    "description": "Oven-baked or pan-crisped potato wedges tossed in olive oil, crushed garlic, rosemary, paprika, and sea salt.",
    "cuisine": "Continental",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 20,
    "total_time": 28,
    "servings": 3,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Snack",
      "Crispy",
      "Potato",
      "Appetizer"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Scrub potatoes clean, cut lengthwise into wedges, and parboil in salted water for 5 minutes; drain thoroughly.",
        "timerMinutes": 7
      },
      {
        "step": 2,
        "instruction": "Toss wedges in olive oil, minced garlic, paprika, black pepper, and salt until evenly coated.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Bake at 200°C (400°F) for 25 minutes or pan-fry in a shallow skillet on medium heat for 15 minutes, flipping once.",
        "timerMinutes": 18
      },
      {
        "step": 4,
        "instruction": "Serve steaming hot with ketchup, garlic mayo, or mint dip.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 230,
      "protein": 4,
      "carbs": 38,
      "fat": 8,
      "fiber": 4.5
    },
    "ingredients": [
      {
        "name": "Potato",
        "quantity": 4,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-029",
    "name": "Homestyle Bhindi Masala (Crispy Spiced Okra)",
    "description": "Tender fresh okra sliced and pan-fried until non-sticky, tossed with onions, mango powder (amchur), and dry spices.",
    "cuisine": "Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 15,
    "total_time": 25,
    "servings": 3,
    "estimated_cost": 60,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Bhindi",
      "Okra",
      "Vegan",
      "Dry Curry"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Wash bhindi and dry completely with a clean cloth before chopping into 1-inch pieces to prevent stickiness.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Heat oil in a wide pan; fry bhindi on medium flame for 8 minutes until crisp and no longer slimy; remove.",
        "timerMinutes": 8
      },
      {
        "step": 3,
        "instruction": "In same pan, sauté sliced onions and green chillies until golden brown.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Add turmeric, red chilli powder, coriander powder, salt, and the fried bhindi. Toss on medium heat for 4 minutes.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 16,
      "fat": 8,
      "fiber": 5
    },
    "ingredients": [
      {
        "name": "Okra",
        "quantity": 350,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-030",
    "name": "Warm Cinnamon Apple & Honey Oatmeal Bowl",
    "description": "Rolled oats simmered in creamy milk, topped with tender pan-cooked diced apples, cinnamon spice, and pure golden honey.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 70,
    "image_url": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Oats",
      "Breakfast",
      "Healthy",
      "Apple"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Dice fresh apple into bite-sized cubes.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "In a small pan, cook apple cubes with a dash of water, cinnamon, and 1 tsp honey for 3 minutes until tender.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "In another pot, bring oats and milk (or water) to a gentle simmer for 4 minutes until thick and creamy.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Pour warm oatmeal into a bowl, top with cinnamon-cooked apples, and drizzle generous raw honey.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 320,
      "protein": 11,
      "carbs": 58,
      "fat": 6,
      "fiber": 7
    },
    "ingredients": [
      {
        "name": "Oats",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "name": "Apple",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Milk",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-031",
    "name": "Baked Apple Cinnamon Oat Crisp",
    "description": "Sweet tender baked apples layered under a golden crispy crumble of rolled oats, honey, butter, and cinnamon.",
    "cuisine": "Continental",
    "meal_type": "Dessert",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 15,
    "total_time": 23,
    "servings": 2,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Apple",
      "Oats",
      "Baked",
      "Healthy Dessert"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Thinly slice apples and toss in a baking dish with 1 tbsp honey and cinnamon.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "In a bowl, mix rolled oats with softened butter and 1 tbsp honey into coarse crumbles.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Spread the oat crumble evenly over the apples.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Bake at 190°C (375°F) for 15 minutes or cook on stovetop in a covered buttered skillet until apples soften and crumble is golden.",
        "timerMinutes": 15
      }
    ],
    "nutrition": {
      "calories": 280,
      "protein": 6,
      "carbs": 52,
      "fat": 8,
      "fiber": 6
    },
    "ingredients": [
      {
        "name": "Apple",
        "quantity": 2,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Oats",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "name": "Honey",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "name": "Butter",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-032",
    "name": "Apple Honey Overnight Oats Smoothie",
    "description": "Velvety chilled smoothie made by blending soaked oats with crisp sweet apples, chilled milk, and honey.",
    "cuisine": "American",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 4,
    "cooking_time": 1,
    "total_time": 5,
    "servings": 2,
    "estimated_cost": 65,
    "image_url": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Smoothie",
      "Oats",
      "Apple",
      "No Cook"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Core and chop sweet apple into chunks.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Add rolled oats, apple chunks, chilled milk, and honey into a blender.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Blend on high speed for 90 seconds until completely silky and smooth.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Pour into glasses and sprinkle a pinch of ground cinnamon on top.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 9,
      "carbs": 54,
      "fat": 4.5,
      "fiber": 5
    },
    "ingredients": [
      {
        "name": "Apple",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Oats",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-033",
    "name": "Peanut Butter Banana Smoothie Bowl",
    "description": "Thick and creamy blend of ripe bananas, creamy peanut butter, milk, and honey, topped with fruit and nuts.",
    "cuisine": "American",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 2,
    "total_time": 7,
    "servings": 2,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Smoothie",
      "Banana",
      "High Protein",
      "Post Workout"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Peel ripe bananas and break into pieces into a high-speed blender.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Add creamy peanut butter, chilled milk, and 1 tbsp honey.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Blend on high speed for 60-90 seconds until completely thick, creamy, and velvety.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Pour into chilled glasses or a bowl; garnish with extra banana slices and a sprinkle of nuts.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 14,
      "carbs": 52,
      "fat": 15,
      "fiber": 6
    },
    "ingredients": [
      {
        "name": "Banana",
        "quantity": 2,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Peanuts",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Grains"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-034",
    "name": "Classic Golden Fluffy Pancakes",
    "description": "Melt-in-your-mouth fluffy homemade pancakes prepared with flour, milk, egg, butter, and served with honey or syrup.",
    "cuisine": "American",
    "meal_type": "Breakfast",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 7,
    "cooking_time": 10,
    "total_time": 17,
    "servings": 3,
    "estimated_cost": 80,
    "image_url": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pancakes",
      "Breakfast",
      "Weekend Brunch",
      "Kids Favorite"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Whisk flour, 1 tsp baking powder, a pinch of salt, and 1 tbsp sugar in a bowl.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "In separate bowl, whisk milk, egg, and melted butter. Fold into dry ingredients until just combined.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Heat a non-stick griddle over medium heat and lightly butter. Pour 1/4 cup batter for each pancake.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Cook until bubbles form on surface (about 2.5 minutes), flip, and cook 2 minutes more until golden. Serve with honey or butter.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 9,
      "carbs": 42,
      "fat": 10,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Flour",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Egg",
        "quantity": 1,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-035",
    "name": "Spaghetti Aglio e Olio with Garlic & Chilli",
    "description": "Classic traditional Roman pasta tossed in extra virgin olive oil, sizzling golden garlic slivers, and fiery red chilli flakes.",
    "cuisine": "Italian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 12,
    "total_time": 17,
    "servings": 2,
    "estimated_cost": 110,
    "image_url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pasta",
      "Classic Italian",
      "Quick 15m",
      "Vegan Option"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil spaghetti in generously salted water until al dente (about 9-10 minutes); reserve 1/2 cup pasta cooking water.",
        "timerMinutes": 10
      },
      {
        "step": 2,
        "instruction": "In a wide skillet, heat 3 tbsp olive oil over low-medium heat. Add thinly sliced garlic and sauté gently until pale golden.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Add red chilli flakes or sliced green chillies and cook for 30 seconds.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Transfer drained spaghetti to the skillet with a splash of reserved pasta water. Toss vigorously for 2 minutes until glossy; top with parsley.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 410,
      "protein": 12,
      "carbs": 64,
      "fat": 14,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Pasta",
        "quantity": 250,
        "unit": "g",
        "category": "Grains"
      },
      {
        "name": "Garlic",
        "quantity": 8,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      },
      {
        "name": "Red Chilli Powder",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-036",
    "name": "Penne all'Arrabbiata (Spicy Tomato Garlic Pasta)",
    "description": "Tube penne pasta coated in a fiery, rich Italian sauce made from ripe tomatoes, crushed garlic, and red chillies.",
    "cuisine": "Italian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 15,
    "total_time": 23,
    "servings": 3,
    "estimated_cost": 120,
    "image_url": "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pasta",
      "Spicy",
      "Italian",
      "Vegetarian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil penne pasta in rolling salted water for 10 minutes until al dente; drain and save 1/2 cup pasta water.",
        "timerMinutes": 10
      },
      {
        "step": 2,
        "instruction": "Heat olive oil in a skillet; sauté lots of minced garlic and red chillies on medium flame until fragrant.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Add crushed ripe tomatoes or puree, salt, and black pepper. Simmer on low heat for 10 minutes until thick and rich.",
        "timerMinutes": 10
      },
      {
        "step": 4,
        "instruction": "Fold in boiled penne with a splash of pasta water. Toss vigorously for 2 minutes to emulsify sauce. Top with cheese.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 370,
      "protein": 13,
      "carbs": 66,
      "fat": 8,
      "fiber": 4.5
    },
    "ingredients": [
      {
        "name": "Pasta",
        "quantity": 250,
        "unit": "g",
        "category": "Grains"
      },
      {
        "name": "Tomato",
        "quantity": 4,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      },
      {
        "name": "Cheese",
        "quantity": 30,
        "unit": "g",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-037",
    "name": "Street Style Vegetable Hakka Noodles",
    "description": "Springy noodles flash-fried in a fiery wok with shredded cabbage, carrots, bell peppers, soy sauce, and chilli garlic.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 10,
    "total_time": 20,
    "servings": 3,
    "estimated_cost": 90,
    "image_url": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Noodles",
      "Indo-Chinese",
      "Quick",
      "Street Food"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil noodles until 90% cooked (about 4 minutes); rinse under cold water, toss with 1 tsp oil to prevent sticking.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Heat oil in a large wok over highest heat until smoking.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Toss in sliced onions, minced garlic, carrots, and bell peppers. Stir fry continuously for 2.5 minutes so veggies stay crunchy.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Add boiled noodles, 2 tbsp soy sauce, vinegar or lemon, salt, and black pepper. Toss vigorously on high flame for 2 minutes.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 360,
      "protein": 9,
      "carbs": 64,
      "fat": 9,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Noodles",
        "quantity": 200,
        "unit": "g",
        "category": "Grains"
      },
      {
        "name": "Carrot",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Bell Pepper",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-038",
    "name": "Creamy Stovetop Macaroni and Cheese",
    "description": "Elbow macaroni enveloped in a luscious, velvety cheddar cheese sauce made from butter, milk, and melted cheese.",
    "cuisine": "American",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 12,
    "total_time": 17,
    "servings": 2,
    "estimated_cost": 110,
    "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Mac & Cheese",
      "Comfort Food",
      "Kids Favorite",
      "Quick"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil macaroni in salted water for 8 minutes until tender; drain.",
        "timerMinutes": 8
      },
      {
        "step": 2,
        "instruction": "Melt 2 tbsp butter in a saucepan over medium heat; whisk in 1 tbsp flour or pour milk directly.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Simmer milk until hot; remove from flame and stir in abundant grated cheese until completely smooth and melted.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Fold warm macaroni into the cheese sauce; season with black pepper and salt to taste. Serve bubbling warm.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 460,
      "protein": 18,
      "carbs": 54,
      "fat": 20,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Pasta",
        "quantity": 200,
        "unit": "g",
        "category": "Grains"
      },
      {
        "name": "Cheese",
        "quantity": 120,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Black Pepper",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-039",
    "name": "Garlic Butter Cheese Toast",
    "description": "Crisp bakery-style golden toast spread with rich garlic-herb butter and blankets of bubbling broiled cheese.",
    "cuisine": "Continental",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 6,
    "total_time": 11,
    "servings": 2,
    "estimated_cost": 70,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Cheese Toast",
      "Garlic Bread",
      "Quick 10m",
      "Snack"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Mix softened butter with minced garlic, black pepper, and chopped coriander or parsley.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Generously spread garlic butter on one side of bread slices.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Top with grated cheese and chilli flakes or chopped green chillies.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Toast in a covered pan over low heat for 5 minutes until bottom is crispy and cheese is completely melted.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 11,
      "carbs": 24,
      "fat": 19,
      "fiber": 1.2
    },
    "ingredients": [
      {
        "name": "Bread",
        "quantity": 4,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Cheese",
        "quantity": 80,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-040",
    "name": "Mumbai Vegetable Grilled Sandwich",
    "description": "Triple decker street sandwich layered with sliced boiled potatoes, onions, tomatoes, cucumbers, and spicy green chutney.",
    "cuisine": "Indian",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 8,
    "total_time": 18,
    "servings": 2,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Street Food",
      "Sandwich",
      "Vegetarian",
      "Mumbai"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Thinly slice boiled potatoes, ripe tomatoes, onions, and cucumber.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Butter bread slices generously and spread spicy green coriander chutney.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Layer vegetables neatly, sprinkle chaat masala and salt; cap with another slice and press together.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Grill or toast on tawa with butter until crispy golden brown on both sides. Slice into 4 squares.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 7,
      "carbs": 54,
      "fat": 11,
      "fiber": 5.5
    },
    "ingredients": [
      {
        "name": "Bread",
        "quantity": 4,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Potato",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-041",
    "name": "Restaurant Style Dal Tadka",
    "description": "Yellow lentils cooked till creamy, tempered with a sizzling aromatic tadka of ghee, cumin seeds, garlic, and red chillies.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 18,
    "total_time": 26,
    "servings": 3,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Dal",
      "High Protein",
      "Comfort Food",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cook toor dal or yellow lentils with turmeric, chopped tomato, and water in a pressure cooker for 3 whistles.",
        "timerMinutes": 10
      },
      {
        "step": 2,
        "instruction": "Mash the cooked dal lightly with a whisk; add salt and simmer for 3 minutes.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Heat 2 tbsp ghee or butter in a small tadka pan. Add cumin seeds, lots of sliced garlic, dry red chillies, and curry leaves.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Pour the sizzling golden garlic tadka directly over the bubbling dal. Cover immediately to lock in the aroma!",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 210,
      "protein": 12,
      "carbs": 28,
      "fat": 6,
      "fiber": 6
    },
    "ingredients": [
      {
        "name": "Toor Dal",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "name": "Tomato",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 7,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      },
      {
        "name": "Cumin Seeds",
        "quantity": 1.5,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-042",
    "name": "Punjabi Chana Masala (Spiced Chickpea Curry)",
    "description": "Tender white chickpeas simmered in a robust, tangy, and deeply spiced onion-tomato-garlic gravy.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 20,
    "total_time": 35,
    "servings": 4,
    "estimated_cost": 90,
    "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Chana Masala",
      "Chickpeas",
      "Vegan",
      "High Protein"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil soaked chickpeas until tender, or rinse canned chickpeas.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Heat oil in a pot; sauté finely chopped onions until deep reddish-brown.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Add ginger-garlic paste, tomato puree, turmeric, red chilli powder, coriander powder, and garam masala. Cook till oil releases.",
        "timerMinutes": 5
      },
      {
        "step": 4,
        "instruction": "Add cooked chickpeas with 1 cup cooking water. Mash a spoonful of chickpeas to thicken gravy; simmer for 10 minutes.",
        "timerMinutes": 10
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 14,
      "carbs": 42,
      "fat": 8,
      "fiber": 9
    },
    "ingredients": [
      {
        "name": "Chickpeas",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-043",
    "name": "Tomato Rasam (Spicy Tangy South Indian Soup)",
    "description": "Soothing, aromatic South Indian herbal broth made with juicy tomatoes, tamarind, black pepper, cumin, and garlic.",
    "cuisine": "South Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 12,
    "total_time": 17,
    "servings": 4,
    "estimated_cost": 35,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Rasam",
      "South Indian",
      "Digestive",
      "Immunity"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Crush garlic, black pepper, and cumin seeds coarsely in a mortar and pestle.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "In a pot, boil chopped tomatoes with tamarind water, turmeric, and salt for 6 minutes until soft.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Add the crushed pepper-garlic spice mixture and 1.5 cups water; bring to a single gentle frothy boil.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Temper with mustard seeds and curry leaves in 1 tsp ghee; garnish with fresh coriander.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 75,
      "protein": 2,
      "carbs": 12,
      "fat": 2.5,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Tomato",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Tamarind",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Cumin Seeds",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-044",
    "name": "Pan-Seared Lemon Garlic Butter Fish Fillet",
    "description": "Tender flaky white fish fillets seared with a golden crust in sizzling garlic herb butter and fresh lemon juice.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 10,
    "total_time": 18,
    "servings": 2,
    "estimated_cost": 220,
    "image_url": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Fish",
      "Keto",
      "Quick Dinner",
      "Healthy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Pat fish fillets dry with paper towels; season both sides with salt, black pepper, and paprika.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Heat 1 tbsp oil and 1 tbsp butter in a non-stick skillet over medium-high heat until sizzling.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Sear fillets for 3-4 minutes on first side without moving until golden crust forms; gently flip.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Add minced garlic, remaining butter, and lemon juice; spoon bubbling garlic butter over fish for 2 minutes until cooked.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 34,
      "carbs": 2,
      "fat": 16,
      "fiber": 0.2
    },
    "ingredients": [
      {
        "name": "Fish",
        "quantity": 400,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-045",
    "name": "Crispy Masala Tawa Fish Fry",
    "description": "Fish fillets marinated in a spicy paste of Kashmiri red chilli, ginger-garlic, turmeric, and lemon, pan-fried to crisp perfection.",
    "cuisine": "South Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 15,
    "cooking_time": 10,
    "total_time": 25,
    "servings": 3,
    "estimated_cost": 240,
    "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Fish Fry",
      "South Indian",
      "Crispy",
      "Spicy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Make a thick marinade paste using red chilli powder, turmeric, ginger-garlic paste, lemon juice, and salt.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Coat fish fillets thoroughly on both sides with the marinade; rest for 15 minutes.",
        "timerMinutes": 15
      },
      {
        "step": 3,
        "instruction": "Heat 3 tbsp oil in a wide tawa or skillet on medium flame.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Shallow fry fish for 4-5 minutes per side until deeply crisp and cooked through. Serve hot with onion rings.",
        "timerMinutes": 8
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 32,
      "carbs": 5,
      "fat": 18,
      "fiber": 1
    },
    "ingredients": [
      {
        "name": "Fish",
        "quantity": 450,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-046",
    "name": "Roasted Fresh Tomato Basil Soup",
    "description": "Rich comforting soup made with roasted ripe tomatoes, caramelized onions, garlic, and fresh basil, blended velvety smooth.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 20,
    "total_time": 30,
    "servings": 3,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Soup",
      "Tomato Soup",
      "Healthy",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut tomatoes and onions in half. Place on baking sheet with garlic cloves, toss with olive oil, salt, and pepper.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Roast at 200°C for 20 minutes until blistered and caramelized (or roast directly in a heavy soup pot).",
        "timerMinutes": 15
      },
      {
        "step": 3,
        "instruction": "Transfer roasted vegetables to a blender, add fresh basil/coriander and 1 cup warm water or milk; blend until velvety.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Pour into bowls, swirl with butter or cream, and serve warm with grilled cheese or toast.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 140,
      "protein": 3,
      "carbs": 18,
      "fat": 6,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Tomato",
        "quantity": 6,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Coriander",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-047",
    "name": "Fresh Cucumber, Tomato & Onion Salad",
    "description": "Crisp refreshing everyday salad with sliced cucumbers, juicy tomatoes, sweet onions, lemon juice, and black pepper.",
    "cuisine": "Mediterranean",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 0,
    "total_time": 8,
    "servings": 3,
    "estimated_cost": 40,
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Salad",
      "Raw Food",
      "Low Calorie",
      "No Cook"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Peel and slice cucumbers into thin rounds.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Chop ripe tomatoes and onions into bite-sized wedges.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Combine vegetables in a salad bowl with fresh coriander leaves.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Dress with fresh lemon juice, black pepper, and a pinch of salt just before serving.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 65,
      "protein": 2,
      "carbs": 13,
      "fat": 0.5,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Cucumber",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-048",
    "name": "Hyderabadi Chicken Dum Biryani",
    "description": "Layered basmati rice and marinated chicken cooked on dum with fried onions, saffron, mint, and whole spices.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 20,
    "cooking_time": 35,
    "total_time": 55,
    "servings": 4,
    "estimated_cost": 280,
    "image_url": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Biryani",
      "Chicken",
      "Hyderabadi",
      "Royal"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Marinate chicken with yogurt/lemon, ginger-garlic paste, red chilli, and garam masala for 20 mins.",
        "timerMinutes": 20
      },
      {
        "step": 2,
        "instruction": "Parboil basmati rice until 70% cooked with whole spices and salt.",
        "timerMinutes": 8
      },
      {
        "step": 3,
        "instruction": "Layer marinated chicken at bottom of pot, top with parboiled rice, fried onions, and coriander.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Seal pot with lid and cook on dum on low flame for 25 minutes.",
        "timerMinutes": 25
      }
    ],
    "nutrition": {
      "calories": 540,
      "protein": 36,
      "carbs": 64,
      "fat": 16,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 500,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Onion",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-049",
    "name": "Egg Dum Biryani",
    "description": "Fragrant spiced basmati rice layered with golden-fried whole boiled eggs, caramelized onions, and fresh herbs.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Eggetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 25,
    "total_time": 40,
    "servings": 3,
    "estimated_cost": 140,
    "image_url": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Biryani",
      "Eggs",
      "One Pot",
      "Classic"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil eggs, peel, slit and shallow fry with turmeric and red chilli powder until golden crust forms.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Prepare spiced onion-tomato biryani gravy with ginger, garlic, and whole spices.",
        "timerMinutes": 8
      },
      {
        "step": 3,
        "instruction": "Parboil basmati rice until 70% done; drain.",
        "timerMinutes": 7
      },
      {
        "step": 4,
        "instruction": "Layer rice and fried eggs with masala, cover tightly, and steam on low heat for 12 minutes.",
        "timerMinutes": 12
      }
    ],
    "nutrition": {
      "calories": 430,
      "protein": 18,
      "carbs": 58,
      "fat": 14,
      "fiber": 2.8
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 4,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-050",
    "name": "Aromatic Vegetable Pulao",
    "description": "Fluffy basmati rice gently cooked with sweet green peas, diced carrots, potatoes, and whole aromatic spices.",
    "cuisine": "Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 15,
    "total_time": 25,
    "servings": 3,
    "estimated_cost": 80,
    "image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pulao",
      "Vegetarian",
      "Quick",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Rinse basmati rice and soak in water for 15 minutes.",
        "timerMinutes": 15
      },
      {
        "step": 2,
        "instruction": "Heat oil or butter in a pot; crackle cumin seeds, bay leaf, cloves, and sliced onions.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Add diced potatoes, carrots, green peas, and ginger-garlic paste; sauté for 3 minutes.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Add drained rice, 2 cups water, and salt. Bring to a boil, cover, and simmer for 12 minutes until fluffy.",
        "timerMinutes": 12
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 6,
      "carbs": 54,
      "fat": 5.5,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Potato",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Carrot",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Cumin Seeds",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-051",
    "name": "South Indian Tangy Lemon Rice (Chitranna)",
    "description": "Golden turmeric-infused cooked rice tempered with crunchy peanuts, mustard seeds, curry leaves, and fresh tart lemon.",
    "cuisine": "South Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Lemon Rice",
      "South Indian",
      "Quick 10m",
      "Vegan"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Spread cooled cooked rice on a wide plate.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Heat oil in a pan; splutter mustard seeds, peanuts, green chillies, curry leaves, and turmeric.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Turn off heat and stir in fresh lemon juice and salt.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Pour the hot seasoning over the rice and gently fold until evenly yellow and aromatic.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 7,
      "carbs": 48,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Lemon",
        "quantity": 2,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Peanuts",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Grains"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-052",
    "name": "Spicy South Indian Tomato Rice (Thakkali Sadam)",
    "description": "Aromatic cooked rice tossed in a rich, tangy spiced onion-tomato masala with curry leaves and mustard seeds.",
    "cuisine": "South Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 12,
    "total_time": 20,
    "servings": 2,
    "estimated_cost": 55,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Tomato Rice",
      "South Indian",
      "Comfort Food",
      "Vegan"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil in a pan; crackle mustard seeds, cumin, curry leaves, and sliced onions.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Add chopped juicy tomatoes, turmeric, red chilli powder, and salt. Cook until tomatoes become mushy and oil separates.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Add cooked rice to the pan and gently mix until well incorporated with the tomato masala.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Garnish with fresh coriander leaves and serve warm with papad or raita.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 295,
      "protein": 5.5,
      "carbs": 52,
      "fat": 7,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Tomato",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-053",
    "name": "Soothing South Indian Curd Rice (Thayir Sadam)",
    "description": "Cooling creamy yogurt rice tempered with mustard seeds, green chillies, curry leaves, and ginger.",
    "cuisine": "South Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 5,
    "total_time": 10,
    "servings": 2,
    "estimated_cost": 45,
    "image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Curd Rice",
      "Probiotic",
      "Cooling",
      "Quick"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Mash warm cooked rice slightly with a fork.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Mix in yogurt/curd, milk, and salt until smooth and creamy.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Heat 1 tsp oil; temper mustard seeds, finely chopped ginger, green chillies, and curry leaves.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Pour the tempering over curd rice and mix gently. Serve chilled or room temperature.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 260,
      "protein": 8,
      "carbs": 44,
      "fat": 5,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Milk",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "name": "Green Chilli",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 0.5,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-054",
    "name": "Jeera Rice (Fragrant Cumin Basmati)",
    "description": "Long-grain basmati rice scented with whole cumin seeds, butter or ghee, and fresh green coriander.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 12,
    "total_time": 17,
    "servings": 3,
    "estimated_cost": 40,
    "image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Rice",
      "Indian",
      "Quick 15m",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat butter or oil in a pot; add 2 tsp cumin seeds and let them sizzle until deeply aromatic.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Add soaked basmati rice and gently toast for 1 minute in the spiced butter.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Add water and salt; bring to a boil, cover tightly, and simmer on low for 10 minutes.",
        "timerMinutes": 10
      },
      {
        "step": 4,
        "instruction": "Fluff with a fork and garnish with chopped fresh coriander.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 240,
      "protein": 4.5,
      "carbs": 46,
      "fat": 4,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Cumin Seeds",
        "quantity": 2,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Butter",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-055",
    "name": "Garlic Butter Herb Rice",
    "description": "Fluffy fragrant rice tossed with sizzling golden garlic slivers, butter, and freshly cracked black pepper.",
    "cuisine": "Continental",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Garlic Rice",
      "Quick",
      "Comfort Food",
      "Side Dish"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Melt generous butter in a pan over medium heat.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Add minced garlic and sauté until fragrant and lightly golden.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Add cooked rice, salt, and freshly ground black pepper.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Toss on medium-high heat for 3 minutes until rice is glossy and infused with garlic butter.",
        "timerMinutes": 3
      }
    ],
    "nutrition": {
      "calories": 270,
      "protein": 4.5,
      "carbs": 45,
      "fat": 8,
      "fiber": 1.2
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Black Pepper",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-056",
    "name": "Kanda Poha (Savory Flaked Rice with Onions & Peanuts)",
    "description": "Light and fluffy flattened rice tossed with caramelized onions, crunchy peanuts, mustard seeds, turmeric, and lemon.",
    "cuisine": "Indian",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 45,
    "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Poha",
      "Breakfast",
      "Quick 15m",
      "Vegan"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Rinse poha in a colander until soft; drain completely and toss with a pinch of turmeric and salt.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Heat oil in a pan; fry peanuts until crunchy, then add mustard seeds, curry leaves, and green chillies.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Add finely chopped onions and sauté until translucent.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Fold in softened poha, cover and steam on low for 2 minutes. Squeeze fresh lemon juice on top.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 260,
      "protein": 6,
      "carbs": 46,
      "fat": 6,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Peanuts",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Grains"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      }
    ]
  },
  {
    "id": "cat-057",
    "name": "High-Protein Besan Chilla (Savory Gram Flour Crepe)",
    "description": "Crispy savory golden pancakes made from spiced gram flour batter loaded with finely chopped onions, chillies, and herbs.",
    "cuisine": "Indian",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 40,
    "image_url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Chilla",
      "High Protein",
      "Vegan",
      "Gluten-Free"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Whisk gram flour (besan) with water to form a smooth pourable batter.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Add chopped onions, green chillies, coriander, turmeric, and salt.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Pour ladleful of batter onto a hot greased tawa and spread in concentric circles.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Drizzle a few drops of oil, cook for 2 minutes per side until golden and crisp.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 210,
      "protein": 11,
      "carbs": 28,
      "fat": 5,
      "fiber": 5.5
    },
    "ingredients": [
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-058",
    "name": "Healthy Savory Oats Veggie Chilla",
    "description": "Nutritious fiber-packed savory crepes made from blended oats batter, finely chopped veggies, and cumin.",
    "cuisine": "Indian",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 8,
    "total_time": 13,
    "servings": 2,
    "estimated_cost": 45,
    "image_url": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Oats",
      "Weight Loss",
      "Healthy",
      "Chilla"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Grind oats into a coarse flour. Mix with water, salt, and cumin into a smooth batter.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Stir in finely chopped onions, tomatoes, and green chillies.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Spread batter on a hot non-stick pan into a thin disc.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Cook with minimal oil for 2-3 minutes on each side until golden and crisp. Serve with chutney.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 195,
      "protein": 7,
      "carbs": 32,
      "fat": 4,
      "fiber": 5
    },
    "ingredients": [
      {
        "name": "Oats",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-059",
    "name": "Mumbai Street Egg Kathi Roll",
    "description": "Crisp flaky flatbread layered with spiced beaten egg, rolled up with sliced onions, chaat masala, and spicy green chutney.",
    "cuisine": "Indian",
    "meal_type": "Snack",
    "diet_type": "Eggetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 8,
    "total_time": 16,
    "servings": 2,
    "estimated_cost": 85,
    "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Kathi Roll",
      "Street Food",
      "Quick",
      "Eggs"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cook flatbread/paratha on a hot tawa with a dab of butter until golden.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Pour beaten egg onto the pan and immediately press the paratha on top so it adheres.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Flip once the egg is cooked and crisp.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Lay out flat; fill center with sliced raw onions, green chillies, lemon juice, roll tightly, and wrap in paper.",
        "timerMinutes": 3
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 15,
      "carbs": 36,
      "fat": 15,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Egg",
        "quantity": 2,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Lemon",
        "quantity": 0.5,
        "unit": "pcs",
        "category": "Fruits"
      }
    ]
  },
  {
    "id": "cat-060",
    "name": "Paneer Tikka Kathi Roll",
    "description": "Charred marinated paneer cubes rolled inside warm buttery flatbread with sliced crunchy onions and mint sauce.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 10,
    "total_time": 20,
    "servings": 2,
    "estimated_cost": 120,
    "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Roll",
      "Paneer",
      "Street Food",
      "Vegetarian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Pan-sear paneer cubes with turmeric, red chilli, and ginger-garlic paste until lightly charred.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Warm flatbread on a tawa with butter.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Place spiced paneer in center with sliced onions and coriander.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Roll tightly into a cylindrical wrap and serve hot.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 18,
      "carbs": 38,
      "fat": 18,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 200,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Garlic",
        "quantity": 3,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-061",
    "name": "Chicken Kathi Roll (Kolkata Style)",
    "description": "Buttery flaky flatbread layered with spiced sautéed chicken strips, crisp onion rings, and tangy lemon juice.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 12,
    "total_time": 22,
    "servings": 2,
    "estimated_cost": 150,
    "image_url": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Chicken Roll",
      "Kathi Roll",
      "Street Food",
      "Non-Veg"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Stir fry chicken strips with garlic, turmeric, red chilli powder, and salt until cooked through and slightly browned.",
        "timerMinutes": 6
      },
      {
        "step": 2,
        "instruction": "Toast flatbread on a tawa with butter until crisp.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Layer cooked chicken along the center with thinly sliced onions and a squeeze of fresh lemon.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Roll tightly and enjoy immediately.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 420,
      "protein": 32,
      "carbs": 36,
      "fat": 16,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 250,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      }
    ]
  },
  {
    "id": "cat-062",
    "name": "Tea-Time Crispy Onion Pakoda (Kanda Bhaji)",
    "description": "Golden, super crunchy street fritters prepared by tossing sliced onions in carom-spiced gram flour and frying crisp.",
    "cuisine": "Indian",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 10,
    "total_time": 18,
    "servings": 3,
    "estimated_cost": 40,
    "image_url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pakoda",
      "Monsoon Snack",
      "Crispy",
      "Vegan"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Thinly slice onions; toss with salt, green chillies, and coriander, letting onions release natural moisture.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Add gram flour (besan), red chilli powder, and a pinch of turmeric; mix without adding water.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Drop small loose clumps of onion batter into hot oil.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Fry on medium heat for 4-5 minutes until deeply golden and shatteringly crisp.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 230,
      "protein": 5,
      "carbs": 24,
      "fat": 12,
      "fiber": 3.5
    },
    "ingredients": [
      {
        "name": "Onion",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-063",
    "name": "Crispy Masala Aloo Tikki",
    "description": "Spiced mashed potato patties pan-fried golden and crisp on a tawa, seasoned with green chillies, cumin, and coriander.",
    "cuisine": "Indian",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 10,
    "total_time": 20,
    "servings": 3,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Aloo Tikki",
      "Street Food",
      "Potato",
      "Vegetarian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil potatoes, peel and mash smoothly while still warm.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Mix in chopped green chillies, coriander, cumin powder, and salt.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Shape into flat round patties (tikkis).",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Shallow fry on a flat tawa with oil or butter for 4 minutes per side until crust is deeply browned and crisp.",
        "timerMinutes": 8
      }
    ],
    "nutrition": {
      "calories": 220,
      "protein": 4,
      "carbs": 36,
      "fat": 7,
      "fiber": 3.5
    },
    "ingredients": [
      {
        "name": "Potato",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Coriander",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      }
    ]
  },
  {
    "id": "cat-064",
    "name": "Restaurant Butter Chicken (Murgh Makhani)",
    "description": "Tender roasted chicken pieces bathed in an opulent, velvety smooth tomato gravy with rich butter and aromatic fenugreek.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 20,
    "total_time": 35,
    "servings": 4,
    "estimated_cost": 260,
    "image_url": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Butter Chicken",
      "Royal",
      "Comfort Food",
      "Non-Veg"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Sear marinated chicken cubes in a skillet for 6 minutes until charred; remove.",
        "timerMinutes": 6
      },
      {
        "step": 2,
        "instruction": "In same pan, melt generous butter; add pureed tomatoes, ginger, garlic, and simmer until thick.",
        "timerMinutes": 8
      },
      {
        "step": 3,
        "instruction": "Stir in milk or cream, salt, and a pinch of sugar.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Add charred chicken pieces, simmer for 5 minutes, and finish with a knob of butter.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 480,
      "protein": 36,
      "carbs": 12,
      "fat": 32,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 500,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Tomato",
        "quantity": 4,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-065",
    "name": "Spicy Kadai Chicken with Bell Peppers",
    "description": "Juicy chicken pieces wok-tossed with freshly ground kadai spices, chunky bell peppers, and onion petals in a thick gravy.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 12,
    "cooking_time": 20,
    "total_time": 32,
    "servings": 3,
    "estimated_cost": 240,
    "image_url": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Kadai Chicken",
      "Spicy",
      "Restaurant Style",
      "High Protein"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil in a kadai; sauté chicken pieces on high heat with ginger-garlic paste for 6 minutes.",
        "timerMinutes": 6
      },
      {
        "step": 2,
        "instruction": "Add chopped tomatoes, turmeric, red chilli, and coriander powder; cook until tomatoes break down.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Toss in chunky bell peppers and onion petals; stir fry on high flame for 4 minutes so peppers remain crunchy.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Simmer for 4 minutes, garnish with fresh coriander, and serve hot.",
        "timerMinutes": 4
      }
    ],
    "nutrition": {
      "calories": 390,
      "protein": 38,
      "carbs": 10,
      "fat": 22,
      "fiber": 2.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 500,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Bell Pepper",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-066",
    "name": "Andhra Pepper Chicken Fry",
    "description": "Fiery Andhra-style semi-dry chicken roast loaded with freshly ground black pepper, garlic, and sizzling curry leaves.",
    "cuisine": "South Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 10,
    "cooking_time": 18,
    "total_time": 28,
    "servings": 3,
    "estimated_cost": 220,
    "image_url": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Pepper Chicken",
      "Andhra",
      "Spicy",
      "South Indian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil in a pan; add mustard seeds, curry leaves, and lots of sliced onions and garlic.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Add chicken pieces, turmeric, and salt; sear on high flame for 6 minutes.",
        "timerMinutes": 6
      },
      {
        "step": 3,
        "instruction": "Add 2 tablespoons of coarsely crushed black pepper and green chillies.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Roast uncovered on medium-high heat for 8 minutes until chicken is dark, tender, and coated in spicy pepper crust.",
        "timerMinutes": 8
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 39,
      "carbs": 6,
      "fat": 18,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 500,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Black Pepper",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 2,
        "unit": "sprigs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-067",
    "name": "Telangana Kodi Vepudu (Rustic Chicken Fry)",
    "description": "Authentic Telangana dry-spiced country chicken fry slow-roasted with caramelized onions, curry leaves, and pounded spices.",
    "cuisine": "Telangana",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 25,
    "total_time": 40,
    "servings": 4,
    "estimated_cost": 250,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Telangana",
      "Authentic",
      "Kodi Vepudu",
      "Spicy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Marinate chicken with turmeric, red chilli, ginger-garlic paste, and salt for 15 minutes.",
        "timerMinutes": 15
      },
      {
        "step": 2,
        "instruction": "Heat oil in a wide heavy kadai; add lots of curry leaves, sliced onions, and green chillies.",
        "timerMinutes": 5
      },
      {
        "step": 3,
        "instruction": "Add marinated chicken; cook on medium-high flame until all moisture evaporates.",
        "timerMinutes": 10
      },
      {
        "step": 4,
        "instruction": "Continue roasting the chicken on medium flame until oil separates and chicken turns deep golden brown.",
        "timerMinutes": 10
      }
    ],
    "nutrition": {
      "calories": 370,
      "protein": 40,
      "carbs": 5,
      "fat": 21,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 600,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Onion",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 2,
        "unit": "sprigs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-068",
    "name": "Pan-Grilled Chicken Tikka Skewers",
    "description": "Boneless chicken cubes marinated in garlic, lemon, turmeric, and chilli, pan-grilled with charred smoky edges.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 15,
    "cooking_time": 12,
    "total_time": 27,
    "servings": 3,
    "estimated_cost": 210,
    "image_url": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Tikka",
      "High Protein",
      "Appetizer",
      "Keto"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Cut chicken into uniform bite-sized cubes; toss with lemon juice, minced garlic, chilli, and salt.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Rest marinade for 15 minutes to tenderize meat.",
        "timerMinutes": 15
      },
      {
        "step": 3,
        "instruction": "Heat a grill pan or cast iron skillet with 1 tbsp butter/oil.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Cook chicken skewers for 5-6 minutes per side on high heat until charred spots appear and meat is fully cooked.",
        "timerMinutes": 10
      }
    ],
    "nutrition": {
      "calories": 320,
      "protein": 38,
      "carbs": 2,
      "fat": 17,
      "fiber": 0.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 400,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Garlic",
        "quantity": 6,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Butter",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-069",
    "name": "Chicken Sweet Corn Comfort Soup",
    "description": "Silky, comforting warm soup made with shredded chicken breast, creamed corn, egg ribbons, and cracked black pepper.",
    "cuisine": "Asian",
    "meal_type": "Dinner",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 12,
    "total_time": 20,
    "servings": 3,
    "estimated_cost": 110,
    "image_url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Soup",
      "Comfort Food",
      "Chicken",
      "Quick"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "In a soup pot, bring 3 cups water to a simmer with shredded chicken, ginger, and garlic.",
        "timerMinutes": 5
      },
      {
        "step": 2,
        "instruction": "Add corn, salt, and black pepper; simmer for 5 minutes.",
        "timerMinutes": 5
      },
      {
        "step": 3,
        "instruction": "Slowly drizzle beaten egg while stirring soup in a circle to create delicate egg ribbons.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Turn off heat, stir in a drop of soy sauce or butter, and serve steaming hot.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 22,
      "carbs": 14,
      "fat": 5,
      "fiber": 1.5
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 250,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Egg",
        "quantity": 1,
        "unit": "pcs",
        "category": "Proteins"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Black Pepper",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-070",
    "name": "Chicken Caesar Salad Bowl",
    "description": "Crisp salad greens, grilled chicken strips, garlic croutons, and cheese drizzled with creamy black pepper dressing.",
    "cuisine": "Continental",
    "meal_type": "Lunch",
    "diet_type": "Non-Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 8,
    "total_time": 18,
    "servings": 2,
    "estimated_cost": 190,
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Salad",
      "Caesar Salad",
      "High Protein",
      "Keto Friendly"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Pan-sear chicken breast seasoned with salt and pepper in 1 tsp olive oil for 6 minutes per side; slice.",
        "timerMinutes": 12
      },
      {
        "step": 2,
        "instruction": "Toast diced bread cubes in pan with garlic butter until crunchy croutons form.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "Toss cucumber or greens in a large bowl with a squeeze of lemon and black pepper.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Top with sliced chicken, crunchy croutons, and shaved cheese.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 360,
      "protein": 36,
      "carbs": 16,
      "fat": 17,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": 300,
        "unit": "g",
        "category": "Proteins"
      },
      {
        "name": "Bread",
        "quantity": 2,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Cheese",
        "quantity": 40,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Garlic",
        "quantity": 3,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      }
    ]
  },
  {
    "id": "cat-071",
    "name": "Matar Paneer (Cottage Cheese & Green Peas Curry)",
    "description": "Tender paneer cubes and sweet green peas simmered in a mildly spiced onion, tomato, and ginger garlic curry.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 10,
    "cooking_time": 18,
    "total_time": 28,
    "servings": 4,
    "estimated_cost": 150,
    "image_url": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Matar Paneer",
      "North Indian",
      "Vegetarian",
      "Classic"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Lightly pan-fry paneer cubes in 1 tsp oil until golden; set aside.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Sauté chopped onions, ginger, and garlic in a pan until lightly browned.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "Add tomato puree, turmeric, red chilli, and garam masala; cook until oil surfaces.",
        "timerMinutes": 5
      },
      {
        "step": 4,
        "instruction": "Add green peas, 1 cup water, and paneer cubes; simmer for 6 minutes. Garnish with coriander.",
        "timerMinutes": 6
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 17,
      "carbs": 18,
      "fat": 22,
      "fiber": 5
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": 250,
        "unit": "g",
        "category": "Dairy"
      },
      {
        "name": "Green Peas",
        "quantity": 1,
        "unit": "cup",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-072",
    "name": "Smoky Punjabi Baingan Bharta",
    "description": "Whole eggplant roasted directly over open flames, mashed and sautéed with onions, juicy tomatoes, and green chillies.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Medium",
    "preparation_time": 15,
    "cooking_time": 15,
    "total_time": 30,
    "servings": 3,
    "estimated_cost": 60,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Baingan Bharta",
      "Smoky",
      "Vegan",
      "North Indian"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Make small slits in eggplant, insert garlic cloves, and roast directly on stovetop flame for 10 minutes until charred and soft.",
        "timerMinutes": 10
      },
      {
        "step": 2,
        "instruction": "Peel off charred skin and mash the soft flesh with a fork.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Heat oil in a kadai; sauté chopped onions, green chillies, and tomatoes until soft.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Fold in mashed eggplant and salt; cook on medium flame for 5 minutes until well blended. Garnish with coriander.",
        "timerMinutes": 5
      }
    ],
    "nutrition": {
      "calories": 140,
      "protein": 3,
      "carbs": 16,
      "fat": 7,
      "fiber": 6
    },
    "ingredients": [
      {
        "name": "Eggplant",
        "quantity": 1,
        "unit": "large",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-073",
    "name": "Mushroom Pepper Masala",
    "description": "Sliced button mushrooms roasted on high heat with caramelized onions, curry leaves, garlic, and fresh black pepper.",
    "cuisine": "South Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 12,
    "total_time": 20,
    "servings": 3,
    "estimated_cost": 90,
    "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Mushroom",
      "Pepper Fry",
      "South Indian",
      "Spicy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Slice mushrooms and finely slice onions and garlic.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Heat oil in a pan; add curry leaves, green chillies, and sliced onions; sauté until golden brown.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "Add mushrooms, turmeric, and salt; cook on high heat for 5 minutes until water evaporates and mushrooms brown.",
        "timerMinutes": 5
      },
      {
        "step": 4,
        "instruction": "Sprinkle abundant crushed black pepper and toss for 2 minutes. Garnish with coriander.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 160,
      "protein": 6,
      "carbs": 10,
      "fat": 11,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Mushroom",
        "quantity": 300,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Black Pepper",
        "quantity": 1.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "name": "Onion",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 5,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-074",
    "name": "Aloo Matar Rasedar (Potato & Peas in Spiced Gravy)",
    "description": "Comforting everyday homestyle curry of boiled potato chunks and tender green peas in a light tomato-cumin gravy.",
    "cuisine": "Indian",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 15,
    "total_time": 23,
    "servings": 3,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Aloo Matar",
      "Comfort Food",
      "Everyday",
      "Vegan"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil in a pot; crackle cumin seeds, chopped green chillies, and ginger.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Add chopped tomatoes, turmeric, red chilli powder, and salt; cook until tomatoes are soft.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "Add boiled potato cubes, green peas, and 1.5 cups water.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Simmer on medium heat for 8 minutes, lightly crushing a few potato pieces to thicken gravy. Garnish with coriander.",
        "timerMinutes": 8
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 5,
      "carbs": 36,
      "fat": 4,
      "fiber": 5
    },
    "ingredients": [
      {
        "name": "Potato",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Peas",
        "quantity": 0.75,
        "unit": "cup",
        "category": "Vegetables"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Ginger",
        "quantity": 1,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-075",
    "name": "Garlic Sautéed Spinach (Lehsuni Palak)",
    "description": "Fresh tender spinach leaves flash-sautéed in golden browned garlic slivers, butter, and a hint of cumin.",
    "cuisine": "Indian",
    "meal_type": "Dinner",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 6,
    "total_time": 11,
    "servings": 2,
    "estimated_cost": 45,
    "image_url": "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Palak",
      "Quick 10m",
      "Iron Rich",
      "Healthy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Wash spinach leaves thoroughly and roughly chop.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Melt butter or heat oil in a wide pan; add cumin seeds and lots of sliced garlic until golden and fragrant.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Add chopped spinach and green chillies; sauté on high heat for 3 minutes until wilted.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Season with salt and serve immediately as a nutritious side.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 95,
      "protein": 4,
      "carbs": 5,
      "fat": 7,
      "fiber": 3.5
    },
    "ingredients": [
      {
        "name": "Spinach",
        "quantity": 300,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 8,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Green Chilli",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-076",
    "name": "Telangana Pachi Pulusu (Raw Tangy Tamarind Rasam)",
    "description": "Traditional uncooked summer stew from Telangana made with extract of tamarind, raw onions, roasted green chillies, and cumin.",
    "cuisine": "Telangana",
    "meal_type": "Lunch",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 8,
    "cooking_time": 2,
    "total_time": 10,
    "servings": 3,
    "estimated_cost": 30,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Telangana",
      "Authentic",
      "Pachi Pulusu",
      "Raw"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Soak tamarind in warm water and extract 2 cups of light tamarind juice.",
        "timerMinutes": 4
      },
      {
        "step": 2,
        "instruction": "Roast green chillies on an open flame until charred; crush with salt, cumin, and garlic.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Add finely chopped raw onions, crushed chillies, and coriander into the tamarind extract.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Temper with mustard seeds and curry leaves in 1 tsp oil, pour over the pulusu and serve with hot rice.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 65,
      "protein": 1.5,
      "carbs": 12,
      "fat": 1.5,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Tamarind",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Vegetables"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 3,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 3,
        "unit": "cloves",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-077",
    "name": "Telangana Sarva Pindi (Crispy Rice Flour Pancake)",
    "description": "Iconic rustic pancake from northern Telangana studded with roasted peanuts, sesame seeds, chopped onions, and curry leaves.",
    "cuisine": "Telangana",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 10,
    "cooking_time": 15,
    "total_time": 25,
    "servings": 3,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Telangana",
      "Sarva Pindi",
      "Traditional",
      "Crispy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "In a bowl, mix rice flour, roasted peanuts, finely chopped onions, green chillies, curry leaves, and salt.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Add water gradually to knead into a soft, pliable dough.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Grease a flat kadai or tawa with oil; press dough into a flat pancake and make several small holes across the surface.",
        "timerMinutes": 3
      },
      {
        "step": 4,
        "instruction": "Drizzle oil into each hole, cover and cook on medium-low flame for 12-15 minutes until bottom is golden and crunchy.",
        "timerMinutes": 14
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 7,
      "carbs": 46,
      "fat": 9,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Rice Flour",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "name": "Peanuts",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Grains"
      },
      {
        "name": "Onion",
        "quantity": 1,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Green Chilli",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Curry Leaves",
        "quantity": 1,
        "unit": "sprig",
        "category": "Vegetables"
      }
    ]
  },
  {
    "id": "cat-078",
    "name": "Quick Tomato Cucumber Bruschetta on Toast",
    "description": "Crispy toasted bread slices rubbed with raw garlic and topped with diced ripe tomatoes, black pepper, and olive oil.",
    "cuisine": "Italian",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 5,
    "total_time": 10,
    "servings": 2,
    "estimated_cost": 55,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Bruschetta",
      "Italian",
      "Quick",
      "Appetizer"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Dice ripe tomatoes and cucumber into tiny cubes; toss with salt, black pepper, and olive oil.",
        "timerMinutes": 3
      },
      {
        "step": 2,
        "instruction": "Toast bread slices until golden brown and crispy.",
        "timerMinutes": 3
      },
      {
        "step": 3,
        "instruction": "Lightly rub a cut clove of garlic over the warm toasted bread surface.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Spoon the fresh tomato mixture on top, garnish with coriander/basil, and serve immediately.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 180,
      "protein": 4,
      "carbs": 26,
      "fat": 7,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Bread",
        "quantity": 4,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Tomato",
        "quantity": 2,
        "unit": "pcs",
        "category": "Vegetables"
      },
      {
        "name": "Garlic",
        "quantity": 2,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cooking Oil",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Oils & Condiments"
      },
      {
        "name": "Black Pepper",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      }
    ]
  },
  {
    "id": "cat-079",
    "name": "Sweet Honey Banana Caramelized Toast",
    "description": "Thick bread toasted in butter and topped with sliced ripe bananas caramelized with honey and a pinch of cinnamon.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 3,
    "cooking_time": 5,
    "total_time": 8,
    "servings": 1,
    "estimated_cost": 45,
    "image_url": "https://images.unsplash.com/photo-1484723091739-00821c432021?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Banana",
      "Toast",
      "Breakfast",
      "Sweet"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Slice ripe banana into rounds.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Melt butter in a pan; add banana slices and drizzle 1 tbsp honey.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Cook for 2 minutes until bananas are tender and glazed with caramel.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Toast bread until golden, pile caramelized bananas on top, and enjoy warm.",
        "timerMinutes": 2
      }
    ],
    "nutrition": {
      "calories": 260,
      "protein": 4,
      "carbs": 48,
      "fat": 7,
      "fiber": 3.5
    },
    "ingredients": [
      {
        "name": "Bread",
        "quantity": 2,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Banana",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Honey",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "name": "Butter",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-080",
    "name": "Classic Banana Honey Milkshake",
    "description": "Thick, frosty milkshake blended with sweet ripe bananas, chilled whole milk, and pure natural honey.",
    "cuisine": "American",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 3,
    "cooking_time": 1,
    "total_time": 4,
    "servings": 2,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Milkshake",
      "Banana",
      "Kids Favorite",
      "Quick"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Peel ripe bananas and break into pieces.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Add bananas, chilled milk, and honey into a blender.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Blend on high speed for 60 seconds until frothy and smooth.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Pour into tall glasses and serve immediately.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 230,
      "protein": 7,
      "carbs": 44,
      "fat": 4.5,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Banana",
        "quantity": 2,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Milk",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-081",
    "name": "Fresh Honey Fruit Chaat Bowl",
    "description": "Refreshing colorful medley of diced apples, bananas, and cucumber tossed with fresh lemon juice, honey, and chaat masala.",
    "cuisine": "Indian",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 0,
    "total_time": 5,
    "servings": 2,
    "estimated_cost": 60,
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Fruit Chaat",
      "Healthy",
      "No Cook",
      "Vitamins"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Core and dice crisp apple into bite-sized cubes.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Slice bananas and peel and dice cucumber.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Combine fruits in a bowl and drizzle fresh lemon juice and honey.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Sprinkle a pinch of black pepper or chaat masala, toss gently, and enjoy chilled.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 150,
      "protein": 2,
      "carbs": 36,
      "fat": 0.5,
      "fiber": 4.5
    },
    "ingredients": [
      {
        "name": "Apple",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Banana",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Honey",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-082",
    "name": "Green Detox Apple Spinach Smoothie",
    "description": "Revitalizing vibrant green smoothie made with sweet apples, tender baby spinach, chilled water, lemon, and honey.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 4,
    "cooking_time": 1,
    "total_time": 5,
    "servings": 2,
    "estimated_cost": 50,
    "image_url": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Smoothie",
      "Green Detox",
      "Clean Eating",
      "Vitamins"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Chop sweet apple and wash fresh spinach thoroughly.",
        "timerMinutes": 2
      },
      {
        "step": 2,
        "instruction": "Place apple, spinach, juice of half lemon, 1 tbsp honey, and 1 cup chilled water into a blender.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Blend on high speed for 90 seconds until silky smooth.",
        "timerMinutes": 2
      },
      {
        "step": 4,
        "instruction": "Pour into glasses and drink immediately for maximum nutrient absorption.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 140,
      "protein": 2.5,
      "carbs": 32,
      "fat": 0.5,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Apple",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Spinach",
        "quantity": 100,
        "unit": "g",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 0.5,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Honey",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-083",
    "name": "Sweet Honey Banana Oat Porridge",
    "description": "Warm, comforting porridge cooked with rolled oats and milk, swirled with mashed sweet banana and golden honey.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 5,
    "cooking_time": 6,
    "total_time": 11,
    "servings": 2,
    "estimated_cost": 55,
    "image_url": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Oats",
      "Porridge",
      "Banana",
      "Comfort Breakfast"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Mash half a banana with a fork; slice the remaining half for topping.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "In a saucepan, combine oats, milk, and mashed banana; bring to a gentle simmer.",
        "timerMinutes": 2
      },
      {
        "step": 3,
        "instruction": "Cook for 4 minutes while stirring until thick and creamy.",
        "timerMinutes": 4
      },
      {
        "step": 4,
        "instruction": "Transfer to a bowl, top with sliced banana, and drizzle honey generously.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 9,
      "carbs": 54,
      "fat": 5,
      "fiber": 6
    },
    "ingredients": [
      {
        "name": "Oats",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "name": "Banana",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Milk",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Dairy"
      },
      {
        "name": "Honey",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  },
  {
    "id": "cat-084",
    "name": "Quick Cheesy Garlic Herb Breadsticks",
    "description": "Crusty bread strips brushed with melted garlic butter, sprinkled with cheese and black pepper, toasted to golden crunch.",
    "cuisine": "Continental",
    "meal_type": "Snack",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 4,
    "cooking_time": 6,
    "total_time": 10,
    "servings": 2,
    "estimated_cost": 60,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Breadsticks",
      "Snack",
      "Quick 10m",
      "Cheesy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Slice bread into 1-inch strips.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Melt butter with minced garlic and black pepper.",
        "timerMinutes": 1
      },
      {
        "step": 3,
        "instruction": "Brush bread strips on all sides with garlic butter, top with grated cheese.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Bake at 190°C for 6 minutes or toast on a flat skillet until all sides are crunchy and cheese melts.",
        "timerMinutes": 6
      }
    ],
    "nutrition": {
      "calories": 240,
      "protein": 8,
      "carbs": 22,
      "fat": 14,
      "fiber": 1.2
    },
    "ingredients": [
      {
        "name": "Bread",
        "quantity": 3,
        "unit": "slices",
        "category": "Grains"
      },
      {
        "name": "Butter",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "name": "Garlic",
        "quantity": 4,
        "unit": "cloves",
        "category": "Vegetables"
      },
      {
        "name": "Cheese",
        "quantity": 40,
        "unit": "g",
        "category": "Dairy"
      }
    ]
  },
  {
    "id": "cat-085",
    "name": "Warm Honey Lemon Ginger Immunity Tea",
    "description": "Soothing hot elixir made by brewing fresh crushed ginger and lemon slices in water, sweetened with natural pure honey.",
    "cuisine": "Continental",
    "meal_type": "Breakfast",
    "diet_type": "Vegetarian",
    "difficulty": "Easy",
    "preparation_time": 3,
    "cooking_time": 5,
    "total_time": 8,
    "servings": 2,
    "estimated_cost": 25,
    "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "tags": [
      "Tea",
      "Immunity",
      "Cold Remedy",
      "Healthy"
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Crush fresh ginger root coarsely.",
        "timerMinutes": 1
      },
      {
        "step": 2,
        "instruction": "Bring 2 cups water to a boil with crushed ginger; simmer for 4 minutes to extract flavor.",
        "timerMinutes": 4
      },
      {
        "step": 3,
        "instruction": "Strain into mugs, squeeze fresh lemon juice, and stir in honey.",
        "timerMinutes": 1
      },
      {
        "step": 4,
        "instruction": "Sip warm for soothing digestive and throat comfort.",
        "timerMinutes": 1
      }
    ],
    "nutrition": {
      "calories": 60,
      "protein": 0.5,
      "carbs": 16,
      "fat": 0.1,
      "fiber": 0.5
    },
    "ingredients": [
      {
        "name": "Ginger",
        "quantity": 1.5,
        "unit": "inch",
        "category": "Vegetables"
      },
      {
        "name": "Lemon",
        "quantity": 1,
        "unit": "pcs",
        "category": "Fruits"
      },
      {
        "name": "Honey",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ]
  }
];

export function insertCatalogRecipes() {
  const insertRecipe = db.prepare(`
    INSERT OR REPLACE INTO recipes (
      id, name, description, cuisine, meal_type, diet_type,
      difficulty, preparation_time, cooking_time, total_time,
      servings, instructions, nutrition_data, estimated_cost,
      image_url, tags
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertRecipeIngredient = db.prepare(`
    INSERT INTO recipe_ingredients (
      id, recipe_id, ingredient_id, ingredient_name,
      quantity, unit, category, is_optional
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const transaction = db.transaction((catalog: NewRecipeItem[]) => {
    for (const r of catalog) {
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

      db.prepare('DELETE FROM recipe_ingredients WHERE recipe_id = ?').run(r.id);

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
  });

  transaction(expandedNewRecipes);
  console.log(`✅ Successfully loaded ${expandedNewRecipes.length} core new recipes into catalog.`);
}

if (process.argv[1]?.endsWith('add250MoreRecipes.ts') || process.argv[1]?.endsWith('add250MoreRecipes.js')) {
  insertCatalogRecipes();
}
