import {test, expect} from '@playwright/test'

test('Test 1', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle(/Weong Title/)
})

test('Test 2', async ({page}) =>{
    await page.goto('https://www.northsouth.edu/')
    await expect(page).toHaveTitle(/Home | North South University/)
})

test('Test 3', async ({page}) =>{
    await page.goto('https://www.chorki.com/')
    await expect(page).toHaveTitle(/Chorki - Film Fun Foorti/)
})


// Generate Allure report
// allure generate allure-results --clean -o allure-report

// Open Allure report in the browser
// allure open allure-report

// Optional: Clean previous allure results before running tests
// rm -rf allure-results