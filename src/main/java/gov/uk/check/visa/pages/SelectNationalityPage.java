package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectNationalityPage extends Utility {
    private static final Logger log = LogManager.getLogger(SelectNationalityPage.class.getName());

    public SelectNationalityPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@name='response']")
    WebElement nationalityDropDownList;

    @FindBy(xpath = "//button[@class='gem-c-button govuk-button gem-c-button--bottom-margin']")
    WebElement continuebutton;

    @FindBy(xpath = "//div[@class='govuk-radios']//input[@id='response-0']")
    WebElement reasonforvisittravel;

    @FindBy(xpath = "//button[@class='gem-c-button govuk-button gem-c-button--bottom-margin']")
    WebElement continuevisa;

    public void selectNationality(String nationality){
        selectByVisibleTextFromDropDown(nationalityDropDownList,nationality);
    }

    public void clickNextStepButton(){
        clickOnElement(continuebutton);
    }
    public void selectReasonForVisit(String reason){
        clickOnElement(reasonforvisittravel);
    }
    public void clickContinuevisa(){
        clickOnElement(continuevisa);
    }



}
