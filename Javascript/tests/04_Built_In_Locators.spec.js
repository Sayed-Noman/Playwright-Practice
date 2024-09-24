import {test, expect} from '@playwright/test'

test('Built-In Locators', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Locator - getByAltText() - used for images
    const logo = page.getByAltText(/company-branding/)
    await expect(logo).toBeVisible()

    // Locator - getByRole() to locate by explicit and implicit accessibility attributes - used for anchor & button tags
    const usernamePlaceHolder = await page.getByPlaceholder(/Username/).fill('Admin')
    const passwordPlaceHolder = await page.getByPlaceholder(/Password/).fill('admin123')

    // Locator - getByRole() - used for anchor or button tags
    await page.getByRole('button', {type:'submit'}).click()

    // Locator - getByText() to locate by text content
    const profileNameText = await page.locator('.oxd-userdropdown-name').textContent()
    console.log(`${profileNameText}, Logged in Succesfully..!`)
    
    const profileName =  page.getByText(profileNameText)
    await expect(profileName).toBeVisible()



    await page.close()
})