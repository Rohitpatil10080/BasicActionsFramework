const { test, expect } = require('@playwright/test');

test("Dropdown", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown?utm_source=chatgpt.com");

    await page.locator("#dropdown").selectOption("Option 1");

    await expect(page.locator("#dropdown")).toBeTruthy();

    await page.locator("#dropdown").selectOption("Option 2");
    await expect(page.locator("#dropdown")).toBeTruthy();



})