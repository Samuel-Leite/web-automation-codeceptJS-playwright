/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login_page.js",
    homePage: "./pages/home_page.js",
    productPage: "./pages/product_page.js",
    cartPage: "./pages/cart_page.js",
  },
  name: 'web-codeceptjs'
}