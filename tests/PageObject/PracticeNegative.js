class PracticeNegative {

    constructor(page) {
        this.page = page;

        this.email = page.getByPlaceholder("Your email");
        this.password = page.getByPlaceholder("Your password");
        this.signbutton = page.locator('.btnSubmit');
    }

    async goto() {
        await this.page.goto("https://practicesoftwaretesting.com/auth/login");
    }

    async negativeLogin(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signbutton.click();
    }
}
module.exports = { PracticeNegative };