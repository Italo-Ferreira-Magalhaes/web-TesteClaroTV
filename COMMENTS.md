*PROJETO DE AUTOMAÇÃO WEB*

*TESTE CLARO TV+*

Criador: Italo Ferreira Magalhães

Automação WEB em Java com Selenium(v3.141.59), Junit(v2.3.1), Cucumber(v2.3.1) e Maven(v4.0.0)
Relatório: trivago (Cluecumber v2.8.0) com evidências.

Projeto criado para execução via chromedriver (v114.0.5735.135) estruturado em PageObject para melhor organização e aproveitamento de códigos


Melhorias a serem aplicadas:

- Utilização de webdriver manager e chrome options para menor retrabalho em caso de atualização da versão do navegador;
- Utilização de Actions no java caso algum servidor não estava disponível no momento da execução dos testes e alguns funções não estiverem disponíveis.

*GERAÇÃO DE RELATÓRIO E EVIDÊNCIAS*

Execução via terminal com os códigos abaixo:

Execução dos testes(criação json):
- mvn test -Dtest=RunTest -Dbrowser=chrome;

Criação do HTML consumindo JSON criado no passo anterior:
Após a execução anterior, seguir com o código abaixo para gerar o html:
- mvn cluecumber-report:reporting


Relatório será criado na pasta "target/formated-report/index.html" contendo as evidências no próprio relatório.



