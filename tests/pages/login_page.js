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
    if (process.env.DEVICE === 'Desktop Chrome HiDPI') {
      I.saveScreenshot('login-desktop.png')
      I.seeVisualDiff('login-desktop.png', {
        tolerance: 0,
        prepareBaseImage: false,
        needsSameDimension: true
      })
    } else if (process.env.DEVICE === 'iPad Mini') {
      I.saveScreenshot('login-tablet.png')
      I.seeVisualDiff('login-tablet.png', {
        tolerance: 0,
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
