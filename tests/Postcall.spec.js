const { test, expect } = require('@playwright/test');
const { log } = require('node:console');
const { request } = require('node:http');
test("Post call", async ({ request }) => {

    const authdata = {
        "username": "admin",
        "password": "password123"
    }

    const response = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { "Content-Type": "application/json" }, data: authdata })
    console.log(response);

    const responsestatus = response.status();
    console.log(responsestatus);

    const responsejson = await response.json();
    console.log(responsejson);

    await expect(responsejson.token).not.toBeNull();


})

test("Post mthod", async ({ request }) => {

    const bookingdata = {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        }
    }

    const bookingrepsonse = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { "Content-Type": "application/json" }, data: bookingdata })

    const bookingrepsonsejson = await bookingrepsonse.json();
    console.log(bookingrepsonsejson);
    await expect(bookingrepsonsejson.booking.firstname).toBe(bookingdata.firstname);

    

});