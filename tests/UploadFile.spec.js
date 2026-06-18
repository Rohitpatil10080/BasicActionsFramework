const {test ,expect}=require('@playwright/test');

test("upload",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload");

await page.locator("#file-upload").setInputFiles("C:/Users/91954/Desktop/Rohit Patil-QA Engineer 2+YOE.pdf");

await page.locator("#file-submit").click();



})