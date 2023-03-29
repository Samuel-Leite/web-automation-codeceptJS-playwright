/* eslint-disable no-undef */
Feature('Buying products on Swag Labs')

const { loginPage, homePage, productPage, cartPage, qaConfig } = inject()
const name = require('../Utils/variableRandom/randomName')
const code = require('../Utils/variableRandom/randomNumber')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Before(() => {
  loginPage.loginApp(qaConfig.swagLabs.credencials.valid, qaConfig.swagLabs.passwords.valid)
  homePage.checkLoginSuccess()
})

After(() => {
  productPage.backMenu()
  homePage.checkCart()
  cartPage.checkoutProduct()
  cartPage.dataBuyer(firstName, lastName, postalCode)
  cartPage.completePayment()
})

Scenario('Buy Sauce Labs Backpack by web with success', () => {
  productPage.addBackpackToCart()
})

Scenario('Buy Sauce Labs Bike Light by web with success', () => {
  productPage.addBikeLightToCart()
})

Scenario('Buy Sauce Labs Bolt T-Shirt by web with success', () => {
  productPage.addBoltTShirtToCart()
})

Scenario('Buy Sauce Labs Fleece Jacket by web with success', () => {
  productPage.addFleeceJacketToCart()
})

Scenario('Buy Sauce Labs Onesie by web with success', () => {
  productPage.addOnesieToCart()
})

Scenario('Buy T-Shirt RED by web with success', () => {
  productPage.addTShirtREDToCart()
})
