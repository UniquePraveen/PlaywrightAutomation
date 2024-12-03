import { test, expect } from "@playwright/test";

test("Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");
  const columns = await table.locator("thead tr th");

  expect(await columns.count()).toBe(4);

  console.log("Number of Columns: " + (await columns.count()));

  const rows = await table.locator("tbody tr");

  expect(await rows.count()).toBe(5);

  console.log("Number of Rows: " + (await rows.count()));

  await Selector(rows, page, "Smartwatch");
  await Selector(rows, page, "Smartphone");
  await Selector(rows, page, "Wireless Earbuds");

  const pages = await page.locator("#pagination li a");

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await columns.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
  }

  await page.waitForTimeout(3000);
});

async function Selector(rows, page, name) {
  const row = await rows.filter({
    has: page.locator("td"),
    hasText: name,
  });

  await row.locator("input").check();
}
