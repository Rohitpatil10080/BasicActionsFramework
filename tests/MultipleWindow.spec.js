const {test ,expect}=require('@playwright/test');

test("Multiple windows",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/windows?utm_source=chatgpt.com");

    const pagepromise=page.waitForEvent('popup');

    await page.getByRole("link",{name:"Click Here"}).click();

   const newpage =await pagepromise;

   await expect(newpage.locator("h3")).toHaveText("New Window");
   




})