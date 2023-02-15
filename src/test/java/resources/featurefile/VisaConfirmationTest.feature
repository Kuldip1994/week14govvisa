Feature: Visa Confirmation

  As a user I used be able to select visa and get correct information

  Scenario: I am Australian coming to UK for Tourism
    Given User is on gov uk visa homepage
    When User to accept cookie
    And user to click start button
    And user to select nationality from drop down
    And user to click continue
    And user to click on purpose for visit
    And user to click continue
    Then verify text of which say whether you need visa or not"You will not need a visa to come to the UK"

    Scenario: I am Chilean coming to UK for Work and Plans on staying For Longer Than Six Months
      Given User is on gov uk visa homepage
      When  User to accept cookie
      And user to click start button
      And User to select nationality from drop down
      And user to click continue
      And user to visit for purpose
      And user to click continue
      And user to click to stay longer than 6 months
      And user to click continue
      And user plan to work in Health
      And user to click continue
      Then verify text of which say you need visa to work"You need a visa to work in health and care"

      Scenario: I am Columbian National coming to UK to join my partner for a long stay
        Given User is on gov uk visa homepage
        When User to accept cookie
        And user to click start button
        And user select Columbia nationality
        And user to click continue
        And Reason for visit
        And user to click continue
        Then verify visa which say you need visa to join family"You may need a visa"




