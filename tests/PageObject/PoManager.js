const { AddProduct } = require("./AddProduct");
const { Cart } = require("./Cart");
const { CheckoutPage } = require("./CheckoutPage");
const { Login } = require("./Login");

class PoManager {

    /*
    SINGLE POINT OF CONTROL FOR ALL PAGES

    WHY constructor?
    👉 when PoManager is created, all page objects are created together
    👉 avoids creating multiple objects in test file
    */
    constructor(page) {

        this.page = page;

        /*
        CREATE ALL PAGE OBJECTS HERE

        WHY?
        👉 central management
        👉 all pages share same browser page
        */

        this.login = new Login(page);          // Login page object
        this.addproduct = new AddProduct(page); // Product page object
        this.cart = new Cart(page);            // Cart page object
        this.chk = new CheckoutPage(page);     // Checkout page object
    }

    /*
    GETTERS (access methods)

    WHY?
    👉 test file cannot directly access variables
    👉 we expose safe access using methods
    */

    getloginpage() {
        return this.login;
    }

    getaddproduct() {
        return this.addproduct;
    }

    getcart() {
        return this.cart;
    }

    getcheckout() {
        return this.chk;
    }
}

module.exports = { PoManager };