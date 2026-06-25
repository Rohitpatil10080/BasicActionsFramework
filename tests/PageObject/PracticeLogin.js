class PracticeLogin {
    constructor(page) {
        this.page = page;
        this.email = page.getByPlaceholder("Your email");
        this.password = page.getByPlaceholder("Your password");
        this.signbutton = page.locator('.btnSubmit');
        this.Menu = page.locator("#menu");
        this.signoutpage = page.locator("[data-test='nav-sign-out']");

    }

    async goto() {
        await this.page.goto("https://practicesoftwaretesting.com/auth/login");
    }

    async login1(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signbutton.click();
    }

    async logout() {
        await this.Menu.click();
        await this.signoutpage.click();
    }
}

module.exports = { PracticeLogin };