# Comandos e configurações utilizados no projeto

## Inicialização do projeto:

npm init

## Instalação do codeceptjs na pasta do projeto:

npm install codeceptjs playwright --save

## Inicialização do codeceptjs:

npx codeceptjs init

## Gerar método de teste

npx codeceptjs gt

## Gerar Page Object

npx codeceptjs gpo

## Instalação do dotEnv (variáveis globais)

npm install dotenv --save
require('dotenv').config()

## Instalação do Visual Testing / Resemble

npm install codeceptjs-resemblehelper --save

{
   "helpers": {
     "ResembleHelper" : {
       "require": "codeceptjs-resemblehelper",
       "screenshotFolder" : "./tests/output/",
       "baseFolder": "./tests/screenshots/base/",
       "diffFolder": "./tests/screenshots/diff/"
     }
   }
}

I.saveScreenshot("image.png");
I.seeVisualDiff("image.png", {tolerance: 2, prepareBaseImage: false});

## Configuração do setWindowSize

npm i @codeceptjs/configure --save

// in codecept.conf.js
const { setWindowSize } = require('@codeceptjs/configure');

setWindowSize(1600, 1200);

## Configuração dos métodos BDD para os cenários

npx codeceptjs gherkin:init
npx codeceptjs gherkin:snippets

## Sugestões de extensões para BDD

BDD Highlighter
Snippets and Syntax Highlight for Gherkin (Cucumber)
Cucumber (Gherkin) Full Support

## Comandos para rodar a automação dos testes

npx codeceptjs run
npm run test (após cadastrar os comandos no script)

## Configuração de informações randômicas via NPM

npm install node-random-name
npm install random-number

## Relatorio Allure

npm install @codeceptjs/allure-legacy --save-dev
npx allure serve output

## Instalação do prettier e eslint

npm install prettier
npm install eslint -D
npm init @eslint/config
npm install eslint-config-airbnb-base
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev lint-staged

OBS.: Após executar os comandos acima, copiar as pastas: .eslintignore, .eslintrc.js, .prettierignore, .prettierrc e adicionar comandos na pasta package.json:
"scripts": {
"lint": "eslint src --max-warnings=0"
},
"lint-staged": {
"src/\*_/_": [
"npx lint --fix"
]
},

## Instalação do Husky

npm install husky --save-dev
npm install -g git-cz
npm install commitizen -g --force
npm install --save-dev git-cz

OBS.: Copiar as pastas: .husky, changelog.config.js e adicionar comandos na pasta package.json:
"scripts": {
"prepare": "husky install",
"precommit": "git add . ",
"commit": "git cz && node .husky/push.js",
},
