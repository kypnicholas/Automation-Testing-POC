package autoFW;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import appModules.EdenLogin;
import appModules.SearchByBookingID;
import utility.Constant;

public class Global_Var_TC {
	
	private static WebDriver driver = null;
	private static Logger Log = Logger.getLogger(Global_Var_TC.class.getName());
	 
    public static void main(String[] args) throws InterruptedException {
    	
    	DOMConfigurator.configure("log4j2.xml");
    	
    	System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");
		driver =new FirefoxDriver();
		Log.info("New driver instantiated");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
        driver.get(Constant.URL);
        Log.info("Web application launched");

        // Login
        Log.info("Calling EdenLogin");
        EdenLogin.startWebDriver(driver, Constant.Username,Constant.Password);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); 
        
        Log.info("Calling SearchByBookingID - To test Clear Search");
        SearchByBookingID.PopBookingID(driver, Constant.BookingID);
        SearchByBookingID.ClearSearch(driver);
        Thread.sleep(3000);
        SearchByBookingID.ClickSearch(driver);
        Thread.sleep(3000);
        
        //Search for Order by Booking ID
        Log.info("Calling SearchByBookingID");
        SearchByBookingID.PopBookingID(driver, Constant.BookingID);
        SearchByBookingID.ClickSearch(driver);
        Thread.sleep(3000);
        SearchByBookingID.SelectBooking(driver);        
        
        //driver.quit();
       }

}
