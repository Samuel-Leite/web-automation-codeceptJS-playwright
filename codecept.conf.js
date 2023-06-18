const { devices } = require('playwright')

/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      // browser: 'chromium',
      emulate: devices[process.env.DEVICE]
    },
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      baseFolder: './src/Utils/images/base/',
      diffFolder: './src/Utils/images/diff/'
    }
  },
  multiple: {
    chrome: {
      browsers: ['chrome']
    },
    firefox: {
      browsers: ['firefox']
    },
    safari: {
      browsers: ['webkit']
    },
    parallel: {
      // Splits tests into chunks
      // for example: 2 chunks x 6 browsers = 12 threads
      chunks: 2,
      // run all tests in each browser:
      browsers: ['chromium', 'firefox', 'webkit']
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './src/Utils/pages/login_page.js',
    homePage: './src/Utils/pages/home_page.js',
    productPage: './src/Utils/pages/product_page.js',
    cartPage: './src/Utils/pages/cart_page.js',
    qaConfig: './src/configs/qa.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/web.feature',
    steps: ['./src/step_definitions/web_steps.js']
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
  // tests: './src/tests/*_test.js',
  name: 'web-codeceptjs'
}
