/* eslint-disable no-undef */
const { I } = inject()

/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()

module.exports = {
  fields: {
    userName: '//input[@id = "user-name"]',
    password: '//input[@id = "password"]'
  },

  button: {
    enter: '//input[@id = "login-button"]'
  },

  loginApp() {
    I.amOnPage('/')
    I.saveScreenshot('login-tablet.png')
    I.seeVisualDiff('login-tablet.png', { tolerance: 2, prepareBaseImage: false })
    I.waitForElement(this.fields.userName, 3)
    I.fillField(this.fields.userName, process.env.USER)
    I.fillField(this.fields.password, process.env.PASSWORD)
    I.click(this.button.enter)
    I.wait(2)
  }
}
