/// <reference types="cypress" />
import InternetHerokupage from '../../integration/PageObjects/InternetHerokupage'
it('BrokenImages', () => {
    const internetHerokupage = new InternetHerokupage();
    cy.intercept('GET', '/asdf.jpg').as('BrokenImage1')
    cy.intercept('GET', '/hjkl.jpg').as('BrokenImage2')
    cy.intercept('GET', '/img/avatar-blank.jpg').as('avatar')
    internetHerokupage.getBrokenImages()
    cy.wait('@BrokenImage1').its('response.statusCode').should('eq', 404)
    cy.wait('@BrokenImage2').its('response.statusCode').should('eq', 404) 
  
  });