import { test, expect } from '@playwright/test'

test('Hard Assertions', async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register")

  // Hard Assertion - toHaveURL()  
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  // hard Assertion - toHaveTitle()
  await expect(page).toHaveTitle(/nopCommerce demo store/)

  // Hard Assertion - toBeVisible()
  const logoElement = page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  // Hard Assertion - toBeEnabled()
  const searchBox = page.locator('id=small-searchterms')
  await expect(searchBox).toBeEnabled()

  // Hard Assertion - toBeChecked()  - Radio/Checbox
  const genderRadioBtn = page.locator('id=gender-male')
  await genderRadioBtn.click()
  await expect(genderRadioBtn).toBeChecked()

  const newsletterCheckbox = page.locator('id=Newsletter')
  await expect(newsletterCheckbox).toBeChecked()

  // Hard Assertion - toHaveAttribute() 
  const registerBtn = page.locator('id=register-button')
  await expect(registerBtn).toHaveAttribute('type', 'submit')

  // Hard Assertion - toHaveText()
  const registerPageTitle = page.locator('.page-title h1')
  await expect(registerPageTitle).toHaveText('Register')

  // Hard Assertion - toContainText()
  const registerBoxTitle = page.getByText(/Your Personal Details/)
  await expect(registerBoxTitle).toContainText(/Personal/)

  // Hard Assertion - toHaveValue()
  const emaiInput = page.locator('id=Email')
  await emaiInput.fill("test-email@email.com")
  await expect(emaiInput).toHaveValue('test-email@email.com')

  // Hard Assertion - toHaveCount()
  const dayOptions = page.locator('select[name=DateOfBirthDay] option')
  await expect(dayOptions).toHaveCount(32)

})
