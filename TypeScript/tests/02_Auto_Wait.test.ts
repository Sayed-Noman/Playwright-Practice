import { expect, Browser, Page, Locator } from '@playwright/test'
import { chromium } from 'playwright'

describe('Auto Wait Suite', () => {
    test('Test Auto Wait for Element', async () => {
        // Step 1 : Launch a new Browser
        const browser: Browser = await chromium.launch({ headless: false });
        // Step 2: Creat a new Contxt
        const context = await browser.newContext();
        // Step 3 : Open a new Page
        const page: Page = await context.newPage();

        // Go to an Url
        await page.goto('https://letcode.in/');
        const title: string = await page.title();
        console.log(`Page Title: ${title}`);

        // Jest assertions
        await expect(page).toHaveTitle(/LetCode/);  // Adjusted for Jest
        expect(title).toContain("LetCode");  // Adjusted for Jest

        //Login Locatord
        const loginLink: Locator = page.getByText('Log in');
        const email: Locator = page.locator('input[name="email"]');
        const password: Locator = page.locator('input[name="password"]');
        const loginButton: Locator = page.locator('button', { hasText: 'LOGIN' });
        const signOutLink: Locator = page.getByRole('link', { name: 'Sign out' });


        // Login Actions
        await loginLink.click();
        await email.fill('koushik350@gmail.com');
        await password.fill('Pass123$');
        await loginButton.click();
        await signOutLink.click();


        // Step 4: Close the Page
        await page.close();
        // Step 5: Close the Context
        await context.close();
        // Step 6: Close the Browser
        await browser.close();
    });

})
