import { test, expect } from "@playwright/test";
import { validateHeaderValue } from "http";

test("dropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator("//select[@id='country']")
    .selectOption({ label: "India" });

  await page
    .locator("//select[@id='country']")
    .selectOption({ value: "japan" });

  await page.locator("//select[@id='country']").selectOption({ index: 8 });

  await page.locator("//select[@id='country']").selectOption("France");

  await page.selectOption("//select[@id='country']", "Germany");

  await page.waitForTimeout(5000);

  const options = await page.locator("#country option");

  await expect(options).toHaveCount(10);

  const optionss = await page.$$("#country option");

  console.log("Number of options: " + optionss.length);

  await expect(optionss.length).toBe(10);

  const text = await page.locator("#country").textContent();

  await expect(text.includes("France")).toBeTruthy();

  // console.log("Text Contains: " + text)

  for (const option of optionss) {
    let value = await option.textContent();
    if (value.includes("Australia")) {
      await page.waitForTimeout(5000);
      await page.selectOption("//select[@id='country']", value);
      break;
    }
    console.log(await option.textContent());
  }

  await page.close();
});
