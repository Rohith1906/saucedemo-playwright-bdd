const BasePage=require('./BasePage');
class LoginPage extends BasePage{
    constructor(page){
        super(page);
    }

    async openApp()
    {
        await super.goto("https://www.saucedemo.com/")
        await super.waitForLoadState();
    }

    async loginPageLogo()
    {
        return await super.isElementVisible("//div[@class='login_logo']","Login page logo is not visible");
    }

    async usernameFieldVisible()
    {
        return await super.isElementVisible("//input[@id='user-name']","Username field is not visible");
    }

    async passwordFieldVisible()
    {
        return await super.isElementVisible("//input[@id='password']","Password field is not visible");
    }

    async loginButtonVisible()
    {
        return await super.isElementVisible("//input[@id='login-button']","Login button is not visible");
    }
    
    async login(username,password)
    {
        await super.enterText("//input[@id='user-name']",username,"Username field is not visible");
        await super.enterText("//input[@id='password']",password,"Password field is not visible");
        await super.clickElement("//input[@id='login-button']","Login button is not visible");
    }

    async dashboardPageLogo()
    {
        return await super.isElementVisible("//div[@class='app_logo']","Dashboard page logo is not visible");
    }
}

module.exports=LoginPage;
