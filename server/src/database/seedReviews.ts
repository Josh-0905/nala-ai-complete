import { v4 as uuidv4 } from 'uuid';
import { db } from './db.js';

export interface SeedReview {
  recipeId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  tags: string[];
  helpfulCount: number;
  daysAgo: number;
}

export const curatedReviews: SeedReview[] = [
  // rec-001: Masala Egg Rice
  {
    recipeId: 'rec-001',
    userName: 'Tanya Mathur',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Absolute lifesaver for quick weeknight dinner!',
    comment: 'I had leftover basmati rice and 3 eggs. The sautéed onions and green chillies gave it that authentic street-style aroma. The built-in step timer kept me from scorching the bottom. My family loved every bite!',
    tags: ['Quick & Easy', 'Weeknight Dinner', 'Leftover Hack'],
    helpfulCount: 34,
    daysAgo: 2,
  },
  {
    recipeId: 'rec-001',
    userName: 'Vikram Sethi',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Pro tip: Toss cold fridge rice for best grain texture',
    comment: 'Tip: Toss the rice in cold right from the fridge so the grains stay separate and don\'t clump. Flavor was 10/10, hearty, and satisfying without needing heavy cream.',
    tags: ['Pro Tip', 'Beginner Friendly'],
    helpfulCount: 28,
    daysAgo: 5,
  },
  {
    recipeId: 'rec-001',
    userName: 'Meera Nair',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    title: 'Super forgiving and kid approved',
    comment: 'Substituted chopped bell peppers because I was out of green chillies. Very forgiving recipe and ready in under 20 minutes. Will definitely make again.',
    tags: ['Budget Friendly', 'Kid Approved'],
    helpfulCount: 16,
    daysAgo: 8,
  },

  // rec-002: Crispy Jeera Aloo
  {
    recipeId: 'rec-002',
    userName: 'Rohan Deshmukh',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'The cumin crackling step makes all the difference!',
    comment: 'The cumin crackling step in hot oil makes such a massive difference. The potato edges got super crisp while remaining tender on the inside. Paired wonderfully with hot parathas and curd.',
    tags: ['Comfort Food', 'Crispy', 'Family Favorite'],
    helpfulCount: 42,
    daysAgo: 3,
  },
  {
    recipeId: 'rec-002',
    userName: 'Sunita Patel',
    userAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Hands-free voice mode worked like a dream',
    comment: 'Cooked this with voice instructions while rolling rotis. Never had to wash my flour-covered hands to check the screen. Simple spices, massive flavor.',
    tags: ['Hands-Free Voice', 'Quick Prep'],
    helpfulCount: 31,
    daysAgo: 6,
  },

  // rec-003: Spicy Potato Onion Bhurji
  {
    recipeId: 'rec-003',
    userName: 'Karan Joshi',
    userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Cooked in my college hostel room!',
    comment: 'Cooked this in my hostel room on an induction stove. The ingredient scanner accurately identified my 2 sprouting potatoes and 1 red onion. Zero waste, budget under ₹50.',
    tags: ['Hostel Friendly', 'Zero Waste', 'Easy'],
    helpfulCount: 39,
    daysAgo: 1,
  },
  {
    recipeId: 'rec-003',
    userName: 'Ananya Sen',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Added a pinch of kasuri methi at the end',
    comment: 'Smelled like my grandmother\'s kitchen. The step timer for sautéing the onions till translucent was spot on. A true comfort food classic.',
    tags: ['Crowd Pleaser', 'Traditional'],
    helpfulCount: 19,
    daysAgo: 7,
  },

  // rec-004: Classic Tomato Onion Egg Curry
  {
    recipeId: 'rec-004',
    userName: 'Pooja Hegde',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Gravy consistency was restaurant caliber',
    comment: 'Making light vertical slits on the boiled eggs allowed all the curry spices and tangy tomato base to seep right in. Served with steamed jeera rice.',
    tags: ['Restaurant Quality', 'High Protein'],
    helpfulCount: 27,
    daysAgo: 4,
  },
  {
    recipeId: 'rec-004',
    userName: 'Deepak Rao',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Missing ingredient detection restocked my spices',
    comment: 'My family cleaned their plates! Missing ingredient detection added ginger-garlic paste to my 1-click shopping list, which elevated the gravy immensely.',
    tags: ['Family Meal', '1-Click Restock'],
    helpfulCount: 22,
    daysAgo: 9,
  },

  // rec-005: South Indian Tomato Rice (Thakkali Sadam)
  {
    recipeId: 'rec-005',
    userName: 'Lakshmi Narayanan',
    userAvatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Authentic temple-style flavor profile',
    comment: 'The tempered mustard seeds and curry leaves bring out authentic nostalgic flavours. Packed it in lunchbox containers for my children and they adored it.',
    tags: ['Traditional', 'Meal Prep', 'South Indian'],
    helpfulCount: 35,
    daysAgo: 3,
  },
  {
    recipeId: 'rec-005',
    userName: 'Aditya K.',
    userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    title: 'Tangy and aromatic perfection',
    comment: 'Super easy lunch. I roasted some peanuts in ghee and scattered them on top for that extra crunch. Beautiful color and aroma.',
    tags: ['Quick Lunch', 'Easy'],
    helpfulCount: 14,
    daysAgo: 11,
  },

  // rec-006: Quick Vegetable Fried Rice
  {
    recipeId: 'rec-006',
    userName: 'Jason Lee',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Way better than delivery takeout!',
    comment: 'The soy sauce and garlic aroma in the hot skillet hit immediately. Used day-old rice and chopped bell peppers. Ready in 15 minutes flat.',
    tags: ['Better Than Takeout', '15-Minute Meal'],
    helpfulCount: 45,
    daysAgo: 2,
  },

  // rec-007: Creamy Garlic Tomato Pasta
  {
    recipeId: 'rec-007',
    userName: 'Chef Matteo Rossi',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Starchy pasta water emulsification is spot on',
    comment: 'Impressive balance! Reserving half a cup of starchy pasta water to emulsify the simmered tomato sauce is the true Italian way. Well formulated AI recipe.',
    tags: ['Authentic Italian', 'Date Night', 'Creamy'],
    helpfulCount: 52,
    daysAgo: 1,
  },
  {
    recipeId: 'rec-007',
    userName: 'Shruti Varma',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Comfort food after a 10-hour hospital shift',
    comment: 'Cooked this in 18 minutes after an exhausting shift. Super comforting, minimal dishwashing, and packed with garlic goodness.',
    tags: ['Quick & Easy', 'Comfort Food'],
    helpfulCount: 30,
    daysAgo: 6,
  },

  // rec-008: Paneer Bhurji
  {
    recipeId: 'rec-008',
    userName: 'Rajiv Malhotra',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Zero-waste hero! Saved 200g expiring paneer',
    comment: 'I had 200g of paneer in the fridge expiring tomorrow. NALA AI\'s food waste alert flagged it and recommended this. Ate it with toasted bread pav. 28g clean protein!',
    tags: ['High Protein', 'Zero Waste', 'Muscle Fuel'],
    helpfulCount: 41,
    daysAgo: 3,
  },

  // rec-009: Homestyle Chicken Curry
  {
    recipeId: 'rec-009',
    userName: 'Siddharth Nair',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Rich gravy without heavy cream or cashew pastes',
    comment: 'Traditional slow-browned onions deliver that deep rustic flavor without needing store-bought pastes. Tender chicken that soaked up the gravy thoroughly.',
    tags: ['Homestyle', 'Comfort Food', 'Sunday Special'],
    helpfulCount: 38,
    daysAgo: 4,
  },

  // rec-010: Restaurant Style Butter Chicken
  {
    recipeId: 'rec-010',
    userName: 'Ayesha Siddiqui',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Dinner party hit! Guests thought it was catering',
    comment: 'Restaurant quality right in my own kitchen! Kasuri methi and butter finish gave it that velvety signature makhani gravy. My dinner guests couldn\'t believe it was homemade.',
    tags: ['Restaurant Quality', 'Dinner Party', 'Decadent'],
    helpfulCount: 49,
    daysAgo: 2,
  },

  // rec-011: Kadai Paneer & Bell Peppers
  {
    recipeId: 'rec-011',
    userName: 'Priya Sharma',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Crisp bell peppers and smoky spices',
    comment: 'The freshly pounded spices give that distinctive Kadai kick. The bell peppers retain their delightful crunch without getting soggy. 10/10 dinner.',
    tags: ['Family Favorite', 'Authentic Flavor', 'Dhaba Style'],
    helpfulCount: 63,
    daysAgo: 1,
  },

  // rec-012: Creamy Palak Paneer
  {
    recipeId: 'rec-012',
    userName: 'Dr. Harsh Vardhan',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Ice bath trick preserved the emerald green hue',
    comment: 'Blanching the spinach and ice-bathing it kept that vibrant emerald green color. Packed with iron, calcium, and clean vegetarian protein.',
    tags: ['Healthy & Wholesome', 'High Protein', 'Vibrant'],
    helpfulCount: 36,
    daysAgo: 5,
  },

  // rec-013: Golden Homestyle Dal Tadka
  {
    recipeId: 'rec-013',
    userName: 'Gaurav Mehta',
    userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'The double garlic tadka in ghee is golden',
    comment: 'The sizzling garlic in pure ghee poured over the dal was heavenly. Pure soul food after a tiring week. Simple yellow lentils elevated into something magical.',
    tags: ['Soul Food', 'Everyday Comfort', 'Beginner Friendly'],
    helpfulCount: 29,
    daysAgo: 3,
  },

  // rec-014: Nourishing Dal Palak
  {
    recipeId: 'rec-014',
    userName: 'Anand Ranganathan',
    userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'The ultimate healthy dinner bowl',
    comment: 'The garlicky tempering cuts through the earthy spinach beautifully. Light on the stomach, gluten-free, and super nourishing.',
    tags: ['Nutritious', 'Gluten-Free', 'Weight Loss Friendly'],
    helpfulCount: 25,
    daysAgo: 7,
  },

  // rec-015: Spicy Mumbai Egg Bhurji
  {
    recipeId: 'rec-015',
    userName: 'Zaid Merchant',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Tastes like the famous CST railway street stalls',
    comment: 'High heat scrambling with lots of onions, green chillies, and butter. Squeeze of fresh lime juice at the end is non-negotiable. Finished in 10 minutes.',
    tags: ['Street Food', 'Late Night', '10-Minute Recipe'],
    helpfulCount: 44,
    daysAgo: 2,
  },

  // rec-016: Mediterranean Shakshuka
  {
    recipeId: 'rec-016',
    userName: 'Elena Rostova',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Runny yolks in spiced tomato sauce = Brunch heaven',
    comment: 'The poached eggs with runny yolks nestled in spiced cumin-tomato sauce with crumbled feta—chef\'s kiss! Dipped crusty sourdough straight into the skillet.',
    tags: ['Brunch Favorite', 'Weekend Cooking', 'Mediterranean'],
    helpfulCount: 57,
    daysAgo: 3,
  },

  // rec-017: Spaghetti Aglio e Olio
  {
    recipeId: 'rec-017',
    userName: 'Marco Bellini',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Gentle garlic infusion is essential',
    comment: 'Only 5 ingredients and tastes luxurious. Infusing sliced garlic slowly in extra virgin olive oil without browning too fast is key. Superb recipe instructions.',
    tags: ['Classic Italian', 'Minimalist', 'Under 15 Mins'],
    helpfulCount: 33,
    daysAgo: 4,
  },

  // rec-018: Fresh Tomato Cucumber Koshimbir
  {
    recipeId: 'rec-018',
    userName: 'Vasundhara K.',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'The mustard seed tempering over cool cucumbers is genius',
    comment: 'Such a refreshing crunch! The warm tempering over chilled vegetables makes it so vibrant. Perfect companion for spicy curry dishes.',
    tags: ['Refreshing', 'No Cook', 'Side Dish'],
    helpfulCount: 20,
    daysAgo: 6,
  },

  // rec-019: Aromatic Vegetable Masala Pulao
  {
    recipeId: 'rec-019',
    userName: 'Bina Agarwal',
    userAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'One-pot wonder for busy weeknights',
    comment: 'Fragrant basmati rice infused with whole spices, carrots, and peas. The cooking timer for 12 minutes low simmer created fluffy, separate grains.',
    tags: ['One Pot Meal', 'Family Dinner', 'Aromatic'],
    helpfulCount: 28,
    daysAgo: 5,
  },

  // rec-020: Crispy Garlic Herb Potato Wedges
  {
    recipeId: 'rec-020',
    userName: 'Dev Patel',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Crispy without deep frying',
    comment: 'Baking at high temperature with the cornstarch and herb toss made them crisp on the outside and steamy soft inside. Favorite match-day snack.',
    tags: ['Party Snack', 'Game Night', 'Crispy'],
    helpfulCount: 37,
    daysAgo: 3,
  },

  // rec-021: Garlic Butter Chicken & Peppers Skillet
  {
    recipeId: 'rec-021',
    userName: 'Rahul Verma',
    userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Low carb, high protein, ready in 20 minutes',
    comment: 'Single skillet meal that requires almost no prep. The garlic butter glaze with caramelized peppers coats the chicken breast perfectly.',
    tags: ['Keto Friendly', 'Low Carb', 'Single Skillet'],
    helpfulCount: 40,
    daysAgo: 2,
  },

  // rec-022: Vegetable & Egg Breakfast Frittata
  {
    recipeId: 'rec-022',
    userName: 'Tara D\'Souza',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    title: 'Sunday meal prep sorted my weekday breakfasts',
    comment: 'Prepped this on Sunday evening and had nutritious breakfast slices ready all week for the office. Fantastic way to use up assorted leftover vegetables.',
    tags: ['Meal Prep', 'Breakfast', 'Zero Waste'],
    helpfulCount: 32,
    daysAgo: 4,
  },
];

export function seedReviews(): void {
  const existing = db.prepare('SELECT count(*) as count FROM recipe_reviews').get() as { count: number };
  if (existing && existing.count >= curatedReviews.length) {
    console.log(`Database already has ${existing.count} recipe reviews. Skipping re-seed.`);
    return;
  }

  console.log('🌟 Seeding authentic community cook reviews into NALA AI database...');

  const insertReview = db.prepare(`
    INSERT INTO recipe_reviews (id, recipe_id, user_id, user_name, user_avatar, rating, title, comment, tags, helpful_count, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const now = Date.now();

  for (const rev of curatedReviews) {
    const createdAt = new Date(now - rev.daysAgo * 86400000).toISOString();
    insertReview.run(
      uuidv4(),
      rev.recipeId,
      null,
      rev.userName,
      rev.userAvatar || null,
      rev.rating,
      rev.title,
      rev.comment,
      JSON.stringify(rev.tags),
      rev.helpfulCount,
      createdAt
    );
  }

  console.log(`✅ Successfully seeded ${curatedReviews.length} community reviews across recipe catalog!`);
}

if (process.argv[1]?.endsWith('seedReviews.ts') || process.argv[1]?.endsWith('seedReviews.js')) {
  seedReviews();
}
