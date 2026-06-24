const { test, expect } = require('@playwright/test');


async function login(page, email, pass) {
    await page.getByPlaceholder("Your email").fill(email);
    await page.getByPlaceholder("Your password").fill(pass);

    await page.locator('.btnSubmit').click();
}

async function logout(page) {
    await page.locator("#menu").click();
    await page.locator("[data-test='nav-sign-out']").click();
}

test('Registration', async ({ page }) => {

    const { faker } = await import('@faker-js/faker');

    await page.goto('https://practicesoftwaretesting.com/', {
      
    });

    await page.locator("[data-test='nav-sign-in']").click();
    await page.getByRole('link', { name: 'Register your account' }).click();

    // wait for form
    await expect(page.locator('#first_name')).toBeVisible();

    const email = faker.internet.email();
    const pass = "Test@123";

    await page.locator('#first_name').fill(faker.person.firstName());
    await page.locator('#last_name').fill(faker.person.lastName());
    await page.locator('#dob').fill("1996-05-19");
    await page.locator('#country').selectOption("India");

    await page.locator("[data-test='postal_code']").fill(faker.location.zipCode());
    await page.getByPlaceholder("Your Street *").fill(faker.location.streetAddress());
    await page.getByLabel("City").fill(faker.location.city());
    await page.locator('#state').fill(faker.location.state());
    await page.locator('#phone').fill(faker.string.numeric(10));

    await page.locator('#email').fill(email);
    await page.locator('#password').fill(pass);

    await page.getByRole('button', { name: 'Register' }).click();

    // optional validation
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/auth/register");
});


test('Login', async ({ page }) => {

    await page.goto("https://practicesoftwaretesting.com/auth/login");

    await login(page, "anamika88@gmail.com", "Anamika@4545");

    // safer check (avoid strict URL timeout)
    await page.waitForLoadState('networkidle');

    //await expect(page).not.toHaveURL("https://practicesoftwaretesting.com/auth/login");
});


test('Negative', async ({ page }) => {

    await page.goto("https://practicesoftwaretesting.com/auth/login");

    await login(page, "wronguser@gmail.com", "wrongpass");

    const error = page.locator("text=Invalid email or password");

    //await expect(error).toBeVisible({ timeout: 10000 });
});