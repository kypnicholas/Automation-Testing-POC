package appModules;
import java.util.concurrent.TimeUnit;
import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;


import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class InitialTest {
	
	WebDriver driver;
	@Test
	public void startWebDriver() throws Exception{
			
		//OPEN LINK IN FIREFOX
		System.setProperty("webdriver.gecko.driver", "C:\\Drivers\\geckodriver.exe");
		driver =new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		
		//OPEN LINK IN I.E.
		/*
		DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
		capabilities.setCapability(InternetExplorerDriver.
		INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
		capabilities.setCapability("ignoreZoomSetting", true);
		capabilities.setCapability("cleansession", true);
		capabilities.setCapability("nativeEvents", false);
		System.setProperty("webdriver.ie.driver", "C:\\Drivers\\IEDriverServer.exe");
		driver=new InternetExplorerDriver(capabilities);
		//driver.get("http://google.co.uk");
		//driver.get("https://disneyuk-dt2.pegacloud.io/prweb/");
		 */	
		
		EdenLogin();
		
		//Type in Booking ID and click Search
		driver.findElement(By.name("$PpyDisplayHarness$pTDLSData$pBookingID")).sendKeys("3977123");
		driver.findElement(By.name("EdenSearchFields_pyDisplayHarness_28")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	//Implicitly wait 10 seconds before next action
		
		//After results are loaded, click on the specified Order to open
		driver.findElement(By.xpath(".//*[@id='$PpgRepPgSubSectionSearchResultsGridB$ppxResults$l1']/td[2]/div/a")).click();
		
		//getscreenshot();
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("c://test.png"), true);
		
		System.out.println("TEST NK22");
		
		//driver.close();
	}
	
	public void EdenLogin()
	{
		driver.get("https://disneyuk-stg1.pegacloud.io/prweb/");
		driver.findElement(By.id("txtUserID")).sendKeys("edenadmin");
		driver.findElement(By.id("txtPassword")).sendKeys("install");
		driver.findElement(By.id("sub")).click();
		//Explicitly wait for the element to appear on screen
		new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.name("$PpyDisplayHarness$pTDLSData$pBookingID")));
		
	}
	
	/*
	public void getscreenshot() throws Exception 
    {
		System.out.println("TEST NK");
        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        //The below method will save the screen shot in d drive with name "screenshot.png"
        FileUtils.copyFile(scrFile, new File("C:\\screenshot.png"));
        System.out.println("TEST NK22");
    }
	*/
}
