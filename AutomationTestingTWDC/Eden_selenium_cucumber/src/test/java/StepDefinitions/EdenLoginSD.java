package StepDefinitions;
import org.openqa.selenium.WebDriver;

import appModules.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.*;
import utility.Constant;

public class EdenLoginSD {
	
	private static WebDriver driver;
	
	@When("^user is on Eden login screen$")
	public void user_is_on_Eden_login_screen() throws Throwable {
		EdenLogin.startWebDriver(driver, Constant.Username,Constant.Password);
	}

	@When("^user types in correct username and password$")
	public void user_types_in_correct_username_and_password() throws Throwable {
		SearchByBookingID.PopBookingID(driver, Constant.BookingID);
	}

	@When("^user clicks on Sign in button$")
	public void user_clicks_on_Sign_in_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^user is displayed Eden homepage$")
	public void user_is_displayed_Eden_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

}
