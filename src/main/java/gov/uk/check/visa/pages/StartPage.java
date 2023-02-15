package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

public class StartPage extends Utility {
    private static final Logger log = LogManager.getLogger(StartPage.class.getName());

    public StartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//div[@class='govuk-button-group']//button[contains(text(),'Accept additional cookies')]")
    WebElement acceptecooke;

    @FindBy(xpath = "//div[@class='govuk-grid-column-two-thirds']/article//a[@role='button']")
    WebElement startnow;

    @Test
    public void accepetcookie(){
        clickOnElement(acceptecooke);
    }
    @Test
    public void clickStartNow(){
        clickOnElement(startnow);
    }


}
