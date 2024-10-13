import { test, expect, chromium } from '@playwright/test'

test.skip('Handle Windows/Pages Independently', async () => {
    // Step 1: Launch Browser & Create Browser Context
    const browser = await chromium.launch()
    const context = await browser.newContext()

    // Step 2: Create Pages/Windows on Browser Context
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    // Check Active Pages on Browser
    const allPages = context.pages()
    console.log(`No of Pages Active: ${allPages.length}`)

    // Write test on page1
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle(/OrangeHRM/)

    // Write test on page2
    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle(/Human Resources Management Software | OrangeHRM/)

    // Step 3: Close Pages
    await page2.close() // Optional, since closing the context will close this page
    await page1.close() // Optional, since closing the context will close this page
    await context.close() // Close the context, which will also close all associated pages

})


test('Handle Linked Windows/Pages with 1 page Fixture', async () => {
    // Step 1: Launch Browser & Create Browser Context
    const browser = await chromium.launch()
    const context = await browser.newContext()

    // Step 2: Create Pages/Windows on Browser Context
    const page1 = await context.newPage()

    // Write test on page1
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle(/OrangeHRM/)


    // Step 3: Start Await for a New Page/Window
    const pagePromise = context.waitForEvent('page')

    // Write navigation action to new pages
    const link = page1.locator('a:has-text("OrangeHRM, Inc")')
    await link.click()

    // await the pagePromise
    const page2 = await pagePromise

    // Write Tests on the New Page
    await expect(page2).toHaveTitle(/Human Resources Management Software | OrangeHRM/)

    // Check Active Pages on Browser
    const allPages = context.pages()
    console.log(`No of Pages Active: ${allPages.length}`)

    // Step 4: Close Pages
    await page2.close() // Optional, since closing the context will close this page
    await page1.close() // Optional, since closing the context will close this page
    await context.close() // Close the context, which will also close all associated pages

})