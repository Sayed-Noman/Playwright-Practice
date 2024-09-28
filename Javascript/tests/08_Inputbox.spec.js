import { test, expect } from '@playwright/test'

test('Handle Inputbox', async ({ page }) => {
    const url = ''
    const redirectionUrl = ''
    const username = 'xx@email'
    const password = 'test'

    await page.goto(url)

    await expect(page).toHaveURL(redirectionUrl)
    await expect(page).toHaveTitle(/Login/)
    const nagadLogo = page.locator('.login_heading img')
    await expect(nagadLogo).toBeVisible()

    //Input Field Handle
    const userNameInput = page.locator('id=username')
    await expect.soft(userNameInput).toBeVisible()
    await expect.soft(userNameInput).toHaveAttribute('placeholder', 'user name')
    await expect.soft(userNameInput).toBeEnabled()
    await expect.soft(userNameInput).toBeEditable()
    await expect.soft(userNameInput).toBeEmpty()
    await page.fill('id=username', username)


    const passwordNameInput = page.locator('id=password')
    await expect.soft(passwordNameInput).toBeVisible()
    await expect.soft(passwordNameInput).toHaveAttribute('placeholder', 'password')
    await expect.soft(passwordNameInput).toBeEnabled()
    await expect.soft(passwordNameInput).toBeEditable()
    await expect.soft(passwordNameInput).toBeEmpty()
    await page.fill('id=password', password)

    await page.click('.sign-in-btn')
    await page.waitForTimeout(10000)

})