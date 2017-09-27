package appModules;

import org.openqa.selenium.WebDriver;
import pageObjects.SearchByBookIdPage;

public class SearchByBookingID {
	
	public static void PopBookingID(WebDriver driver,String BookingID)
	{
		SearchByBookIdPage.txtbx_BookingID(driver).sendKeys(BookingID);
		SearchByBookIdPage.btn_Search(driver).click();
	}
	
	public static void ClickSearch(WebDriver driver)
	{
		SearchByBookIdPage.link_BookIdTitle(driver).click();
		System.out.println("TEST1");
		//SearchByBookIdPage.lbl_OrderStatus(driver).getText();
		System.out.println("TEST2");
	}

}
