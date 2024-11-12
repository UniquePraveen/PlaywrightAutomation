
import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveTitle('OrangeHRM')

    const logo = await page.locator('.orangehrm-login-logo')

    await expect(logo).toBeVisible()

    const login = await page.getByPlaceholder('Username')

    await expect(login).toBeDisabled




})