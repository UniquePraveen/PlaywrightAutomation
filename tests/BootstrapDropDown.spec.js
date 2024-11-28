import { test, expect } from "@playwright/test";

test("BootStrapDropDown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click();

  const options = await page.locator("ul>li label input ");

  await expect(options).toHaveCount(11);

  const optionss = await page.$$("ul>li label input");

  for (const option of optionss) {
    let value = await option.inputValue();

    if (value == "MySQL" || value == "Oracle" || value == "Java") {
      await option.click();
    }
  }

  await page.waitForTimeout(3000);

  await page.close();
});
