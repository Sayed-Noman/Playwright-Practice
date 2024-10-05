import { test, expect } from '@playwright/test'

test.skip('Handle Confirmation Alerts Dialougs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable Dialog Window Handlder
    page.on('dialog', async dialog => {

        // Assertions 
        // 1) Alert Type Validations
        expect(dialog.type()).toContain('alert')

        // 2) Verify Alert Message
        expect(dialog.message()).toContain('I am an alert box!')

        // 3) Close Dialog Alert
        await dialog.accept()
    })

    // Click on Alert Button
    const alertButton = page.locator('button[onclick="myFunctionAlert()"]')
    await alertButton.click()

    await page.waitForTimeout(2000)

})

test.skip('Handle Confirmation Box Dialougs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable Dialog Window Handlder
    page.on('dialog', async dialog => {

        // Assertions 
        // 1) Alert Type Validations
        expect(dialog.type()).toContain('confirm')

        // 2) Verify Alert Message
        expect(dialog.message()).toContain('Press a button!')

        // 3) Close Dialog Alert
        await dialog.accept() // Close by using Ok Button
        //await dialog.dismiss() //Close by using Cancel Button
    })

    // Click on Alert Button
    const alertButton = page.locator('button[onclick="myFunctionConfirm()"]')
    await alertButton.click()
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    await page.waitForTimeout(2000)

})

test('Handle Prompt Dialogs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable Dialog Window Handlder
    page.on('dialog', async dialog => {

        // Assertions 
        // 1) Alert Type Validations
        expect(dialog.type()).toContain('prompt')

        // 2) Verify Alert Message
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        // 3) Close Dialog Alert
        await dialog.accept('Sayed') // Close by using Ok Button
        //await dialog.dismiss() //Close by using Cancel Button
    })

    // Click on Alert Button
    const alertButton = page.locator('button[onclick="myFunctionPrompt()"]')
    await alertButton.click()
    await expect(page.locator('#demo')).toHaveText('Hello Sayed! How are you today?')

    await page.waitForTimeout(3000)

})