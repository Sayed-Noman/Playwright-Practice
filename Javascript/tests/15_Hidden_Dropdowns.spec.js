import {test,expect} from '@playwright/test'

test('Handle Hidden Dropdwons', async({page}) =>{
     
    await page.goto('https://www.flipkart.com/')
   
    // Select Dropdown when Select option is not used
    const searchbox = await page.locator('.Pke_EE').fill('Watch')
    await page.waitForSelector('.YGcVZO')

    const options = await page.$$('.YGcVZO ')

    for(const option of options){
        const value = await option.textContent()
        if(value.includes('watches')){
            option.click()
            break
        }
    }

    await page.waitForTimeout(4000)
})
    

   