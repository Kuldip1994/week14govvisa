package gov.uk.check.visa.pages;

import cucumber.api.java.zh_cn.假如;
import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']/h2[contains(text(),'You will not need a visa to come to the UK')]")
    WebElement visacheck;

    @FindBy(xpath = "//div[@class='govuk-radios']//input[@id='response-0']")
    WebElement lessThanSixMonths;

    @FindBy(xpath = "//div[@class='govuk-radios']//input[@id='response-1']")
    WebElement moreThaxSixMonths;

    @FindBy(xpath = "//div[@class='govuk-radios']/div//input[@id='response-0']")
    WebElement worktype;

    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']//h2[contains(text(),'You need a visa to work in health and care')]")
    WebElement visatoworktext;

    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']//h2[contains(text(),'You may need a visa')]")
    WebElement familyvisatext;

    @FindBy(xpath = "//div[@class='govuk-radios']//input[@id='response-1']")
    WebElement academic;
    @FindBy(xpath ="//div[@class='govuk-radios']/div[5]//input[@id='response-4']")
    WebElement Joinfamily;



    public void selectLenghtofStay(int less){
        clickOnElement(lessThanSixMonths);

    }
    public void morethensixmonth (int sixmore){
        clickOnElement(moreThaxSixMonths);
    }
    public String visacheckmessage(String visaCheck){
        return getTextFromElement(visacheck);
    }
    public void areyouplanningtowork(){
        clickOnElement(worktype);
    }
    public String VisaWorkText(String VisatoWork){
        return getTextFromElement(visatoworktext);
    }
    public String familybasedvisa (String visa){
        return getTextFromElement(familyvisatext);
    }
    public void academicorwork(String worktype){
        clickOnElement(academic);
    }
    public void joiningfamily(String joinfamily){
        clickOnElement(Joinfamily);
    }
}


