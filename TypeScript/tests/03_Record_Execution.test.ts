import { expect, Browser, Page, Locator } from '@playwright/test'
import { chromium } from 'playwright'

describe('Save Execution Video Suite', () => {
    test('Record Execution Test', async () => {
        // Step 1 : Launch a new Browser
        const browser: Browser = await chromium.launch({ headless: false });
        // Step 2: Create a browser context with video recording enabled
        const context = await browser.newContext({
            recordVideo: {
                dir: './videos/',  // Directory to save the recorded video
                size: { width: 1280, height: 720 }  // Optional: Specify video resolution
            }
        });
        // Step 3 : Open a new Page
        const page: Page = await context.newPage();

        // Go to an Url
        await page.goto('https://letcode.in/');
        const title = await page.title();
        console.log(`Page Title: ${title}`);

        // Jest assertions
        await expect(page).toHaveTitle(/LetCode/);  // Adjusted for Jest
        expect(title).toContain("LetCode");  // Adjusted for Jest

        //Sign Locator & Action
        await page.getByRole('link', { name: 'Sign up' }).click();
        await page.getByPlaceholder('Enter your name').click();
        await page.getByPlaceholder('Enter your name').fill('Test User');
        await page.getByPlaceholder('Enter valid email address').click();
        await page.getByPlaceholder('Enter valid email address').fill('testEmail01@gmail.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test123');
        await page.getByLabel('I agree to the terms and').check();
        await page.getByRole('button', { name: 'SIGN UP' }).click();
        await page.getByRole('link', { name: 'Sign out' }).click();

        // Step 4: Close the Page
        await page.close();
        // Step 5: Close the Context
        await context.close();
        // Step 6: Close the Browser
        await browser.close();

    });


    xtest('Test Auto Wait for Element', async () => {
        // Step 1 : Launch a new Browser
        const browser: Browser = await chromium.launch({ headless: false });
        // Step 2: Creat a new Contxt
        const context = await browser.newContext();
        // Step 3 : Open a new Page
        const page: Page = await context.newPage();

        // Go to an Url
        await page.goto('https://letcode.in/');
        const title = await page.title();
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
