const { InvalidLogin } = require("./InvalidLogin");
const { LoginPractice } = require("./LoginPractice");
const { LogOut } = require("./LogOut");
const { Registration } = require("./Registration");

class Pomanager1
{
    constructor(page)
    {
        this.page=page;

        this.login=new LoginPractice(page);
        this.registration=new Registration(page);
        this.logout=new LogOut(page);
        this.invalid=new InvalidLogin(page);
       

    }

    getloginpractice()
    {
        return this.login;
    }
    getregistartionpage()
    {
        return this.registration;
    }
    getlogout()
    {
        return this.logout;
    }
    getinvalidcrdentials()
    {
        return this.invalid;
    }
    
}
module.exports={Pomanager1};