class LoginPractice
{
    constructor(page)
    {
        this.page=page;
        this.signin = page.getByRole("link", { name: "Sign in" });
        this.emailaddress= page.getByLabel("Email address *");
        this.password= page.getByLabel("Password *");
        this.loginbtn= page.locator(".btnSubmit");

    }
        async goto() {
        await this.page.goto("https://practicesoftwaretesting.com/");
    }


    async login(emailaddress,password)
    {
        await this.signin.click();
       await this.emailaddress.fill(emailaddress);
       await this.password.fill(password);
       await this.loginbtn.click();

    }
}
module.exports={LoginPractice};