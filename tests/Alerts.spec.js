const { test, expect } = require('@playwright/test');

test("Alerts", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // Handle dialog FIRST
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    // Then trigger alert
    await page.getByText("Click for JS Alert").click();

    // Verify result
    await expect(page.locator("#result"))
        .toHaveText("You successfully clicked an alert");
});