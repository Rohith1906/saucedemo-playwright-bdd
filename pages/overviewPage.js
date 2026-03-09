const BasePage = require("./BasePage");
class OverviewPage extends BasePage{
    constructor(page){      
        super(page);
    }

    async isProductVisible(product){
        return await this.isElementVisible(`//div[@class='inventory_item_name' and contains(text(),'${product}')]`,`Product ${product} is not visible`);
    }

    async clickFinish(){
        await this.clickElement("//button[@id='finish']","Finish button is not visible");
    }

    async isOrderCompletePageVisible(){
        return await this.isElementVisible("//h2[text()='Thank you for your order']","Order complete page is not visible");
    }
}
module.exports=OverviewPage;