const BasePage = require("./BasePage");

class Productpage extends BasePage{
    constructor(page){
        super(page);
    }

    async isAppLogoVisible(){
        return await this.isElementVisible("//div[@class='app_logo']","Product logo is not visible");
    }

    async isProductSectionVisible(){
        return await this.isElementVisible("//div[@class='inventory_list']","Product section is not visible")
    }

    async isAddToCartButtonVisible(product_name){
        const product = this.page.locator(".inventory_item").filter({hasText:product_name}).getByRole("button",{name:"Add to cart"});
        try {
            return await product.isVisible();
        } catch(error) {
            console.log("Add to cart button is not visible");
            return false;
        }
    }

    async isRemoveButtonVisible(product_name){
        const product = this.page.locator(".inventory_item").filter({hasText:product_name}).getByRole("button",{name:"Remove"});
        try {
            return await product.isVisible();
        } catch(error) {
            console.log("Remove button is not visible");
            return false;
        }
    }

    async isShoppingCartIconVisible(){
        return await this.isElementVisible("//a[@class='shopping_cart_link']","Shopping cart icon is not visible");
    }

    async clickShoppingCartIcon(){
        await this.clickElement("//a[@class='shopping_cart_link']","Shopping cart icon is not visible");
    }

    async addToCart(product_name){
        const product = this.page.locator(".inventory_item").filter({hasText:product_name}).getByRole("button",{name:"Add to cart"});
        await product.click();
    }

    async removeFromCart(product_name){
        const product = this.page.locator(".inventory_item").filter({hasText:product_name}).getByRole("button",{name:"Remove"});
        await product.click();
    }
}

module.exports=Productpage;