package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchByBookIdPage {
	
	private static WebElement element = null;
	
	public static WebElement txtbx_BookingID(WebDriver driver)
    {
         element = driver.findElement(By.name("$PpyDisplayHarness$pTDLSData$pBookingID"));
         return element;
    }
	
	public static WebElement btn_Search(WebDriver driver)
    {
         element = driver.findElement(By.name("EdenSearchFields_pyDisplayHarness_28"));
         return element;
    }
	
	public static WebElement link_BookIdTitle(WebDriver driver)
    {
         element = driver.findElement(By.xpath(".//*[@id='$PpgRepPgSubSectionSearchResultsGridB$ppxResults$l1']/td[2]/div/a"));
         return element;
    }
	/*
	public static WebElement lbl_OrderStatus(WebDriver driver)
    {
         element = driver.findElement(By.xpath(".//*[@id='RULE_KEY']/div[2]/div/div/div[4]/div/div/div/div/div[2]/div/div"));
         return element;
    }
	*/
}
