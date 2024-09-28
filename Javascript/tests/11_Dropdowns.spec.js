import { test, expect } from '@playwright/test'
import { stat } from 'fs'

test('Handle Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const country = page.locator('id=country')

    // Multiple Ways to Select Dropdowns

    await country.selectOption({ label: 'France' }) // By label
    //await country.selectOption('France') // By visible text
    //await country.selectOption({value: 'france'}) // By option value
    //await country.selectOption({index: 4}) // By option index

    //await page.selectOption('id=country', 'France') // By visible text
    //await page.selectOption('id=country', {label: 'France'})  // By label
    //await page.selectOption('id=country', {value: 'france'}) // By opton value
    //await page.selectOption('id=country', {index: 4}) // By option index

    // Assertions on Dropdowns

    // 1) Total No of Option in dropdowns
    const countryOptions = page.locator('#country option')
    await expect(countryOptions).toHaveCount(10)

    const options = await page.$$('#country option')
    console.log(`Number of Options: ${options.length}`)
    expect(options.length).toBe(10)

    // 2) Presence of Option in dropdowns
    const content = await page.locator('#country').textContent()
    expect(content.includes('France')).toBeTruthy()

    let status = false
    for (const option of options) {
        const value = await option.textContent()
        status = value.includes('France') ? true : false
        if (status) break
    }
    expect(status).toBeTruthy()

    // Select Option from looping statement
    for (const option of options) {
        const value = await option.textContent()
        if (value.includes('Germany')) {
            await page.selectOption('#country', value)
            break
        }
    }

    await page.waitForTimeout(5000)
})