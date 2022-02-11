/// <reference types="cypress" />
import Checkboxespage from '../../integration/PageObjects/Checkboxespage'
import InternetHerokupage from '../../integration/PageObjects/InternetHerokupage'
it('Checkboxes', () => {
  const internetHerokupage =new InternetHerokupage();
  const checkboxespage = new Checkboxespage()
  internetHerokupage.getCheckboxes()
    checkboxespage.getSelectCheckbox().eq(0).as('Checkbox1').check()
    checkboxespage.getCheckbox1().should('be.checked')
    checkboxespage.getSelectCheckbox().eq(1).as('Checkbox2').uncheck()
    checkboxespage.getCheckbox2().should('not.be.checked')
  
  });