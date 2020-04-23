Feature: User log in

  Scenario: Login
    Given a user opens twitter.com
    When he clicks on the "Log in" button
    And supplies his email address and password
    And clicks on the "Log in" button
    Then he is logged in

