$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastro.feature");
formatter.feature({
  "name": "Realizar Cadastro",
  "description": "    Eu como usuário\n    Quero realizar um cadastro\n    Para utilizar o sistema",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Regressivo"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verificar se cadastro de usuario com senha \"\u003ctipo\u003e\" é realizado corretamente",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Positivo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "name": "eu realizo cadastro de usuario com senha \"\u003csenha\u003e\" e \"\u003cpolitica_senha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "confirmo cadastro",
  "keyword": "E "
});
formatter.step({
  "name": "valido cadastro realizado com sucesso",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo",
        "senha",
        "politica_senha"
      ]
    },
    {
      "cells": [
        "Medium",
        "@SenhaMedia",
        "Medium"
      ]
    },
    {
      "cells": [
        "Strong",
        "@SenhaStrong1",
        "Strong"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verificar se cadastro de usuario com senha \"Medium\" é realizado corretamente",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Positivo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu realizo cadastro de usuario com senha \"@SenhaMedia\" e \"Medium\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_cadastro_de_usuario_com_senha_e_politica(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmo cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "LoginECadastroSteps.confirmo_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido cadastro realizado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "UsuarioSteps.valido_cadastro_realizado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar se cadastro de usuario com senha \"Strong\" é realizado corretamente",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Positivo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu realizo cadastro de usuario com senha \"@SenhaStrong1\" e \"Strong\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_cadastro_de_usuario_com_senha_e_politica(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmo cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "LoginECadastroSteps.confirmo_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido cadastro realizado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "UsuarioSteps.valido_cadastro_realizado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verificar se cadastro de usuario com senha \"\u003ctipo\u003e\" não e concluido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "name": "eu realizo cadastro de usuario com senha \"\u003csenha\u003e\" e \"\u003cpolitica_senha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "valido que cadastro esta desabilitado",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo",
        "senha",
        "politica_senha"
      ]
    },
    {
      "cells": [
        "Very Weak",
        "@Senh",
        "Weak - Please enter a stronger password."
      ]
    },
    {
      "cells": [
        "Weak",
        "@Se",
        "Very weak - Please enter a stronger password."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verificar se cadastro de usuario com senha \"Very Weak\" não e concluido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu realizo cadastro de usuario com senha \"@Senh\" e \"Weak - Please enter a stronger password.\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_cadastro_de_usuario_com_senha_e_politica(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que cadastro esta desabilitado",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginECadastroSteps.valido_que_cadastro_esta_desabilitado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar se cadastro de usuario com senha \"Weak\" não e concluido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu realizo cadastro de usuario com senha \"@Se\" e \"Very weak - Please enter a stronger password.\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_cadastro_de_usuario_com_senha_e_politica(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que cadastro esta desabilitado",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginECadastroSteps.valido_que_cadastro_esta_desabilitado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar se cadastro de usuario com email inválido não e concluido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Tests_Cadastro"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho as informacoes com email invalido",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.preencho_as_informacoes_com_email_invalido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de erro \"Error: Please provide a valid email address.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginECadastroSteps.valido_mensagem_de_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "name": "Realizar Login",
  "description": "    Eu como usuário\n    Quero realizar Login\n    Para visualizar minhas informações",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Regressivo"
    }
  ]
});
formatter.scenario({
  "name": "Verificar se login é realizado corretamente",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Test_Login"
    },
    {
      "name": "@Positivo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizo login com usuario cadastrado",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_login_com_usuario_cadastrado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido se login e realizado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "UsuarioSteps.valido_se_login_e_realizado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verificar se login com dados invalidos do tipo \"\u003ctipo\u003e\" não e concluido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Test_Login"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "name": "realizo login com \"\u003cemail\u003e\" e \"\u003csenha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "valido mensagem de erro \"\u003cmensagemErro\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo",
        "email",
        "senha",
        "mensagemErro"
      ]
    },
    {
      "cells": [
        "senha invalida",
        "test@email.br",
        "",
        "Error: Password is required."
      ]
    },
    {
      "cells": [
        "usuario não cadastrado",
        "test@email.br",
        "@Senha12345",
        "Error: A user could not be found with this email address."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verificar se login com dados invalidos do tipo \"senha invalida\" não e concluido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Test_Login"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizo login com \"test@email.br\" e \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_login_com_informacoes_invalidas(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de erro \"Error: Password is required.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginECadastroSteps.valido_mensagem_de_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar se login com dados invalidos do tipo \"usuario não cadastrado\" não e concluido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Regressivo"
    },
    {
      "name": "@Test_Login"
    },
    {
      "name": "@Negativo"
    }
  ]
});
formatter.step({
  "name": "acesso a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_a_aplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizo login com \"test@email.br\" e \"@Senha12345\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginECadastroSteps.realizo_login_com_informacoes_invalidas(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de erro \"Error: A user could not be found with this email address.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginECadastroSteps.valido_mensagem_de_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
});