// https://indepth.dev/posts/1349/write-better-automated-tests-with-cypress-in-angular

describe('CadastroBoiComponent', () => {
 it('Deve retornar o cadastro de um bovino', () => {
    cy.visit('/bois/cadastro');
    cy.url().should('includes', 'cadastro');
    cy.get('[controlName="breed]"').type("breed")
 })
})