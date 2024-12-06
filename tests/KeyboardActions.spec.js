import { table } from "console";
import { test, expect } from "playwright/test";

test("KeyboardActions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-com");
  await page.fill(
    "//textarea[placeholder='Paste one version of the text here.']",
    "Welcome to Automation!"
  );

  await page.keyboard.press("Meta+A");
  await page.keyboard.press("Meta+C");

  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  await page.keyboard.press("Meta+C");

  await page.waitForTimeout(3000)
});
//textarea[@placeholder='Paste one version of the text here.']