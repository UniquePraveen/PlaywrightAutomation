import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("This is beforeAll");
});
test.afterAll(async () => {
  console.log("This is afterAll");
});

test.beforeEach(async () => {
  console.log("This is beforeEach");
});

test.afterEach(async () => {
  console.log("This is AfterEach");
});

test.describe("Group 01", () => {
  test("Test 01", async ({ page }) => {
    console.log("This is test 1");
  });

  test("Test 02", async ({ page }) => {
    console.log("This is test 2");
  });
});

test.describe("Group 02", () => {
  test("Test 03", async ({ page }) => {
    console.log("This is test 3");
  });

  test("Test 04", async ({ page }) => {
    console.log("This is test 4");
  });
});
