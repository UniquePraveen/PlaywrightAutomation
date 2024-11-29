import { test, expect } from "@playwright/test";

test.skip("Alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("alerts", async (dialog) => {
    await dialog.accept();
  });

  await page.locator("//button[@id='alertBtn']").click();

  await page.waitForTimeout(3000);
});

test("Confirmaiton", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("alerts", async (dialog) => {
    await dialog.dismiss();
  });

  await page.locator("//button[@id='confirmBtn']").click();

  await page.waitForTimeout(3000);
});

test("Prompt", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("alerts", async (dialog) => {
    await dialog.accept('Praveen');
  });

  await page.locator("//button[@id='promptBtn']").click();

  await page.waitForTimeout(3000);
});
