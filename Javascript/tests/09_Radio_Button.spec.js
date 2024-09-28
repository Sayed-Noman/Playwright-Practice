import { test, expect } from '@playwright/test'

test('Handle Radio Button', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')

    const genderInputs = page.locator(".gender input")

    // List All Gender Inputs
    const genderMap = new Map()
    const count = await genderInputs.count()
    for (let i = 0; i < count; i++) {
        const input = genderInputs.nth(i)

        const locator = await input.getAttribute('id')
        const value = await input.getAttribute('value')

        genderMap.set(value, locator)

        console.log(`Gender input : ${input}`)
        console.log(`Gender input locator: ${locator}`)
        console.log(`Gender input value: ${value}`)
    }

    const maleID = genderMap.get('M')
    const male = page.locator(`#${maleID}`)

    console.log(`Male ID: ${maleID}`);

    // Assertion isChecked() toBeFalsy() - to Check Radio Button Uncheked
    expect(await male.isChecked()).toBeFalsy()

    await male.check()
    // Assertion isChecked() toBeTruthy() - to Check Radio Button Checked
    expect(await male.isChecked()).toBeTruthy()
    expect(male).toBeChecked()

    const femaleId = genderMap.get('F')
    const female = page.locator(`#${femaleId}`)
    expect(await female.isChecked()).toBeFalsy()
})