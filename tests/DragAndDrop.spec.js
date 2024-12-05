import { test, expect } from "@playwright/test";

test("DragAndDrop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const drag = await page.locator("#draggable");
  const drop = await page.locator("#droppable");

  await drag.hover();
  await page.mouse.down();

  await drop.hover();
  await page.mouse.up();

  // Way-02

  // await drop.dragTo(drop)

  await page.waitForTimeout(3000);
});
