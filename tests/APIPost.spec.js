const { test, expect } = require('@playwright/test');

test("APIPost", async ({ request }) => {



    const response = await request.post(
        "https://restful-booker.herokuapp.com/booking",
        {
            data: {
                firstname: "Rohit",
                lastname: "Patil",
                totalprice: 1000,
                depositpaid: true,
                bookingdates: {
                    checkin: "2024-01-01",
                    checkout: "2024-01-05"
                },
                additionalneeds: "Breakfast"
            }
        }
    );

    const body = await response.json();

    console.log(body);

    expect(response.status()).toBe(200);
    expect(body.booking.firstname).toBe("Rohit");
});


