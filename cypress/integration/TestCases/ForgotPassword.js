/// <reference types="cypress" />
import ForgotPasswordpage from '../../integration/PageObjects/ForgotPasswordpage'
import InternetHerokupage from '../../integration/PageObjects/InternetHerokupage'
it('ForgotPassword', () => {
    const forgotPasswordpage = new ForgotPasswordpage()
    const internetHerokupage= new InternetHerokupage()
    internetHerokupage.getForgotPassword()
    forgotPasswordpage.getEmail().type('abc@gmail.com')
    forgotPasswordpage.getSubmitform().click()
    cy.contains('Internal Server Error').should('be.visible')
  });