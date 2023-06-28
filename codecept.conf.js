const { devices } = require('playwright')

/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      browser: 'chromium',
      emulate: devices[process.env.DEVICE]
    },
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      baseFolder: './helpers/resemble/base/',
      diffFolder: './helpers/resemble/diff/'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './tests/pages/login_page.js',
    homePage: './tests/pages/home_page.js',
    productPage: './tests/pages/product_page.js',
    cartPage: './tests/pages/cart_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/features/web.feature',
    steps: ['./tests/step_definitions/web_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  // tests: './tests/steps/web_test.js',
  name: 'web-codeceptjs'
}
