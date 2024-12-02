import { test, expect } from "@playwright/test";

test("Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const allframes = await page.frames();

  console.log(allframes.length);

  // By Frame Object

  const frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  await frame1.fill("//*[@id='id1']/div/input", "Praveen");

  // By Frame locator

  const frame2 = await page.frameLocator("frame[src='frame_2.html']").locator("//input[@name='mytext2']");

  await frame2.fill("Kumar");

  await page.waitForTimeout(3000);
});
