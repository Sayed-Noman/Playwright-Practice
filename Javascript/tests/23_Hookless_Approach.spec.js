import {test, expect} from '@playwright/test'

test('Navigate to Homepage', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/')

    // Login
    await page.click('#login2')
    await page.fill('#loginusername','pavanol')
    await page.fill('#loginpassword','test@123')
    await page.click("button[onclick='logIn()']")

    // Homepage
    const products = await page.$$('.hrefch')
    const length = products.length
    expect(products).toHaveLength(length)

    // Logout
    await page.click('#logout2')

    await page.waitForTimeout(3000)
})

test.only('Add Product to Cart', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/')

    // Login
    await page.click('#login2')
    await page.fill('#loginusername','pavanol')
    await page.fill('#loginpassword','test@123')
    await page.click("button[onclick='logIn()']")

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
    
    // Logout
    await page.click('#logout2')

    await page.waitForTimeout(3000)

})