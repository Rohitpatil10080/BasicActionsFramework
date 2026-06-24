const { test, expect } = require('@playwright/test');

test("Hover", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/hovers");
    await page.locator(".figure").first().hover();

    await expect(page.getByText("name:user1")).toBeVisible();



})