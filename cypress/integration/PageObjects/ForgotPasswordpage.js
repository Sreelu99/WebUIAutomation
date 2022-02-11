class ForgotPasswordpage
{
   getEmail()
   {
      return cy.get('#email');
   }
   getSubmitform()
   {
      return  cy.get('#form_submit');
   }

  

}
export default ForgotPasswordpage;