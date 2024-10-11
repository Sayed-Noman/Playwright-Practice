import { test, expect } from '@playwright/test'

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://www.demoblaze.com/')

    // Login
    await page.click('#login2')
    await page.fill('#loginusername', 'pavanol')
    await page.fill('#loginpassword', 'test@123')
    await page.click("button[onclick='logIn()']")
})



test('Navigate to Homepage', async () => {
    // Homepage
    const products = await page.$$('.hrefch')
    const length = products.length
    expect(products).toHaveLength(length)
})

test('Add Product to Cart', async () => {
    // Add to Cart
    const products = page.locator('.card-title a')
    await products.first().click()

    // Enable Dialog Window Handlder
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    await page.waitForTimeout(2000)
    await page.locator('.btn.btn-success.btn-lg').click()
    await page.waitForTimeout(2000)

})

test.afterEach(async () => {
    // Logout
    await page.click('#logout2')
    await page.waitForTimeout(3000)
    //browser.close()
})