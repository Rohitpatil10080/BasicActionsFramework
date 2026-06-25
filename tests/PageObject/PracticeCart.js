class PracticeCart {
    constructor(page) {
        this.page = page;

        this.productCard = page.locator(".card").nth(1);
        this.increaseQty = page.locator("[data-test='increase-quantity']");
        this.qty = page.locator("#quantity-input");
        this.addToCart = page.locator("#btn-add-to-cart");

        this.cartIcon = page.locator("[data-test='nav-cart']");
        this.proceedBtn = page.getByRole("button", { name: "Proceed to checkout" });

        this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("[data-test='login-submit']");

        this.housenumber = page.locator("[data-test='house_number']");

        this.payment = page.locator("#payment-method");
        this.installments = page.locator("#monthly_installments");
        this.finishBtn = page.locator("[data-test='finish']");
    }

    async goto() {
        await this.page.goto("https://practicesoftwaretesting.com/");
        //await this.page.waitForLoadState("networkidle");
    }

    async addProductToCart() {
        await this.productCard.click();
        await this.increaseQty.click();
        //await expect(this.qty).toHaveValue("2");
        await this.addToCart.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async proceedToCheckout() {
        await this.proceedBtn.first().waitFor({ state: "visible" });
        await this.proceedBtn.first().click();
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
         await this.proceedBtn.first().click();
    }

    async HouseNumber1(housenumber) {

        //await this.page.waitForTimeout(80000);
        await this.housenumber.fill(housenumber);

    }

    async fillPayment() {
        await this.payment.selectOption({ label: "Buy Now Pay Later" });
        await this.installments.selectOption({ label: "3 Monthly Installments" });
    }

    async finishOrder() {
        await this.finishBtn.click();
    }
}

module.exports = { PracticeCart };