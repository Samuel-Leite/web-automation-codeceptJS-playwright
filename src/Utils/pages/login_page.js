/* eslint-disable no-dupe-else-if */
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

  windowSize() {
    if (process.env.WINDOW_SIZE === '720 x 1280') {
      I.saveScreenshot('login-notebook.png')
      I.seeVisualDiff('login-notebook.png', {
        tolerance: 2,
        prepareBaseImage: false,
        needsSameDimension: true
      })
    } else if (process.env.WINDOW_SIZE === '768 x 1024') {
      I.saveScreenshot('login-tablet.png')
      I.seeVisualDiff('login-tablet.png', {
        tolerance: 2,
        prepareBaseImage: false,
        needsSameDimension: true
      })
    }
  },

  loginApp() {
    I.amOnPage('/')
    this.windowSize()
    I.waitForElement(this.fields.userName, 3)
    I.fillField(this.fields.userName, process.env.USER)
    I.fillField(this.fields.password, process.env.PASSWORD)
    I.click(this.button.enter)
    I.wait(2)
  }
}
