package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LogInPage {
	
	private static WebElement element = null;
	 
    public static WebElement txtbx_UserName(WebDriver driver)
    {
         element = driver.findElement(By.id("txtUserID"));
         return element;
    }
 
    public static WebElement txtbx_Password(WebDriver driver)
    {
        element = driver.findElement(By.id("txtPassword"));
        return element;
    }
 
    public static WebElement btn_LogIn(WebDriver driver)
    {
         element = driver.findElement(By.id("sub"));
         return element;
    }
    

}
