// Import Statement
import { test, expect } from '@playwright/test'

test('Locator Property/CSS/XPath', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')

    // Locator --- Property Selector
    // Click on Login Button from Navbar
    //await page.locator('id=login2').click()
    await page.click('id=login2') 

    // Locator -- CSS Selector
    //Provide user name
    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol') 
    //await page.type('#loginusername', 'pavanol')

    //Provide user passowrd
    //await page.locator("input[id='loginpassword']").fill('test@123')
    await page.fill("input[id='loginpassword']", 'test@123')
    //await page.type("input[id='loginpassword']", 'test@123')

    // Locator --- XPath Selector
    // Click on login Button
    await page.click("//button[normalize-space()='Log in']")

    // Verify Logout Button & Welcome Text is Present
    const logoutLink =  page.locator("//a[@id='logout2']")
    const welcomeTextLink =  page.locator('id=nameofuser')
    await welcomeTextLink.waitFor({ state: 'visible' })
    console.log(`Logout Link Text: ${await logoutLink.textContent()}`)
    console.log(`Welcome Text: ${await welcomeTextLink.textContent()}`)

    await expect(logoutLink).toBeVisible()
    await expect(welcomeTextLink).toHaveText(/Welcome/)

    console.log()

})