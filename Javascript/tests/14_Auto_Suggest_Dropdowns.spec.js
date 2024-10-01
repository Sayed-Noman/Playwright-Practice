import {test,expect} from '@playwright/test'

test('Handle Auto Suggest Dropdown', async ({page})=>{
    await page.goto('https://www.redbus.in/')

    // Select Dropdown when Select option is not used
    await page.fill('#src', 'Kolkata')
    await page.waitForSelector('//div//ul//li//div//text[1]')

    const fromCityOptions = await page.$$('//div//ul//li//div//text[1]')
    for(const option of fromCityOptions){
        const city = await option.textContent()
        if(city.includes('Khidirpur')){
            await option.click()
            break
        }
    }

    // Select Dropdown when Select option is not used
    await page.fill('#dest', 'Airport')
    await page.waitForSelector('//div//ul//li//div//text[1]')

    const toCityOptions =  page.locator('ul.sc-dnqmqq li')
    const count = await toCityOptions.count()

    for(let i=0; i<count;i++){
        const mainText = await toCityOptions.nth(i).locator('.placeHolderMainText').innerText()
        const subText = await toCityOptions.nth(i).locator('.placeholderSubText').innerText()

        if(mainText == 'Airport' && subText == 'Kolkata'){
            await toCityOptions.nth(i).click()
            break
        }
    }

    // Select Calender Picker
    await page.locator('#onwardCal').click();
    await page.waitForSelector('.DatePicker__CalendarContainer-sc-1kf43k8-0', { state: 'visible' });
    await page.waitForTimeout(300)

    // Locate the month navigator buttons (assuming the left button is for previous month)
    const prevMonthButton = page.locator('.DayNavigator__IconBlock-qj8jdz-2').nth(0); // Adjust this if necessary
    const nextMonthButton = page.locator('.DayNavigator__IconBlock-qj8jdz-2').nth(2); // Adjust this if necessary

    // Click the next month button as needed 
    for (let i = 0; i < 2; i++) { // Adjust the number of clicks based on the current month
        await nextMonthButton.click();
        await page.waitForTimeout(500); // Wait for the calendar to update
    }

    // Wait for Month to be visible
    await page.waitForSelector('.DayTiles__CalendarDaysSpan-sc-1xum02u-1:has-text("1")', { state: 'visible' });
    // Select the desired date (e.g., 15)
    const dateToSelect = '15';
    const dateLocator = `.DayTiles__CalendarDaysSpan-sc-1xum02u-1:has-text("${dateToSelect}")`;

    // Ensure the date element is in view and click it
    const dateElement = page.locator(dateLocator);
    
    // Optional: Scroll the date element into view
    await dateElement.scrollIntoViewIfNeeded();

    // Check if the date element is visible before clicking
    if (await dateElement.isVisible()) {
        await dateElement.click();
        console.log('Date clicked successfully!');
    } else {
        console.log('Date element is not visible or interactable.');
    }

    // Click on Search Button
    await page.click('#search_button')
    
    await page.waitForTimeout(6000)

})