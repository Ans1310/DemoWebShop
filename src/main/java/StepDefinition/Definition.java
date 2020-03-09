package StepDefinition;

import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;



public class Definition {
	public WebDriver driver;
		
	@Given("^launch the website in \"(.*)\"$")
	public void openurl(String browsertype) throws Exception{
		
		if(browsertype.equals("chrome")){
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Lnv\\Desktop\\JIRA\\chromedriver.exe");
		driver = new ChromeDriver();
		}
		else if(browsertype.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\Lnv\\Desktop\\JIRA\\geckodriver.exe");
			driver=new FirefoxDriver();
		}
		else if(browsertype.equals("IE")){
			System.setProperty("webdriver.ie.driver", "C:\\Users\\Lnv\\Desktop\\JIRA\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
		
		driver.get("http://demowebshop.tricentis.com");
		driver.manage().window().maximize();	
	}
	
	@When("^click the register link to signup$")
	public void clickregister(){
		
		driver.findElement(By.xpath("//a[contains(text(),'Register')]")).click();
	}
	@And("^Select the Gender as \"(.*)\"$") 
	public void gender(String gender){
		if(gender.equals("Female")){
		driver.findElement(By.xpath("//input[@id='gender-female' and @value='F']")).click();
		}
		else{
			driver.findElement(By.xpath("//input[@id='gender-male' and @value='M']")).click();
		}
			
	}
	
	@And("Enter the first name as \"(.*)\" and last name as \"(.*)\"$")
	public void firstlastname(String firstname, String lastname){
		driver.findElement(By.xpath("//input[@id='FirstName']")).sendKeys(firstname);
		driver.findElement(By.xpath("//input[@id='LastName']")).sendKeys(lastname);
		
	}
	@And("^Enter the email address$")
	public void email(){
		driver.findElement(By.xpath("//input[@id='Email']")).sendKeys(getSaltString()+"@gmail.com");
		
	}
	protected String getSaltString() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 10) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }
	
	@And("^Enter the Password as \"(.*)\"$")
	public void password(String password){
		driver.findElement(By.xpath("//input[@id='Password']")).sendKeys(password);
	}
	@And("^Enter the Confirm password as \"(.*)\"$")
	public void cpassword(String cpassword){
		driver.findElement(By.xpath("//input[@id='ConfirmPassword']")).sendKeys(cpassword);
	}
	@Then("^click Register button to submit$")
	public void register(){
		driver.findElement(By.xpath("//input[@id='register-button']")).click();
	}
	@And("^valid the message \"(.*)\"$")
	public void validatemessage(String Expected_message){
	
		String Actual_message = driver.findElement(By.xpath("//div[contains(text(), 'Your registration completed')]")).getText();
		System.out.println("System message is "+ Actual_message);
		Assert.assertEquals(Actual_message, Expected_message);
		System.out.println("Registered Successfully");
		
	}	
		
}




