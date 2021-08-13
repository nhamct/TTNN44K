package Covid;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
public class TestCase2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	        System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Downloads\\chromedriver_win32\\chromedriver.exe");

	        WebDriver driver = new ChromeDriver();
	        driver.get("https://vnexpress.net/covid-19/covid-19-viet-nam");
	        driver.manage().window().maximize();
	        
	        System.out.println("Tỷ lệ % số ca nhiễm tại 5 tỉnh thành:");
	        Select select = new Select(driver.findElement(By.id("compare_dropbox")));
			
			select.selectByVisibleText("Hà Nội");
			WebElement HaNoi = driver.findElement(By.xpath("//*[@id=\"detail-city\"]/div/div[3]/div[3]/span"));
			String hanoi = HaNoi.getText();
			System.out.println("Hà Nội: " + hanoi);
			
			select.selectByVisibleText("TP HCM");
			WebElement TPHCM = driver.findElement(By.xpath("//*[@id=\"detail-city\"]/div/div[3]/div[3]/span"));
	        String tphcm = TPHCM.getText();
	        System.out.println("TP HCM: " + tphcm);
			
	        select.selectByVisibleText("Đà Nẵng");
	        WebElement DaNang = driver.findElement(By.xpath("//*[@id=\"detail-city\"]/div/div[3]/div[3]/span"));
	        String danang = DaNang.getText();
	        System.out.println("Đà Nẵng :" + danang);
	        
			select.selectByVisibleText("Đăk Lăk");
			WebElement DakLak = driver.findElement(By.xpath("//*[@id=\"detail-city\"]/div/div[3]/div[3]/span"));
	        String daklak = DakLak.getText();
	        System.out.println("Đăk Lăk: " + daklak);
			
			select.selectByVisibleText("Bình Định");
			WebElement BinhDinh = driver.findElement(By.xpath("//*[@id=\"detail-city\"]/div/div[3]/div[3]/span"));
	        String binhdinh = BinhDinh.getText();
	        System.out.println("Bình Định: " + binhdinh);
	        driver.close();
	}

}
