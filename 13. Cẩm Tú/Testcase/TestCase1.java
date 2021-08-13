package Covid;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestCase1 {

	public static void main(String[] args) {
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Downloads\\chromedriver_win32\\chromedriver.exe");

	        WebDriver driver = new ChromeDriver();

	        driver.get("https://vnexpress.net/covid-19/covid-19-viet-nam");
	        driver.manage().window().maximize();
	        WebElement ThoiGian = driver.findElement(By.xpath(("//html/body/section[4]/div/div[1]")));
	        String time=ThoiGian.getText();
	        System.out.println(""+time.substring(time.indexOf(".")+1));
	        
	        WebElement nhiem = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[1]/span[1]")));
	        WebElement TDnhiem = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[1]/span[2]")));
	        
	        WebElement khoi = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[2]/span[1]")));
	        WebElement TDkhoi = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[2]/span[2]")));
	        
	        WebElement tuvong = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[3]/span[1]")));
	        WebElement TDtuvong = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[3]/span[2]")));
	        
	        WebElement đangieutri = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[4]/span[1]")));
	        WebElement TDdangdieutri = driver.findElement(By.xpath(("//*[@id=\"total-all\"]/div[4]/span[2]")));
	        
	        
	        String Nhiem=nhiem.getText();
	        String TDNhiem=TDnhiem.getText();
	        System.out.println("Nhiễm "+Nhiem);
	        System.out.println(TDNhiem);
	        
	        String Khoi=khoi.getText();
	        String TDKhoi=TDkhoi.getText();
	        System.out.println("Khỏi "+Khoi);
	        System.out.println(TDKhoi);
	        
	        String TuVong=tuvong.getText();
	        String TDVong=TDtuvong.getText();
	        System.out.println("Tử vong "+TuVong);
	        System.out.println(TDVong);
	        
	        String Dang=đangieutri.getText();
	        String TDDang=TDdangdieutri.getText();
	        System.out.println("Đang điều trị "+Dang);
	        System.out.println(TDDang);
	        driver.close();
	}

}
