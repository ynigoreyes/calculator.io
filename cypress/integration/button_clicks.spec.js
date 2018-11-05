/// <reference types="Cypress" />

context('Click Buttons', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to click everything on the screen', () => {
    // https://on.cypress.io/type
    for (let i = 1; i < 10; i++) {
      cy.get(`#number-${i}`).click()
    }

    for (let i of ['multi', 'add', 'sub', 'div']) {
      cy.get(`#${i}`).click()
    }

    cy.get('.MuiChip-deleteIcon-148').click()


  })
})
