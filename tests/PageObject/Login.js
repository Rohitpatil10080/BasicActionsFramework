class Login {

    /*
    CONSTRUCTOR RUNS AUTOMATICALLY WHEN OBJECT IS CREATED

    WHY page is passed?
    👉 page = browser tab from Playwright
    👉 without page we cannot interact with UI
    👉 this.page stores it for future use
    */
    constructor(page) {
        this.page = page;

        /*
        LOCATORS STORED HERE

        WHY?
        👉 so we don't rewrite selectors again and again
        👉 reusable + clean + maintainable
        */
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginbtn = page.getByRole("button", { name: "Login" });
    }

    /*
    OPEN APPLICATION URL
    */
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    /*
    LOGIN FUNCTION

    WHY parameters?
    👉 so we can pass different users from test
    👉 makes reusable function
    */
    async LoginPage(username, password) {

        await this.username.fill(username);   // enter username
        await this.password.fill(password);   // enter password
        await this.loginbtn.click();          // click login
    }
}

module.exports = { Login };