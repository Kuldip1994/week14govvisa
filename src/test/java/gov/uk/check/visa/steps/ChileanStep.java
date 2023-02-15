package gov.uk.check.visa.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.ResultPage;
import gov.uk.check.visa.pages.SelectNationalityPage;

import javax.xml.transform.Result;

public class ChileanStep {
    @And("^User to select nationality from drop down$")
    public void userToSelectNationalityFromDropDown() {
        new SelectNationalityPage().selectNationality("Chile");
    }

    @And("^user to visit for purpose$")
    public void userToVisitForPurpose() {
        new ResultPage().academicorwork("Work, academic visit or business");
    }

    @When("^user to click to stay longer than (\\d+) months$")
    public void user_to_click_to_stay_longer_than_months(int more) {
        new ResultPage().morethensixmonth(6);
    }


    @And("^user plan to work in Health$")
    public void userPlanToWorkInHealth() {
        new ResultPage().areyouplanningtowork();
    }


    @Then("^verify text of which say you need visa to work\"([^\"]*)\"$")
    public void verifyTextOfWhichSayYouNeedVisaToWork(String text){
        new ResultPage().VisaWorkText(text);

    }
}

