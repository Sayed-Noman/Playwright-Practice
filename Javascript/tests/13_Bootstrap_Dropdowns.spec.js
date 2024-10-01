import { test, expect } from '@playwright/test'

test('Handle Bootstrap Dropdowns', async ({ page }) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    // Select Dropdowns when Select tag is not used in dropdown
    const dropdown = page.locator('.multiselect')
    await dropdown.click()

    const optionLables = await page.$$('ul > li a label')
    for (const optionLable of optionLables) {
        //await optionLable.textContent()
        const value = await optionLable.innerText()
        console.log(`Value: ${value}`)
        if (value.includes('Angular') || value.includes('Java')) {
            await optionLable.click()
        }
    }

    // De-Select selected Dropdowns
    for (const optionLable of optionLables) {
        //await optionLable.textContent()
        const value = await optionLable.innerText()
        console.log(`Value: ${value}`)
        if (value.includes('HTML') || value.includes('CSS')) {
            await optionLable.click()
        }
    }

    // Assertion 
    // 1) Check Number of option in dropdown
    const options = page.locator('ul > li a label input')
    await expect(options).toHaveCount(11)

    const dropdownOptions = await page.$$('ul > li a label input')
    console.log(`Number of options: ${dropdownOptions.length}`)
    expect(dropdownOptions.length).toBe(11)

    // 2) Presence of Option in dropdowns
    let status = false
    for (const optionLable of optionLables) {
        const value = await optionLable.textContent()

        status = value.includes('HTML') ? true : false
        if (status) break
    }
    expect(status).toBeTruthy()

    await page.waitForTimeout(3000)
})