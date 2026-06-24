class Cart {

    /*
    CONSTRUCTOR = runs automatically when object is created

    WHY page is passed?
    👉 page = browser tab (Playwright gives this)
    👉 we need it to interact with UI (click, fill, etc.)
    */
    constructor(page) {
        this.page = page;

        /*
        LOCATOR DEFINITION

        WHY here?
        👉 so we define once and reuse everywhere
        👉 avoids rewriting selector again
        */
        this.Cartbtn = page.locator(".shopping_cart_link");
    }

    /*
    METHOD: open cart page

    WHY method?
    👉 so test file can simply call cart.cart()
    👉 hides internal implementation
    */
    async cart() {
        await this.Cartbtn.click();   // clicks cart icon in UI
    }
}

module.exports = { Cart };