import {test, expect} from '@playwright/test'

test('Test 1', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle(/OrangeHRM/)
})

test('Test 2', async ({page}) =>{
    await page.goto('https://www.northsouth.edu/')
    await expect(page).toHaveTitle(/Home | North South University/)
})

test('Test 3', async ({page}) =>{
    await page.goto('https://www.chorki.com/')
    await expect(page).toHaveTitle(/Chorki - Film Fun Foorti/)
})