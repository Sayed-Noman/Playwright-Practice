import {test, expect} from '@playwright/test'

test.skip('Page Screenshot', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Format timestamp
    const screenshotPath = `screenshots/screenshot-${timestamp}.png`; // Create path
    await page.screenshot({path: screenshotPath})
})

test.skip('Full Page Screenshot', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html',  { waitUntil: 'networkidle' })
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Format timestamp
    const screenshotPath = `screenshots/screenshot-${timestamp}.png`; // Create path
    await page.screenshot({path: screenshotPath, fullPage: true})
})

test.only('Element Screenshot', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Format timestamp
    const screenshotPath = `screenshots/screenshot-${timestamp}.png`; // Create path
    
    const productList = page.locator('#tbodyid')
    await productList.screenshot({path: screenshotPath})
    
})