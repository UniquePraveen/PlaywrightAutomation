import { test, expect } from "@playwright/test";

test("DoubleClick", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.dblclick("button[ondblclick='myFunction1()']");

  const text = await page.locator("#field2")

  expect(text).toHaveValue("Hello World!");

  await page.waitForTimeout(3000);
});
