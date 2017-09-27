package appModules;
import org.junit.Test;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import autoFW.Global_Var_TC;
import pageObjects.LogInPage;
import utility.ExcelUtils;

public class EdenLogin {
	
	private static Logger Log = Logger.getLogger(EdenLogin.class.getName());
	/*
	//Use when retrieving info from EXCEL (i.e. when running Apache_POI)
	public static void startWebDriver(WebDriver driver) throws Exception
	{
		String sUsername = ExcelUtils.getCellData(2, 2); 		//only necessary if passing User and Pass from Excel
		String sPassword = ExcelUtils.getCellData(2, 3); 		//

        LogInPage.txtbx_UserName(driver).sendKeys(sUsername);
        LogInPage.txtbx_Password(driver).sendKeys(sPassword);
        LogInPage.btn_LogIn(driver).click();
		
	}
	*/
	
	//Use with Global Variables and NOT EXCEL (i.e. when running Global_Var)
	public static void startWebDriver(WebDriver driver,String sUsername, String sPassword)
	{
        LogInPage.txtbx_UserName(driver).sendKeys(sUsername);
        LogInPage.txtbx_Password(driver).sendKeys(sPassword);
        
        LogInPage.btn_LogIn(driver).click();
        Log.info("Username and Password entered successfully");
        Log.info("Click action performed on Submit button");
	}
	
}
