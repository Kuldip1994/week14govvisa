package gov.uk.check.visa.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.ResultPage;
import gov.uk.check.visa.pages.SelectNationalityPage;
import gov.uk.check.visa.pages.StartPage;

public class VisaCheckSteps {
    @Given("^User is on gov uk visa homepage$")
    public void user_is_on_gov_uk_visa_homepage() {
    }

    @When("^User to accept cookie$")
    public void user_to_accept_cookie() {
        new StartPage().accepetcookie();
    }

    @When("^user to click start button$")
    public void user_to_click_start_button() {
        new StartPage().clickStartNow();
    }

    @When("^user to select nationality from drop down$")
    public void user_to_select_nationality_from_drop_down(){
        new SelectNationalityPage().selectNationality("Australia");
    }

    @When("^user to click continue$")
    public void user_to_click_continue() {
        new SelectNationalityPage().clickNextStepButton();
    }

    @When("^user to click on purpose for visit$")
    public void user_to_click_on_purpose_for_visit( ) {
        new SelectNationalityPage().selectReasonForVisit("Tourism or visiting family and friends");
    }

    @Then("^verify text of which say whether you need visa or not\"([^\"]*)\"$")
    public void verify_text_of_which_say_whether_you_need_visa_or_not(String Vcheck)  {
        new ResultPage().visacheckmessage(Vcheck);
    }
}
