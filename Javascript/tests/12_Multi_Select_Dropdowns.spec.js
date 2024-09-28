import { test, expect } from '@playwright/test'
import exp from 'constants'

test('Handle Muti-Select Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to Multi Select Dropdowns
    const colors = page.locator('#colors')
    await colors.selectOption(['Red', 'Yellow', 'Blue'])
    //await colors.selectOption([{value: 'red'}, { value: 'blue' }, { value: 'yellow' }]);
    //await page.selectOption('#colors', ['Red', 'Blue', 'Yellow'])

    // Assertions
    // 1) Check Number of option in dropdowns
    const colorOptions = page.locator('#colors option')
    await expect(colorOptions).toHaveCount(5)

    const options = await page.$$('#colors option')
    console.log(`Number of Options: ${options.length}`)
    expect(options.length).toBe(5)

    // 2) Presence of Option in dropdowns
    const contents = await page.locator('#colors').textContent()
    expect(contents.includes('Blue')).toBeTruthy()

    let status = false
    for (const option of options) {
        const value = await option.textContent()
        status = value.includes('Blue') ? true : false
        if (status) break
    }
    expect(status).toBeTruthy()

    // Select Option from looping statement
    for (const option of options) {
        const value = await option.textContent()
        if (value.includes('Green')) {
            await page.selectOption('#colors', value)
            break
        }
    }




    await page.waitForTimeout(3000)
})