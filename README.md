# Projeto de automação de testes Web utilizando o framework CodeceptJS

Projeto de automação para aplicação Web utilizando o framework CodeceptJS, Playwright como helper. A automação utilizou o site Swag Labs aplicando automação com códigos, BDD, testes visuais, variáveis randômicas, execução dos testes de forma paralela com diferentes browsers ao mesmo tempo e entre outras configurações contemplando as boas práticas do mercado.

# Pré-Requisitos:

VS Code
Node.js

## Extensões utilizados no projeto

BDD Highlighter
Cucumber (Gherkin) Full Support
ES6 Mocha Snippets
ESLint
Prettier - Code formatter

## Estrutura do Projeto

./.husky
Pasta com as configurações do husky

./output:
Evidências da execução dos testes

./src/features/:
Constam os cenários de testes escritos em BDD

./src/step_definitions/:
Responsável pelos steps versus BDD

./src/tests/:
Constam os cenários de testes sem a utilização do BDD

./src/Utils/images:
Pastas concernentes aos testes visuais

./src/Utils/pages:
Responsável pelos mapeamento das páginas dos testes

./src/Utils/variableRandom:
Responsável por gerar nomes e números randômicos durante a execução dos testes

.env:
Pasta contendo as variáveis globais do projeto