class Checkboxespage
{
   getSelectCheckbox()
   {
      return cy.get('input');
   }
   getCheckbox1()
   {
      return cy.get('@Checkbox1');
   }
   getCheckbox2()
   {
      return cy.get('@Checkbox2');
   }
   

}
export default Checkboxespage;