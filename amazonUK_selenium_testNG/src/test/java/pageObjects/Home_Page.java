package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Home_Page {
	
	private static WebElement element = null;
	 
	public static WebElement txtbx_SearchBox(WebDriver driver){
		//element = driver.findElement(By.xpath(".//*[@id='gh-ac']"));
		element = driver.findElement(By.xpath(".//*[@id='twotabsearchtextbox']"));
		return element;
	}
	
	public static WebElement btn_Search(WebDriver driver)
    {
        //element = driver.findElement(By.xpath(".//*[@id='gh-btn']"));
        element = driver.findElement(By.xpath(".//*[@id='nav-search']/form/div[2]/div/input"));
        return element;
   }
	 
	 

}
