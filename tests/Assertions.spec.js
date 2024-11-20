
import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveTitle('OrangeHRM')

    const logo = await page.locator('.orangehrm-login-logo')

    await expect(logo).toBeVisible()

    const login_button = await page.getByRole('button', { type: 'submit' });

    await expect(login_button).toBeEnabled


    const button = await page.locator('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button')

    await expect(button).toHaveAttribute('type', 'submit')

    await expect(await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/h5')).toHaveText('Login')

    await expect(await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/h5')).toContainText('Log')

    const username = await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input')

    await username.fill('Admin')

    await expect(username).toHaveValue('Admin')

    const password = await page.getByPlaceholder('Password')

    await password.fill('admin123')

    await expect(password).toHaveValue('admin123')

    await login_button.click()

    await page.waitForTimeout(5000)

    const infoButton = await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a');

    infoButton.click()

    const options = await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]');

    await expect(options).toHaveCount(9);











})