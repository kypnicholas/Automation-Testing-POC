package appModule;

import org.openqa.selenium.WebDriver;
import pageObjects.Results_Page;

public class SelectItem_Action {
	
	public static void Execute(WebDriver driver){
		Results_Page.lnk_ResultPicked(driver).click();
	}

}
