import { test, expect } from "@playwright/test";

test("datePicker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.click("#datepicker");

  const month = "April";
  const date = 20;
  const year = 2025;

  while (true) {
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();

    if (month == currentMonth && year == currentYear) {
      break;
    }

    await page.locator(".ui-icon.ui-icon-circle-triangle-e").click();
  }

  const dates = await page.click(`(//td[@data-handler='selectDay'])[${date}]`);

  /* for (const datess of dates) {
    if (await datess.textContent() == date) {

        await datess.click();
        break;
    }
  } */
  await page.waitForTimeout(3000);
});
