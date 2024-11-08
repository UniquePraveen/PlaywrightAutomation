import { test, expect } from '@playwright/test'


test('LocatorsBuildIn', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const img = await page.getByAltText('company-branding');

    await expect(img).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    const name = await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent();

    console.log(name)

    await expect(await page.getByText(name)).toBeVisible();

    











})
