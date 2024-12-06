import { test, expect } from "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await page.goto("https://www.demoblaze.com/");
  await page.locator("#login2").click();
  await page.fill("#loginusername", "pavanol");
  await page.fill("#loginpassword", "test@123");
  await page.click("button[onclick='logIn()']");
});

test.afterAll(async ({}) => {
  await page.click("#logout2");
});

test("Homapage", async ({}) => {
  await page.click("//a[4]");
  await page.click("//a[normalize-space()='Apple monitor 24']");
  await page.click("//li[@class='nav-item active']//a[@class='nav-link']")
});

test("Hooks", async ({}) => {
  await page.click("//a[normalize-space()='Samsung galaxy s6']");
  await page.click("//a[normalize-space()='Add to cart']");

  page.on("Dialog", async (dialog) => {
    await dialog.accept();
  });
});
