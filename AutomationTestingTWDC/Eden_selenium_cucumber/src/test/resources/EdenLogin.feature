Feature: Eden login

@test
  Scenario: Successful Login with Valid Credentials
    When user is on Eden login screen
    And user types in correct username and password
    When user clicks on Sign in button
    Then user is displayed Eden homepage