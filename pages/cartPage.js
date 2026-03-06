const BasePage = require("./BasePage");

class CartPage extends BasePage{
    constructor(page)
    {
        super(page)
    }

    async isCartPageVisible()
    {
        await this.isElementVisible("//span[text()='Your Cart']","Cart page is not visible")
    }

    async isProductInCart(product_name){
        const product=this.page.locator("//div[@class='cart-item]").filter({hasText:product_name})
        return await product.isVisible();
    }

    async removeElementFromCart(){
        const product=this.page.locator("//div[@class='cart-item]").filter({hasText:product_name}).getByRole("button",{name:"Remove"})
        await product.click()
    }
    async clickCheckout()
    {
        await this.clickElement("//button[@id='checkout']","CheckOut button is not accesible")
    }
}
module.exports="CartPage";