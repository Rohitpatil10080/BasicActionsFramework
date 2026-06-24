// Import Playwright test runner and assertions
const { test, expect } = require('@playwright/test');

// Import Page Object classes (POM files)
// These are separate classes where we keep UI actions
const { Login } = require('./PageObject/Login');
const { AddProduct } = require('./PageObject/AddProduct');
const { Cart } = require('./PageObject/Cart');
const { CheckoutPage } = require('./PageObject/CheckoutPage');
const { PoManager } = require('./PageObject/PoManager');

// Import test data from JSON file (data-driven testing)
const users = require("./TestData/data.json");

// Array of products used for looping (data-driven approach)
const products = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Onesie"
];

// These variables are declared globally so all tests can use them
let pomanager;
let login1;
let product;
let car;
let check;


/*
=========================================================
 BEFORE EACH TEST
=========================================================
This runs BEFORE every single test case.

WHY?
👉 Every test needs fresh state
👉 So we login again before each test
👉 Avoid dependency between tests
*/
test.beforeEach(async ({ page }) => {

    // Create PoManager object
    // WHY? It acts like a "container" for all page objects
    pomanager = new PoManager(page);

    /*
    IMPORTANT:
    We pass "page" here because:
    👉 page = browser tab created by Playwright
    👉 all actions (click, fill, goto) happen on this page
    👉 without page, POM cannot interact with UI
    */

    // Get individual page objects from PoManager
    login1 = pomanager.getloginpage();      // Login page actions
    product = pomanager.getaddproduct();    // Product page actions
    car = pomanager.getcart();              // Cart page actions
    check = pomanager.getcheckout();        // Checkout page actions

    // Step 1: Open login page
    await login1.goto();

    // Step 2: Perform login
    await login1.LoginPage("standard_user", "secret_sauce");
});


/*
=========================================================
TEST 1: ADD PRODUCTS
=========================================================
*/
test("Add product", async ({ page }) => {

    // Loop through all products
    for (const productName of products) {

        /*
        IMPORTANT FIX IDEA:
        product.AddProducts(productName)

        WHY?
        👉 we pass productName dynamically
        👉 POM searches and clicks that product
        */

        await product.AddProducts(productName);
    }
});


/*
=========================================================
TEST 2: CART PAGE
=========================================================
*/
test("cartpage", async ({ page }) => {

    // Click cart icon
    await car.cart();

    /*
    WHY SIMPLE HERE?
    👉 Cart class already knows locator (.shopping_cart_link)
    👉 So we just call method
    */
});


/*
=========================================================
TEST 3: DATA DRIVEN CHECKOUT
=========================================================
*/
users.forEach(user => {

    test(`checkoutpages for ${user.firstname} ${user.lastname} ${user.Zip}`, async ({ page }) => {

        // Add product first
        await product.AddProducts("Sauce Labs Backpack");

        // Go to cart
        await car.cart();

        // Perform checkout with dynamic user data
        await check.checkoutpage(
            user.firstname,
            user.lastname,
            user.Zip
        );
    });
});