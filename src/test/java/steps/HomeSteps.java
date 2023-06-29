package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import pages.LoginECadastroPage;
import runner.RunTest;

public class HomeSteps extends RunTest {

    HomePage homePage = new HomePage();
    LoginECadastroPage loginECadastroPage = new LoginECadastroPage();


    @Dado("^acesso a aplicacao$")
    public void acesso_a_aplicacao() {
        homePage.acessoHome();

    }




}
