const {Given,When,Then}=require("@cucumber/cucumber");
const {expect}=require("@playwright/test");
const CartPage=require("../pages/cartPage");
const ProductPage=require("../pages/productsPage");

When("I click on shopping cart icon", async function(){
    this.ProductPage=new ProductPage(this.page);
    await this.ProductPage.clickShoppingCartIcon();

})

Then("I see cart page",async function(){
    this.CartPage=new CartPage(this.page);
    const visible=await this.CartPage.isCartPageVisible();
    expect(visible).toBe(true);
})

When("I remove {string} from cart page",async function(product_name){
    await this.CartPage.removeElementFromCart(product_name);
})

Then("I should not see {string} in cart",async function(product_name){
    const visible=await this.CartPage.isProductInCart(product_name);
    expect(visible).toBe(false);
})


Then("I see multiple products in cart",async function(){
    const count=await this.page.locator(".cart_item").count();
    expect(count).toBeGreaterThan(1);
})
When("I click checkout",async function(){
    await this.CartPage.clickCheckout();
})

Then("I see checkout page",async function(){
    await this.CartPage.isCheckoutPageVisible();
})
