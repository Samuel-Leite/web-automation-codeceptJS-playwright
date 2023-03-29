exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.saucedemo.com",
      show: true,
      browser: "chromium",
    },
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./src/pages/login_page.js",
    homePage: "./src/pages/home_page.js",
    productPage: "./src/pages/product_page.js",
    cartPage: "./src/pages/cart_page.js",
    qaConfig: "./src/configs/qa.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./src/features/web.feature",
    steps: ["./src/step_definitions/web_steps.js"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  // tests: './src/tests/*_test.js',
  name: "web-codeceptjs",
};
