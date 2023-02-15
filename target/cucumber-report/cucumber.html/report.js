$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmationTest.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation",
  "description": "\r\nAs a user I used be able to select visa and get correct information",
  "id": "visa-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5966059800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I am Australian coming to UK for Tourism",
  "description": "",
  "id": "visa-confirmation;i-am-australian-coming-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on gov uk visa homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to accept cookie",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user to click start button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user to select nationality from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user to click on purpose for visit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify text of which say whether you need visa or not\"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaCheckSteps.user_is_on_gov_uk_visa_homepage()"
});
formatter.result({
  "duration": 120102000,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_accept_cookie()"
});
formatter.result({
  "duration": 113601200,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_start_button()"
});
formatter.result({
  "duration": 2628199400,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_select_nationality_from_drop_down()"
});
formatter.result({
  "duration": 123511300,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 392188900,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_on_purpose_for_visit()"
});
formatter.result({
  "duration": 87244400,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 341819700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 54
    }
  ],
  "location": "VisaCheckSteps.verify_text_of_which_say_whether_you_need_visa_or_not(String)"
});
formatter.result({
  "duration": 48283300,
  "status": "passed"
});
formatter.after({
  "duration": 810946600,
  "status": "passed"
});
formatter.before({
  "duration": 3961782500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I am Chilean coming to UK for Work and Plans on staying For Longer Than Six Months",
  "description": "",
  "id": "visa-confirmation;i-am-chilean-coming-to-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is on gov uk visa homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User to accept cookie",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user to click start button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User to select nationality from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to visit for purpose",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to click to stay longer than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user plan to work in Health",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify text of which say you need visa to work\"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaCheckSteps.user_is_on_gov_uk_visa_homepage()"
});
formatter.result({
  "duration": 171300,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_accept_cookie()"
});
formatter.result({
  "duration": 166302800,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_start_button()"
});
formatter.result({
  "duration": 1627405200,
  "status": "passed"
});
formatter.match({
  "location": "ChileanStep.userToSelectNationalityFromDropDown()"
});
formatter.result({
  "duration": 133443600,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 419214000,
  "status": "passed"
});
formatter.match({
  "location": "ChileanStep.userToVisitForPurpose()"
});
formatter.result({
  "duration": 84971500,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 303138700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 34
    }
  ],
  "location": "ChileanStep.user_to_click_to_stay_longer_than_months(int)"
});
formatter.result({
  "duration": 92814600,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 309037600,
  "status": "passed"
});
formatter.match({
  "location": "ChileanStep.userPlanToWorkInHealth()"
});
formatter.result({
  "duration": 97957300,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 319478500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 47
    }
  ],
  "location": "ChileanStep.verifyTextOfWhichSayYouNeedVisaToWork(String)"
});
formatter.result({
  "duration": 55657100,
  "status": "passed"
});
formatter.after({
  "duration": 792352700,
  "status": "passed"
});
formatter.before({
  "duration": 3031354000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I am Columbian National coming to UK to join my partner for a long stay",
  "description": "",
  "id": "visa-confirmation;i-am-columbian-national-coming-to-uk-to-join-my-partner-for-a-long-stay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User is on gov uk visa homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User to accept cookie",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user to click start button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user select Columbia nationality",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Reason for visit",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user to click continue",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify visa which say you need visa to join family\"You may need a visa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaCheckSteps.user_is_on_gov_uk_visa_homepage()"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_accept_cookie()"
});
formatter.result({
  "duration": 120544700,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_start_button()"
});
formatter.result({
  "duration": 495860800,
  "status": "passed"
});
formatter.match({
  "location": "ColumbiaStep.userSelectColumbiaNationality()"
});
formatter.result({
  "duration": 115941600,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 414385300,
  "status": "passed"
});
formatter.match({
  "location": "ColumbiaStep.reasonForVisit()"
});
formatter.result({
  "duration": 84623600,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckSteps.user_to_click_continue()"
});
formatter.result({
  "duration": 471571800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You may need a visa",
      "offset": 51
    }
  ],
  "location": "ColumbiaStep.verifyVisaWhichSayYouNeedVisaToJoinFamily(String)"
});
formatter.result({
  "duration": 37879700,
  "status": "passed"
});
formatter.after({
  "duration": 799725300,
  "status": "passed"
});
});