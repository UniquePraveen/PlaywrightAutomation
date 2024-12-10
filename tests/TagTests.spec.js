import { test, expect } from "@playwright/test";

test("Test1@sanity", async ({ page }) => {
  console.log("This is test 01");
});

test("Test2@reg", async ({ page }) => {
  console.log("This is test 02");
});

test("Test3@sanity", async ({ page }) => {
  console.log("This is test 03");
});

test("Test4@reg", async ({ page }) => {
  console.log("This is test 04");
});

test("Test5@sanity@reg", async ({ page }) => {
  console.log("This is test 05");
});
