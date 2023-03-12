# Projeto de automação de testes com CodeceptJS e Playwright

# Pré-Requisitos:
Java 11 JDK,
VS Code

## Estrutura do Projeto
./features/web.feature:
Constam os cenários de testes escritos em BDD para execução

./output:
Evidências da execução dos testes

./pages:
Responsável pelos mapeamento das páginas dos testes

./step_definitions/web_steps:
Responsável pelos steps versus BDD

./test/web_test.js:
Constam os cenários de testes para execução sem BDD

./Utils/name.js:
Responsável por gerar nomes randômicos durante a execução dos testes da API

./Utils/code.js:
Responsável por gerar números randômicos durante a execução dos testes da API

# Observações:
Faça o donwload do template no repositório de código para utilizar no seu projeto em especifico, feito isso, fique a vontande para usufruir dos recursos disponíveis e também customizar de acordo com sua necessidade.

# Comandos utilizados durante a construção da automação de API com CodeceptJS

## Inicialização do projeto:
npm init

## Instalação do codeceptjs na pasta do projeto:
npm i playwright@^1.18 --save

## Inicialização do codeceptjs:
npx codeceptjs init

## Gerar outro método de teste
npx codeceptjs gt

## Gerar Page Object
npx codeceptjs gpo

## Configuração e os métodos BDD para os cenários
npx codeceptjs gherkin:init
npx codeceptjs gherkin:snippets

## Sugestões de extensões para BDD
BDD Highlighter
Snippets and Syntax Highlight for Gherkin (Cucumber)
Cucumber (Gherkin) Full Support

## Comandos para rodar a automação dos testes
npx codeceptjs run

## Configuração de informações randômicas via NPM
npm install node-random-name
npm install random-number

## Relatorio Allure
npm install @codeceptjs/allure-legacy --save-dev
npx allure serve output

## Instalação do YAML
npm i js-yaml