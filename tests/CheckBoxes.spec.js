import { test, expect } from "@playwright/test";

test("Checkbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.check("//label[normalize-space()='Sunday']");

  await expect(await page.locator("//label[normalize-space()='Sunday']"))
    .toBeChecked;

  await expect(
    await page.locator("//label[normalize-space()='Sunday']").isChecked
  ).toBeTruthy;

  await expect(
    await page.locator("//label[normalize-space()='Monday']").isChecked
  ).toBeTruthy;

  // Selecting Mulitple ChechBoxes

  const Checkboxlocators = [
    "//label[normalize-space()='Monday']",
    "//label[normalize-space()='Wednesday']",
    "//label[normalize-space()='Thursday']",
    "//label[normalize-space()='Friday']",
  ]

  for (const locator of Checkboxlocators) {
    await page.locator(locator).check();
  }

  // Unselect already selected checkboxes

  for (const locator of Checkboxlocators) {
    if (await page.locator(locator).isChecked) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);

  await page.close();
});
