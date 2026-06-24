class LogOut
{
    constructor(page)
  
    {
       this.page=page
    this.dropdownbox= page.locator("#menu");
    this.signout= page.locator("[data-test='nav-sign-out']");
    }

    async logout()
    {
        await this.page.waitForLoadState('networkidle');
        await this.dropdownbox.click();
        await this.signout.click();
    }
}
module.exports={LogOut};