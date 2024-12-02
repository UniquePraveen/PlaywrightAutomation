import { test, expect } from "@playwright/test";

test("InnerFrames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  const childFrames = await frame1.childFrames();

  console.log(childFrames.length);

  await childFrames[0]
    .locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']")
    .check();

  await page.waitForTimeout(3000);
});
