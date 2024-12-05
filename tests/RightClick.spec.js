import { test, expect } from "@playwright/test";

test("RightClick", async ({ page }) => {
  await page.goto("https://www.imdb.com/");
  await page.click("#home_img_holder", { button: "right" });
});
