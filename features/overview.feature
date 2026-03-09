Feature: Order Overview
    Background:
        Given I open the application
        When I enter username and password
        Then I see the product section
        

    Scenario Outline:Order Overview
        When I add "<product>" to cart
        When I click on shopping cart icon
        Then I see cart page
        When I click checkout
        Then I see checkout page
        When I enter "<firstname>" and "<lastname>"
        When I enter "<zipcode>"
        When I click the continue button
        Then I see the overview page
        When I see "<product>" in overview page
        When I click finish
        Then I see the order complete page

    Examples:
    | product | firstname | lastname | zipcode |
    | Sauce Labs Backpack | Ram | Krishna | 12345 |
    | Sauce Labs Bike Light | Ravi | Kiran | 34675 |