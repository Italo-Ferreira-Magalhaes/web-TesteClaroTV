# language: pt

@Regressivo
  Funcionalidade: Realizar Cadastro
    Eu como usuário
    Quero realizar um cadastro
    Para utilizar o sistema


  @Tests_Cadastro
  @Positivo
  Esquema do Cenário: Verificar se cadastro de usuario com senha "<tipo>" é realizado corretamente
    Dado acesso a aplicacao
    Quando eu realizo cadastro de usuario com senha "<senha>" e "<politica_senha>"
    E confirmo cadastro
    Então valido cadastro realizado com sucesso
      Exemplos:
      |tipo     |senha        |politica_senha |
      |Medium   |@SenhaMedia  |Medium         |
      |Strong   |@SenhaStrong1|Strong         |

  @Tests_Cadastro
  @Negativo
  Esquema do Cenário: Verificar se cadastro de usuario com senha "<tipo>" não e concluido
    Dado acesso a aplicacao
    Quando eu realizo cadastro de usuario com senha "<senha>" e "<politica_senha>"
    Então valido que cadastro esta desabilitado
    Exemplos:
      |tipo       |senha        |politica_senha                                 |
      |Very Weak  |@Senh        |Weak - Please enter a stronger password.       |
      |Weak       |@Se          |Very weak - Please enter a stronger password.  |

  @Tests_Cadastro
  @Negativo
  Cenário: Verificar se cadastro de usuario com email inválido não e concluido
    Dado acesso a aplicacao
    Quando preencho as informacoes com email invalido
    Então valido mensagem de erro "Error: Please provide a valid email address."