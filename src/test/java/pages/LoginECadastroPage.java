package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import runner.RunTest;
import support.Utils;

import static org.junit.Assert.assertEquals;


public class LoginECadastroPage extends RunTest {

    String email = Utils.getRandomEmail();

    HomePage homePage = new HomePage();
    UsuarioPage usuarioPage = new UsuarioPage();


    public LoginECadastroPage preencherEmailCadastro() {
        getDriver().findElement(By.id("reg_email")).clear();
        getDriver().findElement(By.id("reg_email")).sendKeys(email);

        return this;
    }

    public LoginECadastroPage preencherSenhaCadastro() {
        getDriver().findElement(By.id("reg_password")).clear();
        getDriver().findElement(By.id("reg_password")).sendKeys("@TesteTeste10");
        getDriver().findElement(By.id("reg_password")).sendKeys(Keys.ARROW_LEFT);
        //getDriver().findElement(By.id("reg_email")).click();
        Utils.waitElementBePresent(By.cssSelector(".woocommerce-password-strength"),10);

        return this;
    }

    public UsuarioPage clicarBtnRegister() {
        getDriver().findElement(By.name("register")).click();
        String validar = getDriver().findElement(By.cssSelector(".woocommerce-MyAccount-content > p:nth-child(1)")).getText();
        validar.contains("Hello");

        return new UsuarioPage();
    }

    public LoginECadastroPage preencherEmailLogin() {
        getDriver().findElement(By.id("username")).sendKeys(email);

        return this;
    }

    public LoginECadastroPage preencherSenhaLogin() {
        getDriver().findElement(By.id("password")).sendKeys("@TesteTeste10");

        return this;
    }

    public UsuarioPage clicarBtnLogin() {
        getDriver().findElement(By.name("login")).click();
        getDriver().findElement(By.linkText("Logout")).isDisplayed();

        return new UsuarioPage();
    }

    public LoginECadastroPage preencherSenhaCadastroComPolitica(String senha) {
        getDriver().findElement(By.id("reg_password")).clear();
        getDriver().findElement(By.id("reg_password")).sendKeys(senha);
        getDriver().findElement(By.id("reg_password")).sendKeys(Keys.ARROW_LEFT);
        //getDriver().findElement(By.id("reg_email")).click();
        Utils.waitElementBePresent(By.cssSelector(".woocommerce-password-strength"),10);

        return this;
    }

    public LoginECadastroPage validarPoliticaSenha(String politica_senha) {
        String valida_politica = getDriver().findElement(By.cssSelector(".woocommerce-password-strength")).getText();
        assertEquals(politica_senha, valida_politica);

        return this;
    }

    public UsuarioPage realizarLoginUsuarioCadastrado() {
        homePage.acessarCadastro();
        preencherEmailCadastro();
        preencherSenhaCadastro();
        clicarBtnRegister();
        usuarioPage.validarCadastro();
        usuarioPage.realizarLogout();
        preencherEmailLogin();
        preencherSenhaLogin();
        clicarBtnLogin();
        usuarioPage.validarLogin();

        return new UsuarioPage();
    }

    public LoginECadastroPage validarCadastroDesabilitado() {
        assertEquals(false, getDriver().findElement(By.name("register")).isEnabled());

        return this;
    }

    public LoginECadastroPage realizarCadastroComEmailInvalido() {
        getDriver().findElement(By.id("reg_email")).sendKeys("email@inval");
        getDriver().findElement(By.id("reg_password")).clear();
        getDriver().findElement(By.id("reg_password")).sendKeys("@SenhaMedia");
        getDriver().findElement(By.id("reg_password")).sendKeys(Keys.ARROW_LEFT);
        //getDriver().findElement(By.id("reg_email")).click();
        getDriver().findElement(By.name("register")).click();

        return this;
    }

    public LoginECadastroPage validarMensagemErro(String erroTela) {
        String mensagemErro = getDriver().findElement(By.cssSelector(".woocommerce-error > li")).getText();
        assertEquals(erroTela, mensagemErro);

        return this;
    }

    public LoginECadastroPage preencherInformacoesLoginInvalido(String email, String senha) {
        getDriver().findElement(By.id("username")).sendKeys(email);
        getDriver().findElement(By.id("password")).sendKeys(senha);
        getDriver().findElement(By.name("login")).click();

        return this;
    }

}
