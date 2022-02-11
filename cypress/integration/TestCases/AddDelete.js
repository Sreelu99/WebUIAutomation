/// <reference types="cypress" />
import AddDeletepage from '../../integration/PageObjects/AddDeletepage'
import InternetHerokupage from '../../integration/PageObjects/InternetHerokupage'
it('Add/remove elements', () => {
    const addDeletepage = new AddDeletepage()
    const internetHerokupage= new InternetHerokupage()
    internetHerokupage.getAddDeleteElements()
    cy.contains('Add Element').click()
    addDeletepage.getSelectDeleteElement().should('be.visible').click()
    addDeletepage.getSelectDeleteElement().should('not.exist')
  });