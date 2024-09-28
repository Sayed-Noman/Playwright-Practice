import { test, expect } from '@playwright/test'

test('Handle Checkbox', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')

    // Handle Single Checkbox
    const newsletter = page.locator('id=Newsletter')
    await expect(newsletter).toBeChecked()
    expect(await newsletter.isChecked()).toBeTruthy()

    await newsletter.uncheck()
    expect(await newsletter.isChecked()).toBeFalsy()

    await page.waitForTimeout(3000)

})