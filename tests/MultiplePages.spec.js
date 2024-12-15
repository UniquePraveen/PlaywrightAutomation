import path from "path";
import { test, expect, chromium } from "playwright/test";
/*
test("MultipleWindows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page = await context.newPage();
  const page1 = await context.newPage();

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page).toHaveTitle("OrangeHRM");

  await page1.goto("https://www.orangehrm.com/");

  await expect(page1).toHaveTitle(
    "Human Resources Management Software | OrangeHRM"
  );

  await page.waitForTimeout(3000);

  await browser.close();
});

*/

test.only("PageNavigation", async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page).toHaveTitle("OrangeHRM");

  const pagePromise = context.waitForEvent('page');

  await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

  const page1 = await pagePromise;

  expect(page1).toHaveTitle("Human Resources Management Software | OrangeHRM");

  await page.waitForTimeout(3000);

  await page1.waitForTimeout(3000);

  await browser.close();
});
