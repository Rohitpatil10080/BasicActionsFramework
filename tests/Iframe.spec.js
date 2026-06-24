const {test ,expect}=require('@playwright/test');

test("Frame",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/iframe?utm_source=chatgpt.com");

    const frame =page.frameLocator("#mce_0_ifr");
    await expect(frame.locator("p")).toHaveText("Your content goes here.");

})