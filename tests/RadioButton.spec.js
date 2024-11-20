import { test, expect } from '@playwright/test'

test('RadioButton', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator("//label[normalize-space()='Male']")

  // await page.check("//label[normalize-space()='Male']")

  await page.locator("//label[normalize-space()='Male']").check()

  await expect((await page.locator("//label[normalize-space()='Male']")).isChecked).toBeTruthy

  await expect((await page.locator("//label[normalize-space()='Female']")).isChecked).toBeFalsy

  await page.waitForTimeout(5000)

  await page.close()

















})