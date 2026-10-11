export interface IngredientMatchResult {
  available: string[];
  partiallyAvailable: string[];
  missing: string[];
  matchPercentage: number;
}

export interface ScoredRecipe {
  recipe: any;
  score: number;
  matchPercentage: number;
  is100PercentMatch?: boolean;
  missingCount?: number;
  ingredientStatus: {
    available: { name: string; quantity: number; unit: string }[];
    missing: { name: string; quantity: number; unit: string }[];
  };
  scoreBreakdown: {
    ingredientMatchScore: number; // max 40
    dietCompatibilityScore: number; // max 20
    userPreferencesScore: number; // max 15
    cookingTimeScore: number; // max 10
    difficultyScore: number; // max 5
    nutritionBudgetScore: number; // max 10
  };
}

export interface RecommendationFilters {
  ingredients: string[];
  dietType?: string;
  allergies?: string[];
  cuisine?: string;
  mealType?: string;
  maxCookingTime?: number;
  difficulty?: string;
  budget?: number;
  servings?: number;
}

export class RecipeScoringEngine {
  // Common culinary and Telangana synonyms mapping
  private static synonymMap: { [key: string]: string } = {
    // Produce
    tomato: 'tomato',
    tomatoes: 'tomato',
    tamata: 'tomato',
    thakkali: 'tomato',
    onion: 'onion',
    onions: 'onion',
    ullipaya: 'onion',
    pyaz: 'onion',
    potato: 'potato',
    potatoes: 'potato',
    aloo: 'potato',
    aloot: 'potato',
    alugadda: 'potato',
    chilli: 'green chilli',
    chili: 'green chilli',
    chillies: 'green chilli',
    'green chilli': 'green chilli',
    'green chili': 'green chilli',
    mirchi: 'green chilli',
    'pachi mirchi': 'green chilli',
    garlic: 'garlic',
    vellulli: 'garlic',
    lahsun: 'garlic',
    ginger: 'ginger',
    allam: 'ginger',
    adrak: 'ginger',
    coriander: 'coriander',
    cilantro: 'coriander',
    kothimeera: 'coriander',
    dhania: 'coriander',
    'curry leaves': 'curry leaves',
    karivepaku: 'curry leaves',
    tamarind: 'tamarind',
    chintapandu: 'tamarind',
    imli: 'tamarind',
    // Grains, Flours & Lentils
    'rice flour': 'rice flour',
    'biyyam pindi': 'rice flour',
    rice: 'rice',
    chawal: 'rice',
    biyyam: 'rice',
    basmati: 'rice',
    jowar: 'jowar flour',
    'jowar flour': 'jowar flour',
    'jonna pindi': 'jowar flour',
    jonna: 'jowar flour',
    sorghum: 'jowar flour',
    'toor dal': 'toor dal',
    'kandi pappu': 'toor dal',
    arhar: 'toor dal',
    lentils: 'toor dal',
    'chana dal': 'chana dal',
    'senaga pappu': 'chana dal',
    peanuts: 'peanuts',
    peanut: 'peanuts',
    pallilu: 'peanuts',
    groundnut: 'peanuts',
    sesame: 'sesame seeds',
    'sesame seeds': 'sesame seeds',
    nuvvulu: 'sesame seeds',
    til: 'sesame seeds',
    'sweet corn': 'sweet corn',
    corn: 'sweet corn',
    makka: 'sweet corn',
    'makka kanki': 'sweet corn',
    // Vegetables
    'bottle gourd': 'bottle gourd',
    sorakaya: 'bottle gourd',
    anapakaya: 'bottle gourd',
    lauki: 'bottle gourd',
    okra: 'okra',
    ladyfinger: 'okra',
    bendakaya: 'okra',
    bhindi: 'okra',
    brinjal: 'brinjal',
    eggplant: 'brinjal',
    vankaya: 'brinjal',
    baingan: 'brinjal',
    'snake gourd': 'snake gourd',
    potlakaya: 'snake gourd',
    'yellow cucumber': 'yellow cucumber',
    dosakaya: 'yellow cucumber',
    'green peas': 'green peas',
    batani: 'green peas',
    peas: 'green peas',
    gongura: 'gongura leaves',
    'gongura leaves': 'gongura leaves',
    puntikura: 'gongura leaves',
    'fenugreek leaves': 'fenugreek leaves',
    methi: 'fenugreek leaves',
    'menthi kura': 'fenugreek leaves',
    // Non-veg & Proteins
    chicken: 'chicken',
    kodi: 'chicken',
    'natu kodi': 'chicken',
    mutton: 'mutton',
    mamsam: 'mutton',
    meat: 'mutton',
    egg: 'egg',
    eggs: 'egg',
    guddu: 'egg',
    anda: 'egg',
    fish: 'fish',
    'fish fillet': 'fish',
    chepa: 'fish',
    machli: 'fish',
    salmon: 'fish',
    prawns: 'prawns',
    prawn: 'prawns',
    shrimp: 'prawns',
    royyalu: 'prawns',
    // Bakery, Grains & Pasta
    bread: 'bread',
    'bread slices': 'bread',
    toast: 'bread',
    bun: 'bread',
    pasta: 'pasta',
    spaghetti: 'pasta',
    penne: 'pasta',
    macaroni: 'pasta',
    noodles: 'noodles',
    noodle: 'noodles',
    maggi: 'noodles',
    oats: 'oats',
    'rolled oats': 'oats',
    oatmeal: 'oats',
    poha: 'poha',
    flour: 'flour',
    maida: 'flour',
    atta: 'flour',
    chickpeas: 'chickpeas',
    chana: 'chickpeas',
    // Fruits & Sweets
    apple: 'apple',
    apples: 'apple',
    banana: 'banana',
    bananas: 'banana',
    arati: 'banana',
    kela: 'banana',
    honey: 'honey',
    thene: 'honey',
    lemon: 'lemon',
    lime: 'lemon',
    nimbu: 'lemon',
    nimmakaya: 'lemon',
    // Dairy & Sweets
    milk: 'milk',
    paalu: 'milk',
    doodh: 'milk',
    curd: 'curd',
    yogurt: 'curd',
    perugu: 'curd',
    dahi: 'curd',
    jaggery: 'jaggery',
    bellam: 'jaggery',
    butter: 'butter',
    ghee: 'butter',
    paneer: 'paneer',
    cheese: 'cheese',
    cheddar: 'cheese',
    mozzarella: 'cheese',
    // More vegetables
    mushroom: 'mushroom',
    mushrooms: 'mushroom',
    cauliflower: 'cauliflower',
    gobi: 'cauliflower',
    cabbage: 'cabbage',
    capsicum: 'bell pepper',
    'bell pepper': 'bell pepper',
    cucumber: 'cucumber',
    keera: 'cucumber',
  };

  /**
   * Normalizes ingredient names for matching
   */
  public static normalize(name: string): string {
    const cleaned = name
      .toLowerCase()
      .trim()
      .replace(/^(fresh|organic|raw|ripe|chopped|diced|sliced|boiled|grated|crushed|powder|leaves|seeds)\s+/i, '')
      .replace(/s\b/g, '')
      .trim();

    return this.synonymMap[cleaned] || this.synonymMap[name.toLowerCase().trim()] || cleaned;
  }

  /**
   * Checks if an ingredient is in the user's available list
   */
  public static isIngredientAvailable(recipeIngName: string, availableIngredients: string[]): boolean {
    const normRecipeIng = this.normalize(recipeIngName);
    return availableIngredients.some((avail) => {
      const normAvail = this.normalize(avail);
      return (
        normAvail === normRecipeIng ||
        normAvail.includes(normRecipeIng) ||
        normRecipeIng.includes(normAvail)
      );
    });
  }

  /**
   * Checks whether an ingredient is a universal kitchen seasoning/condiment
   */
  public static isPantryStaple(name: string): boolean {
    const norm = name.toLowerCase().trim();
    const staples = [
      'salt',
      'water',
      'oil',
      'cooking oil',
      'turmeric',
      'chilli powder',
      'chili powder',
      'cumin',
      'jeera',
      'mustard',
      'aavalu',
      'garam masala',
      'pepper',
      'ghee',
    ];
    return staples.some((s) => norm.includes(s));
  }

  /**
   * Evaluates and scores recipes against user ingredients and preferences.
   * Allergen-safe: completely eliminates recipes with blocked allergens.
   * Maximizes match percentage to 100% when core produce and proteins are present.
   */
  public static scoreRecipe(
    recipe: any,
    recipeIngredients: { ingredient_name: string; quantity: number; unit: string }[],
    filters: RecommendationFilters
  ): ScoredRecipe | null {
    const normalizedUserIngredients = (filters.ingredients || []).map((i) => this.normalize(i));
    const allergies = (filters.allergies || []).map((a) => this.normalize(a));

    // 1. ALLERGEN SAFETY CHECK (Absolute exclusion)
    for (const ing of recipeIngredients) {
      const ingNorm = this.normalize(ing.ingredient_name);
      for (const allergen of allergies) {
        if (allergen && (ingNorm.includes(allergen) || allergen.includes(ingNorm))) {
          // Excluded due to allergen
          return null;
        }
      }
    }

    // 2. INGREDIENT MATCHING (40% Weight)
    const availableItems: { name: string; quantity: number; unit: string }[] = [];
    const missingItems: { name: string; quantity: number; unit: string }[] = [];
    const missingNonStaples: { name: string; quantity: number; unit: string }[] = [];

    let nonStapleCount = 0;
    let matchedNonStapleCount = 0;

    for (const ing of recipeIngredients) {
      const isStaple = this.isPantryStaple(ing.ingredient_name);
      const isAvailable = this.isIngredientAvailable(ing.ingredient_name, normalizedUserIngredients);

      if (isAvailable) {
        availableItems.push({ name: ing.ingredient_name, quantity: ing.quantity, unit: ing.unit });
        if (!isStaple) matchedNonStapleCount++;
      } else {
        missingItems.push({ name: ing.ingredient_name, quantity: ing.quantity, unit: ing.unit });
        if (!isStaple) {
          missingNonStaples.push({ name: ing.ingredient_name, quantity: ing.quantity, unit: ing.unit });
        }
      }

      if (!isStaple) nonStapleCount++;
    }

    const hasUserIngredients = normalizedUserIngredients.length > 0;

    // STRICT ACCURACY REQUIREMENT:
    // When the user specifies ingredients (via image upload, scan, or text message),
    // strictly eliminate any recipe that does not contain ANY of the user's ingredients!
    if (hasUserIngredients && matchedNonStapleCount === 0) {
      return null;
    }

    const missingCount = nonStapleCount > 0 ? missingNonStaples.length : missingItems.length;
    const is100PercentMatch = hasUserIngredients && missingNonStaples.length === 0 && matchedNonStapleCount > 0;

    // Calculate match percentage based on hero produce/proteins
    const effectiveTotal = nonStapleCount > 0 ? nonStapleCount : recipeIngredients.length;
    let matchRatio = effectiveTotal > 0 ? matchedNonStapleCount / effectiveTotal : 0;

    let matchPercentage = Math.round(matchRatio * 100);
    if (is100PercentMatch) {
      matchPercentage = 100;
      matchRatio = 1.0;
    } else if (hasUserIngredients) {
      if (missingNonStaples.length <= 1 && matchedNonStapleCount >= 1) {
        matchPercentage = Math.max(88, matchPercentage);
        matchRatio = Math.max(0.88, matchRatio);
      } else if (missingNonStaples.length <= 2 && matchedNonStapleCount >= 1) {
        matchPercentage = Math.max(78, matchPercentage);
        matchRatio = Math.max(0.78, matchRatio);
      } else if (missingNonStaples.length <= 3 && matchedNonStapleCount >= 1) {
        matchPercentage = Math.max(68, matchPercentage);
        matchRatio = Math.max(0.68, matchRatio);
      }
    }

    const ingredientMatchScore = Math.min(40, Math.round(matchRatio * 40));

    // 3. DIET COMPATIBILITY (20% Weight)
    let dietScore = 20;
    if (filters.dietType && filters.dietType !== 'Any') {
      const diet = filters.dietType.toLowerCase();
      const recipeDiet = (recipe.diet_type || '').toLowerCase();

      if (diet === 'vegan') {
        dietScore = recipeDiet === 'vegan' ? 20 : 0;
      } else if (diet === 'vegetarian') {
        dietScore = recipeDiet === 'vegetarian' || recipeDiet === 'vegan' ? 20 : 0;
      } else if (diet === 'eggetarian') {
        dietScore = ['vegetarian', 'vegan', 'eggetarian'].includes(recipeDiet) ? 20 : 0;
      }
      // Non-veg accepts everything
    }

    // If diet compatibility is 0 and strict diet is specified, filter out
    if (dietScore === 0) {
      return null;
    }

    // 4. USER PREFERENCES (Cuisine / Meal Type) (15% Weight)
    let preferencesScore = 15;
    const isTelangana =
      (recipe.cuisine || '').toLowerCase().includes('telangana') ||
      (recipe.tags && Array.isArray(recipe.tags) && recipe.tags.some((t: string) => t.toLowerCase().includes('telangana')));

    if (filters.cuisine && filters.cuisine !== 'Any') {
      const filterCuisine = filters.cuisine.toLowerCase();
      if (filterCuisine.includes('telangana')) {
        preferencesScore = isTelangana ? 18 : 6;
      } else {
        const matchesCuisine = recipe.cuisine.toLowerCase().includes(filterCuisine);
        preferencesScore = matchesCuisine ? 15 : 7;
      }
    } else {
      // Balanced scoring across all cuisines
      preferencesScore = 15;
    }

    if (filters.mealType && filters.mealType !== 'Any') {
      const matchesMeal = recipe.meal_type.toLowerCase() === filters.mealType.toLowerCase();
      preferencesScore = matchesMeal ? preferencesScore : preferencesScore * 0.85;
    }

    // 5. COOKING TIME (10% Weight)
    let timeScore = 10;
    if (filters.maxCookingTime && filters.maxCookingTime > 0) {
      if (recipe.total_time <= filters.maxCookingTime) {
        timeScore = 10;
      } else if (recipe.total_time <= filters.maxCookingTime + 15) {
        timeScore = 7;
      } else {
        timeScore = 4;
      }
    }

    // 6. DIFFICULTY (5% Weight)
    let difficultyScore = 5;
    if (filters.difficulty && filters.difficulty !== 'Any') {
      difficultyScore = recipe.difficulty.toLowerCase() === filters.difficulty.toLowerCase() ? 5 : 3.5;
    }

    // 7. NUTRITION / BUDGET RELEVANCE (10% Weight)
    let budgetNutritionScore = 10;
    if (filters.budget && filters.budget > 0) {
      if (recipe.estimated_cost <= filters.budget) {
        budgetNutritionScore = 10;
      } else if (recipe.estimated_cost <= filters.budget * 1.3) {
        budgetNutritionScore = 7;
      } else {
        budgetNutritionScore = 4;
      }
    }

    // If matchPercentage is 100%, guarantee a top 95 - 100 score
    let totalScore = Math.round(
      ingredientMatchScore +
      dietScore +
      preferencesScore +
      timeScore +
      difficultyScore +
      budgetNutritionScore
    );

    if (is100PercentMatch || matchPercentage === 100) {
      totalScore = Math.max(95, Math.min(100, totalScore));
    }

    return {
      recipe,
      score: totalScore,
      matchPercentage,
      is100PercentMatch,
      missingCount,
      ingredientStatus: {
        available: availableItems,
        missing: missingItems,
      },
      scoreBreakdown: {
        ingredientMatchScore,
        dietCompatibilityScore: dietScore,
        userPreferencesScore: Math.round(preferencesScore),
        cookingTimeScore: timeScore,
        difficultyScore: Math.round(difficultyScore),
        nutritionBudgetScore: Math.round(budgetNutritionScore),
      },
    };
  }
}
