// Import Statement
const {test, expect} = require('@playwright/test')

test('Nagad Home Page', async ({page})=>{
    // Navigate to Website
    await page.goto('https://www.demoblaze.com/')
    
    const pageTitle = await page.title();
    console.log(`Page Title is: ${pageTitle}`)

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/STORE/)

    const pageUrl = page.url()
    console.log(`Page Url is: ${pageUrl}`)

    // Expect a Url to be same as the provided one
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    
    // Closing the page
    await page.close()
})