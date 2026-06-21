class InvalidLogin {
    constructor(page) {
        this.signin = page.getByRole("link", { name: "Sign in" });
        this.Eaddres = page.getByLabel("Email address *");
        this.wrongpass = page.getByLabel("Password *");
        this.btn = page.locator(".btnSubmit");
    }
    async invalidcred(Eaddres, wrongpass) {
        await this.signin.click();
        await this.Eaddres.fill(Eaddres);
        await this.wrongpass.fill(wrongpass);
        await this.btn.click();

    }
}
module.exports = { InvalidLogin };