const {test ,expect}=require('@playwright/test');

test("Download",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop?utm_source=chatgpt.com");

    const source=await page.locator("#column-a");
     const target=await page.locator("#column-b");

     await source.dragTo(target);



})