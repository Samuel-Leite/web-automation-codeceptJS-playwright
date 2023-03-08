// variable global
const { loginPage, homePage, productPage, cartPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'

Given('that I am logged into Swag Labs over the internet', () => {
    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
});

When('I add the Backpack to the cart over the internet', () => {
    productPage.addBackpackToCart()
    productPage.backMenu()
});

When('I add the Bike Light to the cart over the internet', () => {
    productPage.addBikeLightToCart()
    productPage.backMenu()
});

When('I add the Bolt T-Shirt to the cart over the internet', () => {
    productPage.addBoltTShirtToCart()
    productPage.backMenu()
});

When('I add the Fleece Jacket to the cart over the internet', () => {
    productPage.addFleeceJacketToCart()
    productPage.backMenu()
});

When('I add the Onesie to the cart over the internet', () => {
    productPage.addOnesieToCart()
    productPage.backMenu()
});

When('I add the T-Shirt RED to the cart over the internet', () => {
    productPage.addTShirtREDToCart()
    productPage.backMenu()
});

When('fill in all payment details over the internet', () => {
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
});

Then('the payment is completed successfully over the internet', () => {
    cartPage.completePayment()
});