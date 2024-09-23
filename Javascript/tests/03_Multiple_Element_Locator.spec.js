import {test, expect} from '@playwright/test'

test('Multiple Element Locator', async ({page})=>{
    await page.goto('https://www.demoblaze.com/')

    // Capturing All the Links in the Webpage
    const links = await page.$$('a')
    for(const link of links){
        const linkText = await link.textContent()
        console.log(`Link Text: ${linkText}`)
    }

    // Capturing All the Product Name in the Webpage
    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div/h4/a")
    for (const product of products){
        const productText = await product.textContent()
        console.log(`Product Name: ${productText}`)
    }
})