import { test, expect } from '@playwright/test'

test.skip('Handle Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Total No of Frames inside a Page
    const frames = page.frames()
    console.log(`Total no of Frames: ${frames.length}`)

    // Accessing Frame Element
    // 1) Access using Frame Names/Urls
    const firstFrame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //const firstFrame = page.frame({name: 'frrstFrame'})
    await firstFrame.fill("[name='mytext1']", 'Test Input Frame 1')

    // Access using frame locator
    const inputBox = page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']")
    await inputBox.fill('Test Input Frame 2')  

    await page.waitForTimeout(5000)
})

test('Handle Nested Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Accessing Frame Element
    const thridFrame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await thridFrame.locator("[name='mytext3']").fill('Test Input Frame 2')

    const nestedFrames = thridFrame.childFrames()
   
    const radioBtn = nestedFrames[0].locator('#i5 > div.vd3tt > div')
    await radioBtn.check()

    const checBox = nestedFrames[0].locator('#i19 > div.uHMk6b.fsHoPb')
    checBox.check()

    await page.waitForTimeout(5000)
})