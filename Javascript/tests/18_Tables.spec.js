import { test, expect } from '@playwright/test'

test('Handle Tables', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // 1) Locate Table
    const table = page.locator('#productTable')

    // 2) Assertion on Tota No of Rows & Columns
    const columns = table.locator('thead tr th')
    console.log(`Total No of Columns ${await columns.count()}`)

    const rows = table.locator('tbody tr')
    console.log(`Total No of Rows ${await rows.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    // 3) Filter & Select Table Elements
    // Single Product
    const filteredRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })
    await filteredRow.locator('input').check()

    // Multiple product
    const products = ['Smartphone', 'Laptop']
    for (const product of products) {
        await selectProduct(rows, page, product)
    }

    // 4) Print All Product Details
    const headers = []

    for (let i = 0; i < await columns.count(); i++) {
        headers.push(await columns.nth(i).textContent())
    }

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')
        console.log(`Product Row: ${i + 1}`)
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(`${headers[j]} : ${await tds.nth(j).textContent()}`)
        }
    }

    // Print Product Details with Pagination
    const pages = page.locator('.pagination li a')
    console.log(`No of Pages in table: ${await pages.count()}`)

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            console.log(`Entering Page: ${p}`)
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tds = row.locator('td')
            console.log(`Product Row: ${i + 1}`)
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(`${headers[j]} : ${await tds.nth(j).textContent()}`)
            }
        }
    }

    await page.waitForTimeout(3000)
})

async function selectProduct(rows, page, productName) {
    const filteredRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    await filteredRow.locator('input').check()
}