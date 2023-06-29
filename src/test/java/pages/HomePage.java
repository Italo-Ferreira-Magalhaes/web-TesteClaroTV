package pages;

import org.openqa.selenium.By;
import static org.junit.Assert.*;
import runner.RunTest;


public class HomePage extends RunTest {

    public HomePage acessoHome() {
        getDriver("chrome").get("https://practice.automationtesting.in");
        getDriver().manage().window().maximize();
        assertEquals("Não acessou o site",true, getDriver().findElement(By.cssSelector("#site-logo img")).isDisplayed());

        return this;
    }

    public LoginECadastroPage acessarCadastro() {
        getDriver().findElement(By.linkText("My Account")).click();
        getDriver().findElement(By.cssSelector(".register")).isDisplayed();

        return new LoginECadastroPage();
    }


}
