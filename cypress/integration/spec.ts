describe('List bois url', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.url().should('includes', 'bois')
  })
})
