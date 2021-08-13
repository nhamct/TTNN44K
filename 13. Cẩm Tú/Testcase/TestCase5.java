package Covid;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class TestCase5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	        System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Downloads\\chromedriver_win32\\chromedriver.exe");

	        WebDriver driver = new ChromeDriver();

	        driver.get("https://vnexpress.net/covid-19/covid-19-viet-nam");
	        driver.manage().window().maximize();

	        System.out.println("Top 5 bình luận quan tâm nhất có cụm từ 'cố lên' :");
			 driver.findElement(By.xpath("//*[@id=\"box_comment_vne\"]/div/div[3]/a[1]")).click();
			 driver.findElement(By.xpath("//*[@id=\"box_comment_vne\"]/div/div[7]/a")).click();
			 
			 List<WebElement> ListCmt = driver.findElements(By.className("content-comment"));
			 for(WebElement comment : ListCmt) 
			 {
				if(comment.getText().contains("Cố lên") || comment.getText().contains("cố lên"))
				{
					    String cmt = comment.getText().substring(0, comment.getText().indexOf("Trả lời"));
					    System.out.println("Tên: " + cmt + " like");
				}
			 }
		        driver.close();
	}
}
