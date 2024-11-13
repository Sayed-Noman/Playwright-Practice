import {Browser, Page, Locator, FileChooser } from '@playwright/test'
import { chromium } from 'playwright'

describe('File Upload Suite', () => {
    xtest('Sent Input Files Upload Test', async () => {
        // Step 1 : Launch a new Browser
        const browser: Browser = await chromium.launch({ headless: false });
        // Step 2: Create a browser context with video recording enabled
        const context = await browser.newContext();
        // Step 3 : Open a new Page
        const page: Page = await context.newPage();

        // Go to an Url
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
        const title = await page.title();
        console.log(`Page Title: ${title}`);

        // Set File Paths
        const file_1: string = 'data/file_1.txt';
        const file_2: string = 'data/file_2.txt';

        //Upload Files
        const uploadButton = page.locator('#filesToUpload');
        await uploadButton.setInputFiles([file_1, file_2])

        // Delete 1 File
        await uploadButton.setInputFiles([file_1])

        await page.waitForTimeout(5000)

        // Step 4: Close the Page
        await page.close();
        // Step 5: Close the Context
        await context.close();
        // Step 6: Close the Browser
        await browser.close();

    });


    test('Test Files Upload using On', async () => {
        // Step 1 : Launch a new Browser
        const browser: Browser = await chromium.launch({ headless: false });
        // Step 2: Create a browser context with video recording enabled
        const context = await browser.newContext();
        // Step 3 : Open a new Page
        const page: Page = await context.newPage();

        // Go to an Url
        await page.goto('https://the-internet.herokuapp.com/upload');
        const title = await page.title();
        console.log(`Page Title: ${title}`);

        // Set File Paths
        const file_1: string = 'data/file_1.txt';
        const file_2: string = 'data/file_2.txt';

        //Upload Files
        page.on('filechooser', async (file: FileChooser) => {
            await file.setFiles([file_1, file_2])
        });
        // Click File upload 
        const fileUploadButton: Locator = page.locator('#drag-drop-upload');
        await fileUploadButton.click({ force: true });

        await page.waitForTimeout(5000)

        // Step 4: Close the Page
        await page.close();
        // Step 5: Close the Context
        await context.close();
        // Step 6: Close the Browser
        await browser.close();

    });

})
