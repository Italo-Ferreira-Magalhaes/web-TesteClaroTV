package steps;

import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import pages.LoginECadastroPage;
import runner.RunTest;

public class LoginECadastroSteps extends RunTest {

    LoginECadastroPage loginECadastroPage = new LoginECadastroPage();
    HomePage homePage = new HomePage();


    @Quando("^realizo login com usuario cadastrado$")
    public void realizo_login_com_usuario_cadastrado() {
        loginECadastroPage.realizarLoginUsuarioCadastrado();
    }

    @Então("^valido que cadastro esta desabilitado$")
    public void valido_que_cadastro_esta_desabilitado() {
        loginECadastroPage.validarCadastroDesabilitado();
    }

    @Quando("^preencho as informacoes com email invalido$")
    public void preencho_as_informacoes_com_email_invalido() {
        homePage.acessarCadastro();
        loginECadastroPage.realizarCadastroComEmailInvalido();
    }

    @Então("^valido mensagem de erro \"([^\"]*)\"$")
    public void valido_mensagem_de_erro(String erroTela) {
        loginECadastroPage.validarMensagemErro(erroTela);
    }

    @Quando("^realizo login com \"([^\"]*)\" e \"([^\"]*)\"$")
    public void realizo_login_com_informacoes_invalidas(String email, String senha) {
        homePage.acessarCadastro();
        loginECadastroPage.preencherInformacoesLoginInvalido(email, senha);

    }

    @Quando("^eu realizo cadastro de usuario com senha \"([^\"]*)\" e \"([^\"]*)\"$")
    public void realizo_cadastro_de_usuario_com_senha_e_politica(String senha, String politica_senha) {
        homePage.acessarCadastro();
        loginECadastroPage.preencherEmailCadastro();
        loginECadastroPage.preencherSenhaCadastroComPolitica(senha);
        loginECadastroPage.validarPoliticaSenha(politica_senha);

    }

    @E("^confirmo cadastro$")
    public void confirmo_cadastro() {
        loginECadastroPage.clicarBtnRegister();
    }


}
