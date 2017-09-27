package autoFW;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import appModules.EdenLogin;

public class Param_TC {
	
	private static WebDriver driver = null;
	 
    public static void main(String[] args) {
    	
    	System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");
		driver =new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        driver.get("https://disneyuk-stg1.pegacloud.io/prweb/");

        // Pass the Arguments (Username and Password) to this method
        //EdenLogin.startWebDriver(driver, "","");

        //SearchOrderByBookingID --> DO NEXT
        
        
        //driver.quit();
       }
	
}
