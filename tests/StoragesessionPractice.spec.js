test('create storage state', async ({ page }) => {

    const pomanager = new Pomanager1(page);
    const login = pomanager.getloginpractice();

    await login.goto();
    await login.login("rohit15@gmail.com", "Test@1244");

    await page.waitForURL(/account/);

    await page.context().storageState({ path: 'storageState.json' });
});