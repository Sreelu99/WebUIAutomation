class InternetHerokupage
{
   getAddDeleteElements()
   {
      return cy.visit('/add_remove_elements/');
   }
   getBrokenImages()
   {
      return cy.visit('/broken_images');
   }
   getCheckboxes()
   {
      return  cy.visit('/checkboxes');
   }
   getForgotPassword()
   {
      return  cy.visit('/forgot_password');
   }
   
   

}
export default InternetHerokupage;