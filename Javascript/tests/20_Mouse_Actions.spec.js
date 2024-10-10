import {test,expect} from '@playwright/test'

test.skip
('Handle Mouse Hover Action', async({page}) =>{
    await page.goto('https://www.opencart.com/index.php?route=cms/demo')

    // 1) Locate Dropdowns/Elements & Hover on it
    const resourcesDropdown =  page.locator('li.dropdown a[data-toggle="dropdown"]')
    await resourcesDropdown.hover()
    await resourcesDropdown.click()

    // 2) Loop through each item and Hover on it
    const dropdownItems = page.locator('.dropdown-menu li a')
    const itemsCount = await dropdownItems.count()

    for (let i = 0; i<itemsCount; i++){
        const item = dropdownItems.nth(i)
        await item.hover()
        await page.waitForTimeout(1000)
    }
})

test('Handle Context Click Action', async ({page}) =>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    // 1) Locate Button & Perform DB Click
    const contextBtn = page.locator('.context-menu-one.btn.btn-neutral')
    await contextBtn.click({button:'right'})

    const contextMenus = page.locator('.context-menu-list .context-menu-item')
    const menuCount = await contextMenus.count()

    for(let i = 0; i<menuCount; i++){
        const item = contextMenus.nth(i)
        await item.hover()
        await page.waitForTimeout(1000)
    }
})