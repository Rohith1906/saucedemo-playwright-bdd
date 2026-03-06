Feature: Login

Scenario: Login to the application
    Given I open the application
    When I see login page logo
    When I see username field
    When I see password field
    When I see login button
    When I enter username and password
    Then I should be redirected to the dashboard page
