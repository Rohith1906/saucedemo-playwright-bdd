Feature: Cart

        
    Background:
        Given I open the application
        When I enter username and password
        Then I see the product section
        
    Scenario Outline:proceed to checkout
        When I add "<product>" to cart
        Then I see remove button for "<product>"
        When I click on shopping cart icon
        Then I see cart page
        When I click checkout
        Then I see checkout page


Examples:
| product |
| Sauce Labs Backpack |
| Sauce Labs Bike Light |

    Scenario Outline: remove product from cart
        When I add "<product>" to cart
        When I click on shopping cart icon
        Then I see cart page
        When I remove "<product>" from cart page
        Then I should not see "<product>" in cart

Examples:
| product |
| Sauce Labs Backpack |
| Sauce Labs Bike Light |

    Scenario Outline: Add multiple products to cart
        When I add "<product1>" to cart
        When I add "<product2>" to cart
        Then I see remove button for "<product1>"
        Then I see remove button for "<product2>"
        When I click on shopping cart icon
        Then I see cart page
        Then I see multiple products in cart
        When I click checkout
        Then I see checkout page

Examples:
| product1 | product2 |
| Sauce Labs Backpack | Sauce Labs Bike Light |
| Sauce Labs Bike Light | Sauce Labs Bolt T-Shirt |
        