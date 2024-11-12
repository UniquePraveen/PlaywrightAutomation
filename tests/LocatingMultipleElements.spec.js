
import { test, expect } from '@playwright/test'

test('LocatingMultipleWebElements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')

    /* const WebLinks = await page.$$('//a')


    for (const link of WebLinks) {

        const WebLinkText = await link.textContent()

        console.log(WebLinkText)
    }
   */

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for (const product of products) {


        const productName = await product.textContent();

        console.log(productName)
    }


})

