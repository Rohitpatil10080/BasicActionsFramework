class Registration {
    constructor(page) {
        this.page=page;
        this.signinlink = page.getByRole("link", { name: "Sign in" });
        this.registerlink = page.getByRole("link", { name: "Register your account" });

        this.firstname = page.getByPlaceholder("First name *");
        this.lastname = page.getByPlaceholder("Your last name *");
        this.dob = page.getByPlaceholder("YYYY-MM-DD");

        this.country = page.locator("#country");

        this.postal = page.getByLabel("Postal code");
        this.housenumber = page.locator("[data-test='house_number']");

        this.street = page.getByLabel("Street");
        this.city = page.getByLabel("City");
        this.state = page.getByPlaceholder("Your State *");

        this.mobilenumber = page.locator("[data-test='phone']");

        this.email = page.getByPlaceholder("Your email *");
        this.password = page.getByPlaceholder("Your password");



        this.registerbutton =  page.getByRole("button", { name: "Register" });

    }

    async goto()
    {
        await this.page.goto("https://practicesoftwaretesting.com/");
    }

    async registartion(firstname, lastname, dob, country, postal, housenumber, street, city, state, mobilenumber, email, password,) {
        await this.signinlink.click();
        await this.registerlink.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.dob.fill(dob);
        await this.country.selectOption(country);
        await this.postal.fill(postal);
        await this.housenumber.fill(housenumber);
        await this.street.fill(street);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.mobilenumber.fill(mobilenumber);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.registerbutton.click();

    }
}
module.exports={Registration};