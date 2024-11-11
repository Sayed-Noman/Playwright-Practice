import { expect, Browser, Page } from '@playwright/test'
import { chromium } from 'playwright'

describe('Launch a Browser Suite', () => {
    test('Test Launch a Browser', async () => {
        // Step 1 : Launch a new Browser
        const browser: Browser = await chromium.launch({ headless: false });
        // Step 2: Creat a new Contxt
        const context = await browser.newContext();
        // Step 3 : Open a new Page
        const page: Page = await context.newPage();

                // Go to an Url
        await page.goto('https://www.northsouth.edu/');
        const title = await page.title();
        console.log(`Page Title: ${title}`);

        // Jest assertions
        await expect(page).toHaveTitle(/North South University/);  // Adjusted for Jest
        expect(title).toContain("North South University");  // Adjusted for Jest
        await page.waitForTimeout(3000);

        // Step 4: Close the Page
        await page.close();
        // Step 5: Close the Context
        await context.close();
        // Step 6: Close the Browser
        await browser.close();
    });

})
