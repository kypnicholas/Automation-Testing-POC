package appModule;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class SortResults_Action {
	
	public static void Execute(WebDriver driver){
		Select oSelect = new Select(driver.findElement(By.xpath(".//*[@id='sort']")));		//Locate the appropriate dropdown menu
		oSelect.selectByVisibleText("Price: High to Low");										//Pass the value to select
		//oSelect.selectByIndex(2);
	}

}
