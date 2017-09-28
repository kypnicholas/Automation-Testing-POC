package automationFW;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import appModule.Search_Action;
import utility.Constant;

public class Global_Var_TC {

	private static WebDriver driver = null;
	private static Logger Log = Logger.getLogger(Global_Var_TC.class.getName());
	
	public static void main(String[] args) throws Exception {
		
		DOMConfigurator.configure("log4j2.xml");
	
    	System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");
		driver =new FirefoxDriver();
		Log.info("New driver instantiated");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
        driver.get(Constant.URL);
        Log.info("Web application launched");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		// Launch the Online Store Website using Constant Variable		
		//driver.get(Constant.URL);
		
		// Pass Constant Variables as arguments to Execute method
		Search_Action.Execute(driver, Constant.SearchText);
		
		System.out.println("Login Successfully, now it is the time to Log Off buddy.");
		
		//Home_Page.lnk_LogOut(driver).click();
		
		driver.quit();
	
	}

}