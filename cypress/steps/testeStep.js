/// <reference types="Cypress" />
import LoginPage from "../pages/login_page";

const loginPage = new LoginPage();


Given(/^eu acesse a pagina da aplicação$/, () => {
    loginPage.acessHomePage()
});

When(/^e inserir meu "([^"]*)" e minha "([^"]*)"$/, (email,password) => {
    console.log(email,password);
    loginPage.acessLoginPage()
    loginPage.fillLoginInfo(email,password)
});

When(/^clicar no botão entrar$/, () => {
    loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (args1) => {
    console.log(args1);
    return true;
});
