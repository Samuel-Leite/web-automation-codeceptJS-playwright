/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./src/Utils/pages/login_page.js');
type homePage = typeof import('./src/Utils/pages/home_page.js');
type productPage = typeof import('./src/Utils/pages/product_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, productPage: productPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
