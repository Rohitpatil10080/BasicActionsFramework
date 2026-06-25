

class PracticeRegistration {

    constructor(page) {
        this.page = page;

        this.signInLink = page.locator("[data-test='nav-sign-in']");
        this.registerLink = page.getByRole('link', { name: 'Register your account' });

        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.DOB = page.locator('#dob');
        this.country = page.locator('#country');

        this.postalCode = page.locator("[data-test='postal_code']");
        this.street = page.getByPlaceholder("Your Street *");
        this.city = page.getByLabel("City");
        this.state = page.locator('#state');
        this.phone = page.locator('#phone');
        
        this.housenumber = page.locator("[data-test='house_number']");

        this.email = page.locator('#email');
        this.password = page.locator('#password');

        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async signgoto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async openRegisterPage() {
        await this.signInLink.click();
        await this.registerLink.click();
    }

    async registerForm(user) {
        await this.firstName.fill(user.firstname);
        await this.lastName.fill(user.lastname);
        await this.DOB.fill(user.DOB);
        await this.country.selectOption(user.country);

        await this.postalCode.fill(user.postalcode);
        await this.page.waitForTimeout(2000);
        await this.housenumber.fill(user.housenumber);
        await this.street.fill(user.street);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        
        await this.phone.fill(user.phone);
        

        await this.email.fill(user.email);
        await this.password.fill(user.password);

        await this.registerButton.click();
    }
}

module.exports = { PracticeRegistration };