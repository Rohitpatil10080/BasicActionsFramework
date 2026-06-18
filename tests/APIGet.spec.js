const { test, expect } = require('@playwright/test');

test("APIGet", async ({ request }) => {

    const response = await request.get(
        "https://restful-booker.herokuapp.com/booking"
    );

    console.log(await response.json());

    expect(response.status()).toBe(200);
});