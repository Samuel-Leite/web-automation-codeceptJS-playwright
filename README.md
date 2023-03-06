# Projeto de automação de testes com codeceptjs e appium

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
npm install -g allure-commandline --save-dev
npx codeceptjs run --plugins allure
npx allure serve output

## Referenciar o formato dos campos ao mapear
. -> class
# - > id
~ -> acessibility id