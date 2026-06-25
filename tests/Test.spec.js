const { test, expect } = require('@playwright/test');
const { PracticeRegistration } = require("./PageObject/PracticeRegistartion");
const { PracticeLogin } = require("./PageObject/PracticeLogin");
const { PracticeNegative } = require("./PageObject/PracticeNegative");
const { PracticeCart } = require("./PageObject/PracticeCart");


test('Registration', async ({ page }) => {

    const { faker } = await import('@faker-js/faker');


    const registerform = new PracticeRegistration(page);

    await registerform.signgoto();
    await registerform.openRegisterPage();

    const user = {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        DOB: "1996-05-19",
        country: "India",
        postalcode: faker.location.zipCode(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        phone: faker.string.numeric(10),
        housenumber: faker.location.buildingNumber(),
        email: faker.internet.email(),
        password: "Test@123"
    };

    await registerform.registerForm(user);

    await expect(page).toHaveURL(/auth/);
});


test('Login', async ({ page }) => {

    const practicelogin = new PracticeLogin(page);

    await practicelogin.goto();
    await practicelogin.login1("anamika12@gmail.com", "Anamika@48");
    await practicelogin.logout();

    await expect(page).not.toHaveURL("https://practicesoftwaretesting.com/account");
});

test('Negative', async ({ page }) => {

    const practiceNegative = new PracticeNegative(page);

    await practiceNegative.goto();
    await practiceNegative.negativeLogin("wronguser@gmail.com", "wrongpass");

    const error = page.locator("text=Invalid email or password");

    await expect(error).toBeVisible();

    console.log(await error.textContent());
});

test('Add to cart', async ({ page }) => {

    const practicecart = new PracticeCart(page);

    await practicecart.goto();
    await practicecart.addProductToCart();
    await practicecart.openCart();
    await practicecart.proceedToCheckout();
    await practicecart.login("anamika11@gmail.com", "Anamika@48");
    await practicecart.HouseNumber1("123");
    await practicecart.proceedToCheckout();
    await practicecart.fillPayment();
    await practicecart.finishOrder();

    await page.pause();
});


// await page.goto("https://practicesoftwaretesting.com/");
// await page.waitForLoadState("networkidle");
// await page.locator(".card").nth(1).click();
// await page.locator("[data-test='increase-quantity']").click();
// await expect(page.locator("#quantity-input")).toHaveValue("2");
// await page.locator("#btn-add-to-cart").click();
// await page.locator("[data-test='nav-cart']").click();
// //await expect(page.locator("[data-test='product-title']")).toContainText("Pliers ")
// await page.getByRole("button", { name: "Proceed to checkout" }).click();
// await page.locator("#email").fill("anamika666@gmail.com");
// await page.locator("#password").fill("Anamika@48");
// await page.locator("[data-test='login-submit']").click();
// await page.getByRole("button", { name: "Proceed to checkout" }).click();
// await page.getByRole("button", { name: "Proceed to checkout" }).click();
// await page.locator("#payment-method").selectOption("Buy Now Pay Later");
// await page.locator("#monthly_installments").selectOption("3 Monthly Installments");
// await page.locator("[data-test='finish']").click();



