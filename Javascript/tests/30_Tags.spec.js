import {test, expect} from '@playwright/test'

test('Test 1 @sanity', async ({page}) =>{
    console.log(`This Test 1 is Part of Sanity Testing`)
})

test('Test 2 @sanity', async ({page}) =>{
    console.log(`This Test 2 is Part of Sanity Testing`)
})

test('Test 3 @regression', async ({page}) =>{
    console.log(`This Test  3 is Part of Regression Testing`)
})

test('Test 4 @regression', async ({page}) =>{
    console.log(`This Test  4 is Part of Regression Testing`)
})

test('Test 5 @sanity @regression', async ({page}) =>{
    console.log(`This Test  5 is Part of Both Sanity & Regression Testing`)
})

test('Test 6  @regression @sanity', async ({page}) =>{
    console.log(`This Test 6 is Part of Both Sanity & Regression Testing`)
})

test('Test 7 @E2E', async ({page}) =>{
    console.log(`This Test 7 is Part of E2E Testing`)
})


/*
1. Only Run Sanity Tests:  npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@sanity" 
2. Only Run Regression Tests: npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@regression"
3. Only Run Both Sanity & Regression Tests: npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@sanity .*@regression|@regression .*@sanity"
4. Run All Tests : npx playwright test 30_Tags.spec.js --project chromium --headed
5. Only Run either Sanity or Regression Tests: npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@sanity | @regression"
6. Only Run Sanity Excluding Regression Tests: npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@sanity" --grep-invert "@regression"
7. Only Run Regression Excluding Sanity Tests: npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@regression" --grep-invert "@sanity"
8. Run tests tagged with both @sanity and @regression (using --grep-invert):  npx playwright test 30_Tags.spec.js --project chromium --headed --grep "@sanity .*@regression | @regression .*@sanity" --grep-invert "@sanity" --grep-invert "@regression"
9. Run tests that are not tagged with @sanity: npx playwright test 30_Tags.spec.js --project chromium --headed --grep-invert "@sanity"
10. Run tests that are not tagged with @regression: npx playwright test 30_Tags.spec.js --project chromium --headed --grep-invert "@regression"
11. Run tests that are neither tagged with @sanity nor @regression: npx playwright test 30_Tags.spec.js --project chromium --headed --grep-invert "@sanity" --grep-invert "@regression"
*/
