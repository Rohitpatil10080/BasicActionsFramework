const { test, expect } = require('@playwright/test');

test("Doubleclick", async ({ page }) => {

    await page.goto("https://demoqa.com/buttons?utm_source=chatgpt.com");

    await page.locator("#doubleClickBtn").dblclick();
    await expect(page.locator('#doubleClickMessage')).toHaveText("You have done a double click");
    await page.locator("#rightClickBtn").dblclick();
    await expect(page.locator('#doubleClickMessage')).toHaveText("You have done a double click");



    

})