const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const ProductPage = require("../pages/productsPage");

Then("I see the product section", async function () {
    this.productPage = new ProductPage(this.page);
    await this.productPage.isAppLogoVisible();
    await this.productPage.isProductSectionVisible();
});

When("I add {string} to cart", async function (product) {
    await this.productPage.addToCart(product);
});

Then("I see remove button for {string}", async function (product) {
    const visible = await this.productPage.isRemoveButtonVisible(product);
    expect(visible).toBe(true);
});

When("I remove {string} from cart", async function (product) {
    await this.productPage.removeFromCart(product);
});

Then("I see add to cart button for {string}", async function (product) {
    const visible = await this.productPage.isAddToCartButtonVisible(product);
    expect(visible).toBe(true);
});