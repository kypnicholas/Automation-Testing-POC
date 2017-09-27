package appModules;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import pageObjects.LogInPage;
import utility.Constant;

public class EdenLogin {
	
	private static WebDriver driver;
	
	public static void startWebDriver(WebDriver driver,String sUsername, String sPassword)
	{
		
		System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");
		driver =new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(Constant.URL);
        
        /*LogInPage.txtbx_UserName(driver).sendKeys(sUsername);
        LogInPage.txtbx_Password(driver).sendKeys(sPassword);
        LogInPage.btn_LogIn(driver).click();*/
		
	}
	
}
