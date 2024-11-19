import { test, expect } from '@playwright/test';


test('SoftAssertion', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')

    /*  //Hard Assertions

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await expect(page).toHaveTitle('STORffE')

    const img = await page.locator('//*[@id="nava"]/img')

    await expect(img).toBeVisible();

    */

    // Soft Assertions

    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');

    await expect.soft(page).toHaveTitle('STORffE')

    const img = await page.locator('//*[@id="nava"]/img')

    await expect.soft(img).toBeVisible();


})