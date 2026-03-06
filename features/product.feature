Feature: Add to cart and Remove from cart

Background:
    Given I open the application
    When I enter username and password
    Then I see the product section

Scenario Outline: Add to cart
    When I add "<product>" to cart
    Then I see remove button for "<product>"

Examples:
| product |
| Sauce Labs Backpack |
| Sauce Labs Bike Light |

Scenario Outline: Remove from cart
    When I add "<product>" to cart
    And I remove "<product>" from cart
    Then I see add to cart button for "<product>"

Examples:
| product |
| Sauce Labs Backpack |
| Sauce Labs Bike Light |