import { test, expect } from '@playwright/test'

// This test will be skipped
test.skip('This test is skipped', async ({ page }) => {
  await page.goto('https://example.com')
  const title = await page.title()
  expect(title).toBe('Example Domain')
})

// This test is expected to fail
test.fail('This test is expected to fail', async ({ page }) => {
  await page.goto('https://example.com')
  const title = await page.title()
  expect(title).toBe('Wrong Title') // This assertion will fail
})

// This test is marked as a known issue
test.fixme('This test is a known issue and needs fixing', async ({ page }) => {
  await page.goto('https://example.com')
  const element = await page.$('h1') // Assume this selector has an issue
  expect(await element.textContent()).toBe('Example Domain'); // This may not work as expected
})

// This test is marked as only
test.only('This test is expected to run only', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
})