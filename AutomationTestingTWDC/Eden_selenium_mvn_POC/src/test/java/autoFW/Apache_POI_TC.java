package autoFW;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import appModules.EdenLogin;
import utility.Constant;
import utility.ExcelUtils;


public class Apache_POI_TC {
	
	private static WebDriver driver = null;
	 
    public static void main(String[] args) throws Exception {
    	
    	ExcelUtils.setExcelFile(Constant.Path_TestData + Constant.File_TestData,"Sheet1"); 		//This is to open the Excel file. Excel path, file name and the sheet name are parameters to this method
    	
    	System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");
		driver =new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        driver.get(Constant.URL);

        // Pass the Arguments (Username and Password) to this method
        //EdenLogin.startWebDriver(driver);
        
        ExcelUtils.setCellData("Pass", 1, 3);		//This is to send the PASS value to the Excel sheet in the result column.

        //SearchOrderByBookingID --> DO NEXT
        
        //driver.quit();
       }

}
