const {Given,When,Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const CheckoutPage = require("../pages/checkoutPage");
const CartPage = require("../pages/cartPage");

When("I enter {string} and {string}", async function(firstname,lastname){
    this.CheckoutPage=new CheckoutPage(this.page);
    await this.CheckoutPage.enterFirstName(firstname);
    await this.CheckoutPage.enterLastName(lastname);
})

When("I enter {string}",async function(zipcode){
    await this.CheckoutPage.enterZipCode(zipcode);
})

When("I click the continue button",async function(){
    await this.CheckoutPage.clickContinue();
})

Then("I see the overview page",async function(){
    await this.CheckoutPage.isOverviewPageVisible();
})