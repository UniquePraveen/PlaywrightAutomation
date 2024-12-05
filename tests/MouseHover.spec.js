import { test, expect } from "playwright/test";

test("MouseHover", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.hover("//button[normalize-space()='Point Me']");
  await page.hover("//a[normalize-space()='Laptops']");

  await page.waitForTimeout(5000);
});
