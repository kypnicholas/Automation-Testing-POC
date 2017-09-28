package appModule;

import org.openqa.selenium.WebDriver;

import pageObjects.Home_Page;
import utility.Constant;

public class Search_Action {
	
	public static void Execute(WebDriver driver,String searchText) throws InterruptedException {
		//Thread.sleep(3000);
		Home_Page.txtbx_SearchBox(driver).sendKeys(Constant.SearchText);		//Enter search text
		Home_Page.btn_Search(driver).click();									//Click on the 'Search' button
	}

}
