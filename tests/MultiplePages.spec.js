import { test, expect, chromium } from "playwright";

test("MultipleWindows", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page = await context.newPage();
  const page1 = await context.newPage();

  


});
