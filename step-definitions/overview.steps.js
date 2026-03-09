const {Given, When,Then}=require("@cucumber/cucumber");
const {expect}=require("@playwright/test");
const OverviewPage=require("../pages/overviewPage");
When("I see {string} in overview page", async function(product){
    this.OverviewPage=new OverviewPage(this.page);
    const visible=await this.OverviewPage.isProductVisible(product);
    expect(visible).toBe(true);
})

When("I click finish",async function(){
    await this.OverviewPage.clickFinish();
})

Then("I see the order complete page",async function(){
    await this.OverviewPage.isOrderCompletePageVisible();
    
})