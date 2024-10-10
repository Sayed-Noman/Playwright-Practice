import { test, expect } from "@playwright/test"

test('Handle Date Pickers', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // 1) Locate Date Pickers & Fill
    const datepicker = page.locator('#datepicker')
    await datepicker.fill('10/11/2024')

    // 2) Locate Date Pickers & Click 
    const date = "10"
    const month = 'December' // Target month
    const year = "2025"   // Target year

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        console.log(`Current Year: ${currentYear}, Current Month: ${currentMonth}`)

        if (currentYear === year && currentMonth === month) break;

        const currentMonthIndex = monthNames.indexOf(currentMonth)
        const targetMonthIndex = monthNames.indexOf(month)

        if (parseInt(year) > parseInt(currentYear) || (year === currentYear && targetMonthIndex > currentMonthIndex)) {
            // Navigate to future dates
            console.log("Navigating to next month.")
            await page.locator('[title="Next"]').click();
        } else if (parseInt(year) < parseInt(currentYear) || (year === currentYear && targetMonthIndex < currentMonthIndex)) {
            // Navigate to past dates
            console.log("Navigating to previous month.")
            await page.locator('[title="Prev"]').click()
        }
        // Optionally wait for the date picker to update
        await page.waitForTimeout(1000);
    }

    const dates = await page.$$('.ui-state-default')

    //Select Date using looping statement
    for (const dt of dates) {
        if (await dt.textContent() == date) {
            console.log("Selected Date: ", await dt.textContent())
            await dt.click()
            break
        }
    }

    // Select date using X-Path
    //await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(8000)
})