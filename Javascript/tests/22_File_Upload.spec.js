import {test,expect} from '@playwright/test'

test('Handle Single File Upload', async ({page}) =>{
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')

    // 1) Loctate Upload Button & Upload
    const fileUpload =  page.locator('input[name=upfile]')
    await fileUpload.setInputFiles("uploads/sample_file_1.txt")

    await page.waitForTimeout(3000)   
})

test.only('Handle Multiple File Upload', async ({page}) =>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    // 1) Loctate Upload Button & Upload
    const files = ['uploads/sample_file_2.txt', 'uploads/sample_file_3.txt']
    const fileNames = ['sample_file_2.txt', 'sample_file_3.txt']

    await page.locator('#filesToUpload').setInputFiles(files)

    const selectedFiles = page.locator('#fileList li')
    for(let i =0; i< await selectedFiles.count(); i++){
        const file = selectedFiles.nth(i)
        await expect(file).toHaveText(fileNames[i])
    }
    await page.waitForTimeout(5000)

    // 2) Delete Uploaded Files
    await page.locator('#filesToUpload').setInputFiles([])
    await expect(selectedFiles).toHaveText(/No Files Selected/)
    await page.waitForTimeout(5000)
   
})