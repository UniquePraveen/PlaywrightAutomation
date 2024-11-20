import {test, expect} from '@playwright/test'

test('InputBox', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const input = await page.locator('//*[@id="name"]')

    await expect(input).toBeVisible()
    await expect(input).toBeEditable()
    await expect(input).toBeEmpty()
    await expect(input).toBeEnabled()

    await page.fill('//*[@id="name"]','Praveen')

    await page.waitForTimeout(5000)

    await page.close()








})