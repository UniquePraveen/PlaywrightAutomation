import { test, expect } from "@playwright/test";

test.skip("Test1", async ({ page }) => {
  console.log("This is Test 01");
});

test("Test2", async ({ page }) => {
  console.log("This is Test 02");
});

test("Test3", async ({ page }) => {
  console.log("This is Test 03");
});

test("Test4", async ({ page, browserName }) => {
  if (browserName === "firefox") {
    test.fail();
  }
  console.log("This is Test 04");
});

test.skip("Test5", async ({ page }) => {
  console.log("This is Test 05");
});

test.fixme("Test6", async ({ page }) => {
  console.log("This is Test 06");
});

test("Test7", async ({ page }) => {
  test.slow();
  console.log("This is Test 07");
});
