package appModules;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import pageObjects.SearchByBookIdPage;

public class SearchByBookingID {

	public static void ClearSearch(WebDriver driver) 
	{
		SearchByBookIdPage.btn_ClearSearch(driver).click();
	}

	public static void PopBookingID(WebDriver driver,String BookingID)
	{
		SearchByBookIdPage.txtbx_BookingID(driver).sendKeys(BookingID);
	}
	
	public static void ClickSearch(WebDriver driver)
	{
		SearchByBookIdPage.btn_Search(driver).click();
	}
	
	public static void SelectBooking(WebDriver driver) throws InterruptedException
	{
		SearchByBookIdPage.link_BookIdTitle(driver).click();

		//SearchByBookIdPage.lbl_OrderStatus(driver).getText();
	}

}
