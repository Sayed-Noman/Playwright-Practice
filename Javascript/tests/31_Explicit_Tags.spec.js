import { test, expect } from '@playwright/test'

test('Test 1', { tag: ['@sanity'] }, async ({ page }) => {
    console.log('This Test 1 is Part of Sanity Testing')
})

test('Test 2', { tag: ['@sanity'] }, async ({ page }) => {
    console.log('This Test 2 is Part of Sanity Testing')
})

test('Test 3', { tag: ['@regression'] }, async ({ page }) => {
    console.log('This Test 3 is Part of Regression Testing')
});

test('Test 4', { tag: ['@regression'] }, async ({ page }) => {
    console.log('This Test 4 is Part of Regression Testing')
})

test('Test 5', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
    console.log('This Test 5 is Part of Both Sanity & Regression Testing')
})

test('Test 6', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
    console.log('This Test 6 is Part of Both Sanity & Regression Testing')
})

test('Test 7', { tag: '@E2E' }, async ({ page }) => {
    console.log('This Test 7 is Part of E2E Testing')
})




/*
1. Run tests tagged with **only @sanity**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep "@sanity"

2. Run tests tagged with **only @regression**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep "@regression"

3. Run tests tagged with **both @sanity and @regression**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep "@sanity .*@regression| @regression .*@sanity"

4. Run tests tagged with **neither @sanity nor @regression**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep-invert "@sanity| @regression"

5. Run tests tagged with **only @E2E**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep "@E2E"

6. Run **all tests** (no filtering):
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed

7. Run tests that are **not tagged with @sanity**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep-invert "@sanity"

8. Run tests that are **not tagged with @regression**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep-invert "@regression"

9. Run tests that are **not tagged with @E2E**:
   npx playwright test 31_Explicit_Tags.spec.js --project chromium --headed --grep-invert "@E2E"
*/
