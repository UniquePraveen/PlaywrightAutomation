import { test, expect } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.screenshot({
    path: "tests/Screenshots/" + Date.now() + "Pic2.png",
  });
});

test.only("FullPageScreenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.screenshot({
    path: "tests/Screenshots/" + Date.now() + "Pic1.png",
    fullPage: true,
  });
});

test.only("Specific Element", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page
    .locator(
      "//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]"
    )
    .screenshot({ path: "tests/Screenshots/" + Date.now() + "Pic3.jpeg" });
});
