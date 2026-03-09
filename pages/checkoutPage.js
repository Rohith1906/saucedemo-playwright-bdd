const BasePage=require("./BasePage");
class CheckoutPage extends BasePage{
    constructor(page)
    {
        super(page);
    }
    
    async enterFirstName(firstName){
        await this.enterText("//input[@id='first-name']",firstName,"First name is not visible");
    }

    async enterLastName(lastName){
        await this.enterText("//input[@id='last-name']",lastName,"Last name is not visible");
    }

    async enterZipCode(zipCode){
        await this.enterText("//input[@id='postal-code']",zipCode,"Zip code is not visible");
    }

    async clickContinue(){
        await this.clickElement("//input[@id='continue']","Continue button is not visible");
    }

    async isOverviewPageVisible(){
        return await this.isElementVisible("//div[@class='summary_info']","Overview page is not visible");
    }
}

module.exports=CheckoutPage;
