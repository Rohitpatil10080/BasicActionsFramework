class AddProduct {

    constructor(page) {
        this.page = page;

        /*
        Locator for all products in inventory page

        WHY?
        👉 we get list of all products on screen
        👉 we will loop through them
        */
        this.products = page.locator(".inventory_item");
    }

    /*
    METHOD: AddProducts(productname)

    WHY parameter?
    👉 so we can reuse same function for different products
    👉 example:
        Add "Backpack"
        Add "Bike Light"
        Add "Onesie"
    */
    async AddProducts(productname) {

        // count total products on page
        const count = await this.products.count();

        /*
        LOOP through all products one by one

        WHY?
        👉 because we don't know position of product
        👉 so we search dynamically
        */
        for (let i = 0; i < count; i++) {

            // get nth product (0,1,2,...)
            const product = this.products.nth(i);

            // get product name text
            const name = await product.locator(".inventory_item_name").textContent();

            /*
            CHECK CONDITION

            IF product name matches input name
            👉 click "Add to cart"
            */
            if (name === productname) {
                await product.getByRole("button", { name: "Add to cart" }).click();

                break; // stop loop once found
            }
        }
    }
}

module.exports = { AddProduct };