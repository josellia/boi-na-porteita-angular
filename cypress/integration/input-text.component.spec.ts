describe('InputTextComponent', () => {
 it('Should properties input text', () => {
  //  cy.get('[formControlName="controlName"]').type(text);
  cy.get('input[type=text]').type('Test all the things', {force: true})
 })
})

// cy.get('input[type=text]').type('Test all the things', { force: true })