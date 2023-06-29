package pages;

import org.openqa.selenium.By;
import runner.RunTest;

public class UsuarioPage extends RunTest {

    public UsuarioPage validarCadastro() {
        String validar = getDriver().findElement(By.cssSelector(".woocommerce-MyAccount-content > p:nth-child(1)")).getText();
        validar.contains("Hello");
        getDriver().findElement(By.linkText("Logout")).isDisplayed();

        return this;
    }

    public UsuarioPage validarLogin() {
        String validar = getDriver().findElement(By.cssSelector(".woocommerce-MyAccount-content > p:nth-child(1)")).getText();
        validar.contains("Hello");
        getDriver().findElement(By.linkText("Logout")).isDisplayed();

        return this;
    }

    public LoginECadastroPage realizarLogout() {
        getDriver().findElement(By.linkText("Logout")).click();
        getDriver().findElement(By.cssSelector(".register")).isDisplayed();

        return new LoginECadastroPage();
    }
}
