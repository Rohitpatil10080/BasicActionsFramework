const {test,expect}=require('@playwright/test');
const { log } = require('node:console');
const { request } = require('node:http');

test("Get MEthods",async({request})=>{

const response=await request.get("https://dummy-json.mock.beeceptor.com/todos");

const responsejson=await response.json()
console.log(responsejson);

const responsestatus=await response.status();
console.log(responsestatus);
await expect(responsestatus).toBe(200);
const resposetext=response.statusText();
console.log(resposetext);
await expect(resposetext).toBe("OK");
expect(responsejson).toHaveProperty(  "userId",3);
// const responsebody=await response.body
// const responseheader=await response.headers()
// console.log(responsebody);




})