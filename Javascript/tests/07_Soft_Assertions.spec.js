import { test, expect } from '@playwright/test'

test('Soft Assertions', async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register")

  // Soft Assertion - toHaveURL()  
  await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')

  // Soft Assertion - toHaveTitle()
  await expect.soft(page).toHaveTitle(/nopCommerce demo store/)

  // Soft Assertion - toBeVisible()
  const logoElement = page.locator('.header-logo')
  await expect.soft(logoElement).toBeVisible()

  // Soft Assertion - toBeEnabled()
  const searchBox = page.locator('id=small-searchterms')
  await expect.soft(searchBox).toBeEnabled()

  // Soft Assertion - toBeChecked()  - Radio/Checbox
  const genderRadioBtn = page.locator('id=gender-male')
  await genderRadioBtn.click()
  await expect.soft(genderRadioBtn).toBeChecked()

  const newsletterCheckbox = page.locator('id=Newsletter')
  await expect.soft(newsletterCheckbox).toBeChecked()

  // Soft Assertion - toHaveAttribute() 
  const registerBtn = page.locator('id=register-button')
  await expect.soft(registerBtn).toHaveAttribute('type', 'submit')

  // Soft Assertion - toHaveText()
  const registerPageTitle = page.locator('.page-title h1')
  await expect.soft(registerPageTitle).toHaveText('Registers') // Simulation Soft Assertion Error

  // Soft Assertion - toContainText()
  const registerBoxTitle = page.getByText(/Your Personal Details/)
  await expect.soft(registerBoxTitle).toContainText(/Personal/)

  // Soft Assertion - toHaveValue()
  const emaiInput = page.locator('id=Email')
  await emaiInput.fill("test-email@email.com")
  await expect.soft(emaiInput).toHaveValue('test-email@email.com')

  // Soft Assertion - toHaveCount()
  const dayOptions = page.locator('select[name=DateOfBirthDay] option')
  await expect.soft(dayOptions).toHaveCount(32)

})