import { test, expect } from '@playwright/test'

test.skip('Handle Mouse Hover Action', async ({ page }) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo')

    // 1) Locate Dropdowns/Elements & Hover on it
    const resourcesDropdown = page.locator('li.dropdown a[data-toggle="dropdown"]')
    await resourcesDropdown.hover()
    await resourcesDropdown.click()

    // 2) Loop through each item and Hover on it
    const dropdownItems = page.locator('.dropdown-menu li a')
    const itemsCount = await dropdownItems.count()

    for (let i = 0; i < itemsCount; i++) {
        const item = dropdownItems.nth(i)
        await item.hover()
        await page.waitForTimeout(1000)
    }
})

test.skip('Handle Context Click Action', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    // 1) Locate Button & Perform DB Click
    const contextBtn = page.locator('.context-menu-one.btn.btn-neutral')
    await contextBtn.click({ button: 'right' })

    const contextMenus = page.locator('.context-menu-list .context-menu-item')
    const menuCount = await contextMenus.count()

    for (let i = 0; i < menuCount; i++) {
        const item = contextMenus.nth(i)
        await item.hover()
        await page.waitForTimeout(1000)
    }
})

test.skip('Handle Mouse Double Click Option', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // 1) Locate Element and Peroform Double Click
    const doubleClickBtn = page.locator("button[ondblclick='myFunction1()']")
    await doubleClickBtn.dblclick()

    const field1 = page.locator('#field1')
    const field1Text = await field1.textContent()

    const field2 = page.locator('#field2')
    await expect(field2).toHaveText(field1Text)

    await page.waitForTimeout(2000)

})

test('Handle Mouse Drag & Drop Action', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-nodes-quiz/drag-drop-nodes-quiz-demo2.html')

    // 1) Locate Source Element
    const london = page.locator('#node3')
    const oslo = page.locator('#node1')

    // 2) Locate Target Element
    const unitedKingdom = page.locator("#box3")
    const norway = page.locator("#box2")


    // Ensure both elements are visible
    await london.waitFor({ state: 'visible' })
    await unitedKingdom.waitFor({ state: 'visible' })
    await oslo.waitFor({ state: 'visible' })
    await norway.waitFor({ state: 'visible' })

    // 3) Way-1 Drag & Drop
    await london.hover()
    await page.waitForTimeout(1000)
    await page.mouse.down()
    await page.waitForTimeout(1000)
    await unitedKingdom.hover()
    await page.waitForTimeout(1000)
    await page.mouse.up()
    await page.waitForTimeout(1000)

    // Way-2 Drag to
    // Drag and Drop for Oslo to Norway
    await oslo.dragTo(norway);
    await page.waitForTimeout(3000); // Optional wait
})