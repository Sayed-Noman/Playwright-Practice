import {test, expect} from '@playwright/test'

test('Test Record', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/')
    // Login
    await page.click('#login2')
    await page.fill('#loginusername', 'pavanol')
    await page.fill('#loginpassword', 'test@123')
    await page.click("button[onclick='logIn()']")

    await page.waitForTimeout(3000)
})

/* Need to configure video: On/Retain on Failure to Record Video */