package Covid;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class TestCase4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	        System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Downloads\\chromedriver_win32\\chromedriver.exe");

	        WebDriver driver = new ChromeDriver();

	        driver.get("https://vnexpress.net/covid-19/vaccine");
	    	driver.manage().window().maximize();
	    	
	    	WebElement Vaccine = driver.findElement(By.xpath("//a[@href='/covid-19/vaccine']"));
			Vaccine.click();
			
			WebElement Radio = driver.findElement(By.xpath("//*[@id=\"option-vax-percent\"]"));
			boolean status = Radio.isSelected();
			if (status == false) {
				Radio.click();
			}
	        System.out.println("Dữ liệu tiêm Vaccine của 5 tỉnh thành:");
			WebElement MoreBtn = driver.findElement(By.xpath("//*[@id=\"widget-covid-06-v3\"]/div[5]"));
			boolean stt = MoreBtn.isDisplayed();
			if (stt == true) {
				MoreBtn.click();
			}

			WebElement table = driver.findElement(By.id("total_vaccine_province"));

			List<WebElement> list = table.findElements(By.tagName("ul"));	 
				for(WebElement City : list) 
			    {

			    	if(City.getText().contains("TP HCM") || City.getText().contains("Đà Nẵng") ||
			    	City.getText().contains("Hà Nội") || City.getText().contains("Đăk Lăk") || City.getText().contains("Hà Tĩnh"))
			    	{
							System.out.println(City.getText());
			    	}
			    }	
		        driver.close();
		}

}
