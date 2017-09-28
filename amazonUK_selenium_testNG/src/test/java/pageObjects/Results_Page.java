package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Results_Page {
	
	private static WebElement element = null;
	
	public static WebElement dd_dropdown(WebDriver driver){
		element = driver.findElement(By.xpath(".//*[@id='DashSortByContainer']/ul[1]/li/a"));
		return element;
	}
	
	public static WebElement lnk_ResultPicked(WebDriver driver) {
		element = driver.findElement(By.xpath(".//*[@id='result_0']/div/div/div/div[1]/div/div/a/img"));
		return element;
	}
}
