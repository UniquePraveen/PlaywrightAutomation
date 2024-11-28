import { test, expect } from "@playwright/test";

test("AutosuggestDropDown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("#src").fill("Chennai");

  await page.waitForSelector(
    '//*[@id="autoSuggestContainer"]/div/div/div[1]/div/div[1]/ul/li/div/text[1]'
  );

  const cities = await page.$$(
    '//*[@id="autoSuggestContainer"]/div/div/div[1]/div/div[1]/ul/li/div/text[1]'
  );

  for (const city of cities) {
    let value = await city.textContent();

    console.log(value)

   if (value.includes('Egmore')) {
      await city.click()
      break;
    }
  } 

  await page.waitForTimeout(3000);
})
