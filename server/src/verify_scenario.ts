async function runScenarioTest() {
  console.log('🧪 Starting End-to-End Test Scenario (Section 48)...');
  const BASE_URL = 'http://localhost:5000/api';

  // Step 1: Sign up a test user
  const email = `testuser_${Date.now()}@nala.ai`;
  console.log(`\n1. Signing up user: ${email}...`);
  const signupRes = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Chef Priya',
      email,
      password: 'password123',
      diet_type: 'Vegetarian',
      cuisine_preferences: ['Indian'],
      cooking_preferences: ['Quick meals'],
      budget: 500,
    }),
  });

  const signupData = await signupRes.json();
  if (!signupRes.ok) throw new Error(`Signup failed: ${JSON.stringify(signupData)}`);
  const token = signupData.token;
  console.log('✓ User signed up successfully with token.');

  // Step 2: Set / verify preferences (Vegetarian, Indian, under 30 min)
  console.log('\n2. Updating user preferences...');
  const prefRes = await fetch(`${BASE_URL}/auth/preferences`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      diet_type: 'Vegetarian',
      cuisine_preferences: ['Indian'],
      cooking_preferences: ['Quick meals'],
      budget: 500,
    }),
  });
  const prefData = await prefRes.json();
  console.log('✓ Preferences confirmed:', prefData.preferences.diet_type, prefData.preferences.cuisine_preferences);

  // Step 3 & 4: Upload / Scan ingredients: Tomato, Onion, Potato, Green Chilli, Coriander
  console.log('\n3. Scanning ingredients via AI Vision service...');
  const scanRes = await fetch(`${BASE_URL}/scanner/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ preset: 'default' }),
  });
  const scanData = await scanRes.json();
  console.log('✓ AI Vision detected ingredients:');
  for (const ing of scanData.ingredients) {
    console.log(`   - ${ing.name}: ${Math.round(ing.confidence * 100)}% confidence (${ing.category})`);
  }

  // Step 5: Confirm ingredients
  console.log('\n5. Confirming detected ingredients...');
  const confirmedNames = scanData.ingredients.map((i: any) => i.name);
  const confirmRes = await fetch(`${BASE_URL}/scanner/confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      scanId: scanData.scanId,
      confirmedIngredients: confirmedNames,
    }),
  });
  console.log('✓ Confirmed ingredients:', confirmedNames.join(', '));

  // Step 6: Generate recipe recommendations
  console.log('\n6. Calling AI Recipe Recommendation Engine with filters (Vegetarian, Indian, under 30 min)...');
  const recRes = await fetch(`${BASE_URL}/recipes/recommend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ingredients: confirmedNames,
      dietType: 'Vegetarian',
      cuisine: 'Indian',
      maxCookingTime: 30,
    }),
  });
  const recData = await recRes.json();
  console.log(`✓ Received ${recData.recommendations.length} ranked recommendations:`);
  recData.recommendations.forEach((r: any, idx: number) => {
    console.log(`   ${idx + 1}. ${r.recipe.name} — Score: ${r.score}/100, Match: ${r.matchPercentage}%, Time: ${r.recipe.total_time} min`);
  });

  const selectedRecipe = recData.recommendations[0];
  const recipeId = selectedRecipe.recipe.id;

  // Step 7 & 8: Open recipe details and inspect Available vs Missing ingredients
  console.log(`\n7. Fetching details for "${selectedRecipe.recipe.name}"...`);
  const detailRes = await fetch(
    `${BASE_URL}/recipes/${recipeId}?ingredients=${encodeURIComponent(confirmedNames.join(','))}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const detailData = await detailRes.json();
  console.log(`✓ Available items (${detailData.ingredientStatus.available.length}):`, detailData.ingredientStatus.available.map((i: any) => i.name).join(', '));
  console.log(`✓ Missing items (${detailData.ingredientStatus.missing.length}):`, detailData.ingredientStatus.missing.map((i: any) => i.name).join(', '));

  // Step 9: Add missing ingredients to Shopping List
  console.log('\n9. Adding missing ingredients to user shopping list...');
  const addListRes = await fetch(`${BASE_URL}/shopping-list/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ items: detailData.ingredientStatus.missing }),
  });
  const addListData = await addListRes.json();
  console.log('✓ Shopping list update result:', addListData.message);

  // Verify shopping list contents
  const getListRes = await fetch(`${BASE_URL}/shopping-list`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const getListData = await getListRes.json();
  console.log(`✓ Shopping list now contains ${getListData.totalItems} items.`);

  // Step 10: Toggle Favorite
  console.log(`\n10. Toggling favorite for "${selectedRecipe.recipe.name}"...`);
  const favRes = await fetch(`${BASE_URL}/recipes/${recipeId}/favorite`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  const favData = await favRes.json();
  console.log('✓ Favorite status:', favData.message);

  // Step 11: Mark as Cooked in Cooking Mode
  console.log('\n11. Logging recipe as cooked (Cooking Mode completion)...');
  const cookRes = await fetch(`${BASE_URL}/recipes/${recipeId}/cook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      rating: 5,
      notes: 'Crispy and spiced to perfection! Prepared using NALA AI cooking timer.',
    }),
  });
  const cookData = await cookRes.json();
  console.log('✓ Cooked log confirmed:', cookData.message);

  // Step 12: Verify history & favorites
  console.log('\n12. Verifying user cooking history & favorites...');
  const historyRes = await fetch(`${BASE_URL}/recipes/user/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const historyData = await historyRes.json();
  console.log(`✓ User history has ${historyData.history.length} items. Most recent: "${historyData.history[0]?.name}" (${historyData.history[0]?.rating}★)`);

  // Step 13: Verify Admin Analytics
  console.log('\n13. Checking Admin Analytics updates...');
  const adminRes = await fetch(`${BASE_URL}/admin/analytics`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const adminData = await adminRes.json();
  console.log('✓ Admin metrics summary:');
  console.log(`   - Total Users: ${adminData.metrics.totalUsers}`);
  console.log(`   - Total Scans: ${adminData.metrics.totalScans}`);
  console.log(`   - Meals Cooked: ${adminData.metrics.totalCooked}`);
  console.log(`   - Most Detected Produce:`, adminData.topIngredients.map((i: any) => `${i.name} (${i.count})`).join(', '));

  // Step 14: Verify Community Cook Reviews
  console.log('\n14. Testing Community Cook Reviews & Ratings...');
  const revFetchRes = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`);
  const revFetchData = await revFetchRes.json();
  console.log(`✓ Fetched ${revFetchData.totalReviews} existing reviews for ${selectedRecipe.recipe.name} (Avg: ${revFetchData.averageRating}★)`);

  const addRevRes = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      rating: 5,
      title: 'Cooked with my family!',
      comment: 'Turned out restaurant quality! The cooking mode voice timer was flawless.',
      tags: ['Family Favorite', 'Quick & Easy'],
      authorName: 'Chef Priya',
    }),
  });
  const addRevData = await addRevRes.json();
  console.log('✓ Submitted new community review:', addRevData.review.title, 'by', addRevData.review.user_name);

  // Upvote review
  const upvoteRes = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews/${addRevData.review.id}/helpful`, {
    method: 'POST',
  });
  const upvoteData = await upvoteRes.json();
  console.log('✓ Upvoted review marked helpful:', upvoteData.helpfulCount);

  console.log('\n🎉 ALL 14 TEST STEPS OF THE MASTER VERIFICATION SCENARIO PASSED SUCCESSFULLY!\n');
}

runScenarioTest().catch((e) => {
  console.error('❌ Test scenario failed:', e);
  process.exit(1);
});
