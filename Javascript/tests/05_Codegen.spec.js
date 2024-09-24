import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.locator('span').filter({ hasText: 'FirstNameTest LastNameTest' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.close()
});

/* Codegen Commands */ 
// npx playwright codegen -o test\05_Codegen.spec.js -b chromium 