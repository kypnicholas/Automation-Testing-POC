package automationFW;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.AfterMethod;
import appModule.Search_Action;
import appModule.SortResults_Action;
import utility.Constant;

public class TestNG_Framework {

	public WebDriver driver;
	private static Logger Log = Logger.getLogger(TestNG_Framework.class.getName());

	@BeforeMethod
	public void beforeMethod() throws Exception {
		DOMConfigurator.configure("log4j2.xml");
    	System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");		//Directory of the Mozilla firefox drivers
		driver =new FirefoxDriver();														// Create a new instance of the FireFox driver
		Log.info("New driver instantiated");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
        driver.get(Constant.URL);
        Log.info("Web application launched");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);    
	}

	@Test
	public void main() throws Exception {		
		Search_Action.Execute(driver, Constant.SearchText);
		SortResults_Action.Execute(driver);
		//SelectItem_Action.Execute(driver);
    }

   @AfterMethod
   public void afterMethod() {
	    //driver.quit();
    }

}
