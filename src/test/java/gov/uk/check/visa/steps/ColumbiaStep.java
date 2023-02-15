package gov.uk.check.visa.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.pages.ResultPage;
import gov.uk.check.visa.pages.SelectNationalityPage;

public class ColumbiaStep {
    @And("^user select Columbia nationality$")
    public void userSelectColumbiaNationality() {
        new SelectNationalityPage().selectNationality("Colombia");
    }

    @And("^Reason for visit$")
    public void reasonForVisit() {
        new ResultPage().joiningfamily("Join partner or family for a long stay");
    }


    @Then("^verify visa which say you need visa to join family\"([^\"]*)\"$")
    public void verifyVisaWhichSayYouNeedVisaToJoinFamily(String family) {
        new ResultPage().familybasedvisa("You may need a visa");

    }
}
