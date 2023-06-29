package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Então;
import pages.UsuarioPage;
import runner.RunTest;
import support.ScreenshotUtils;

public class UsuarioSteps extends RunTest {

    UsuarioPage usuarioPage = new UsuarioPage();

    @Então("^valido cadastro realizado com sucesso$")
    public void valido_cadastro_realizado_com_sucesso() {
        usuarioPage.validarCadastro();

    }

    @Então("^valido se login e realizado com sucesso$")
    public void valido_se_login_e_realizado_com_sucesso() {
        usuarioPage.validarLogin();
    }

    @After
    public static void takeScreenshotAfterScenario(Scenario scenario) {
        ScreenshotUtils.addScreenshotOnScenario(scenario);
    }
}
