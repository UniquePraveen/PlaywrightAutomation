import { test, expect } from "@playwright/test";

test("HiddenTest", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("//input[@placeholder='Username']").fill("Admin");

  await page.locator("//input[@placeholder='Password']").fill("admin123");

  await page.locator("//button[@type='submit']").click();

  await page.waitForTimeout(3000);

  await page
    .locator(
      "//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']"
    )
    .click();

  await page
    .locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]")
    .click();

    await page.waitForTimeout(5000);

  const options = await page.$$("//div[@role='listbox']//span");

  for (const option of options) {
    let value = option.textContent();

    console.log(value);
  }

  await page.waitForTimeout(3000);
});
