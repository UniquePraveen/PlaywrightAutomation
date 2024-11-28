import { test, expect } from "@playwright/test";

test("MultiSelectDropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.selectOption(
    '//*[@id="post-body-1307673142697428135"]/div[6]/label',
    ["Red", "Blue", "Green"]
  );

  const options = await page.locator("#colors option");

  await expect(options).toHaveCount(7);

  const optionss = await page.$$("#colors option");

  await expect(optionss.length).toBe(7);

  for (const option of optionss) {
    let value = await option.textContent();

    if (value.includes("Green")) {
      console.log("I'm here!");
    }

    console.log(value);
  }
  await page.waitForTimeout(3000);
});
