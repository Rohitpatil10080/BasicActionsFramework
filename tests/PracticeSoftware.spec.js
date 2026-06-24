const { test, expect } = require('@playwright/test');
const { Pomanager1 } = require('./PageObject/PoManager1');

// Registration Test
test('Registration', async ({ page }) => {

    const pomanager = new Pomanager1(page);
    const register = pomanager.getregistartionpage();

    await register.goto();
    await register.registartion(
        "Rohit",
        "Patil",
        "1997-12-09",
        "India",
        "411013",
        "42",
        "pune",
        "pune",
        "Maharashtra",
        "9765454324",
        "rohit15@gmail.com",
        "Test@1244"
    );
});


// Logged-in flow
// test.describe('Logged In Flow', () => {

//     test.beforeEach(async ({ page }) => {

//         const pomanager = new Pomanager1(page);

//         const login = pomanager.getloginpractice();

//         await login.goto();
//         await login.login("rohit15@gmail.com", "Test@1244");
//     });


    test('Valid Login Page', async ({ page }) => {
        await expect(page).toHaveURL(/account/);
    });


    test('Logout', async ({ page }) => {

        const pomanager = new Pomanager1(page);
        const logout = pomanager.getlogout();

        await logout.logout();

        await expect(page).toHaveURL(/auth\/login/);
    });




// Invalid Login Test
test('Invalid Login', async ({ page }) => {

    const pomanager = new Pomanager1(page);
    const login = pomanager.getloginpractice();

    await login.goto();
    await login.login("rohit15@gmail.com", "wrongpass");

    await expect(page.getByText("Invalid email or password")).toBeVisible();
});


// Navigation Test
test('Navigation checks', async ({ page }) => {

    await page.goto("https://practicesoftwaretesting.com/");

    await expect(page).toHaveTitle(/Practice/);

    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/auth\/login/);
});