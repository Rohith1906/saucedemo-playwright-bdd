const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");


Given('I open the application',async function(){
    this.loginPage=new LoginPage(this.page);
    await this.loginPage.openApp();
});

When('I see login page logo',async function(){
    const isVisible=await this.loginPage.loginPageLogo();
    expect(isVisible).toBe(true);
});

When('I see username field',async function(){
    const isVisible=await this.loginPage.usernameFieldVisible();
    expect(isVisible).toBe(true);
});

When('I see password field',async function(){
    const isVisible=await this.loginPage.passwordFieldVisible();
    expect(isVisible).toBe(true);
});

When('I see login button',async function(){
    const isVisible=await this.loginPage.loginButtonVisible();
    expect(isVisible).toBe(true);
});

When('I enter username and password',async function(){
    await this.loginPage.login("standard_user","secret_sauce");
});

Then('I should be redirected to the dashboard page',async function(){
    const isVisible=await this.loginPage.isElementVisible("//div[@class='app_logo']","Dashboard page logo is not visible");
    expect(isVisible).toBe(true);
});