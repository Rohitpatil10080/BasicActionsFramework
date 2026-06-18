const { test, expect } = require('@playwright/test');

test("Download", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/download");

    const downlodpromise = page.waitForEvent('download');
    await page.getByRole("link", { name: "random_data.txt" }).click();

    const download = await downlodpromise;
    console.log(download.suggestedFilename());

})
