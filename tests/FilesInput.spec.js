import { test, expect } from "playwright/test";

test("Filesupload", async ({ page }) => {
  await page.goto("https://www.diffchecker.com/word-pdf-compare/");
  await page.waitForSelector(
    "//*[@id='page']/div/div/div/div[2]/div/div[1]/div[1]/div"
  );
  await page
    .locator("//*[@id='page']/div/div/div/div[2]/div/div[1]/div[1]/div")
    .click();
  await page
    .locator("//*[@id='page']/div/div/div/div[2]/div/div[1]/div[1]/div")
    .setInputFiles("InputFiles/RenderCV_sb2nov_Theme.pdf");
  await page.waitForTimeout(3000);
});
