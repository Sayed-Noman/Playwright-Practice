import {test, expect} from '@playwright/test'

test('Trace Viewer', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/')
    // Login
    await page.click('#login2')
    await page.fill('#loginusername', 'pavanol')
    await page.fill('#loginpassword', 'test@123')
    await page.getByRole('button', {name: 'Log in'}).click()
    await expect(page.locator('#logout')).toBeVisible()

    await page.waitForTimeout(3000)
})

/* Need to configure trace: On/Retain on Failure to Record Trace */
/* Command to Open Trace from CI: npx playwright show-trace filepath/filenmae.zip */