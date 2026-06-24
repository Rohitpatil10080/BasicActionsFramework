const { test, expect } = require('@playwright/test');

const dataMock = require('./Mocking/dataMock.json');

test("intercepting", async ({ page }) => {

    await page.route("**/*products*", async route => {

        if (route.request().method().includes("GET")) {


            await route.fulfill({
                contentType: "application/json",
                body: JSON.stringify(dataMock)

            })
        }
        else {
            await route.continue();
        }

    })



    // const dataMock = {
    //     "current_page": 1,
    //     "data": [
    //         {
    //             "id": "01KVWVF7SYRAMGXKGRK430MNNF",
    //             "name": "Test intercept",
    //             "description": "Versatile combination pliers designed for gripping, bending, and cutting wire with ease.",
    //             "price": 14.15,
    //             "is_location_offer": false,
    //             "is_rental": false,
    //             "co2_rating": "D",
    //             "in_stock": true,
    //             "is_eco_friendly": false,
    //             "product_image": {
    //                 "id": "01KVWVF7S430FM23MDJKZC3B1M",
    //                 "by_name": "Helinton Fantin",
    //                 "by_url": "https://unsplash.com/@fantin",
    //                 "source_name": "Unsplash",
    //                 "source_url": "https://unsplash.com/photos/W8BNwvOvW4M",
    //                 "file_name": "pliers01.avif",
    //                 "title": "Combination pliers"
    //             }
    //         }
    //     ]
    // };










    await page.goto("https://practicesoftwaretesting.com/");

    await expect(page.locator(".card").first()).toContainText("Test intercept");
    await page.pause();

})










