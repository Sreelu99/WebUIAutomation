/// <reference types="cypress" />

it('BasicAuth', () => {
    cy.visit('/basic_auth', {
        auth: {
          username: 'admin',
          password: 'admin'
        }
      })
    cy.contains('Congratulations! You must have the proper credentials.').should('be.visible')
  
  });
  