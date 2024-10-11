import {test,expect} from '@playwright/test'

test('Handle Keyboard Actions', async ({page}) =>{
    await page.goto('https://gotranscript.com/text-compare')

    // 1) Locate Elements
    const textArea = page.locator('textarea[name="text1"]');
    await textArea.waitFor({ state: 'visible' });


    // 2) Type Text - Depricated
    await textArea.type('A quick fox jumps over a lazy dog.')
    await page.waitForTimeout(3000)

    // 3) Fill Text
    await textArea.fill('A quick fox filling water jumps over a lazy dog.')
    await page.waitForTimeout(3000)
    await textArea.clear()

    // 3) Type Sequentially
    await textArea.pressSequentially('A quick fox sequentially jumps over a lazy dog.')
    await page.waitForTimeout(3000)

    // 4) Press Ctrl+A & Ctrl+C & 
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    // 5) Tap on TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // Press on Ctrl+V
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000)
    
})