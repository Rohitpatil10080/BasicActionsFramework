class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Locators for checkout page
        this.checkoutbtn = page.locator("#checkout");
        this.firstname = page.getByPlaceholder("First Name");
        this.lastname = page.getByPlaceholder("Last Name");
        this.zip = page.getByPlaceholder("Zip/Postal Code");
        this.constinuebtn = page.locator(".submit-button");
        this.finish = page.getByRole("button", { name: "Finish" });
    }

    /*
    FULL CHECKOUT FLOW

    WHY parameters?
    👉 we pass user data dynamically from test data JSON
    */
    async checkoutpage(firstname, lastname, zip) {

        await this.checkoutbtn.click();      // go to checkout

        await this.firstname.fill(firstname); // enter first name
        await this.lastname.fill(lastname);   // enter last name
        await this.zip.fill(zip);             // enter zip

        await this.constinuebtn.click();      // continue

        await this.finish.click();            // finish order
    }
}

module.exports = { CheckoutPage };