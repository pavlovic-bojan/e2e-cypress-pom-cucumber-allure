Feature: djaksport login page

  I want to see the homepage and log into the website

  Scenario: I can navigate to djaksport
    When the User is on the home page
    Then validate that the user is on the home page

  Scenario: I can navigate to the login page
    When the User is on the login page
    Then validate that the user is on the login page

  Scenario: I can log in with valid login data
    When the User is on the login page
    And the User inserts the UserName
    And the User inserts the Password
    And the User clicks on the login button
    Then the User logged in

  Scenario Outline: Attempt log in with invalid login data
    When the User is on the login page
    And the User inserts "<invalidUserName>"
    And the User inserts "<invalidPassword>"
    And the User clicks on the login button
    Then the password error message is visible

  Examples:
    | invalidUserName | invalidPassword |
    |                 |                 |
    | 123             | 123             |
    | aaa             | aaa             |