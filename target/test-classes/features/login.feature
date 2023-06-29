# language: pt

@Regressivo
  Funcionalidade: Realizar Login
    Eu como usuário
    Quero realizar Login
    Para visualizar minhas informações


  @Test_Login
  @Positivo
  Cenário: Verificar se login é realizado corretamente
    Dado acesso a aplicacao
    Quando realizo login com usuario cadastrado
    Então valido se login e realizado com sucesso

  @Test_Login
  @Negativo
  Esquema do Cenário: Verificar se login com dados invalidos do tipo "<tipo>" não e concluido
    Dado acesso a aplicacao
    Quando realizo login com "<email>" e "<senha>"
    Então valido mensagem de erro "<mensagemErro>"
    Exemplos:
      |tipo                   |email          |senha       |mensagemErro                                              |
      |senha invalida         |test@email.br  |            |Error: Password is required.                              |
      |usuario não cadastrado |test@email.br  |@Senha12345 |Error: A user could not be found with this email address. |