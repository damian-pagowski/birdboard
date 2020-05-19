/// <reference types="Cypress" />

const seed = require('../../server/seed/users')
context('User setup', () => {
  beforeEach(() => {
    cy.task('clear:db')
    cy.task('seed:db', seed.data)
  })

  it('signup and login user', () => {
    cy.visit('http://localhost:8080/login')
    cy.loginWithUI(email, password); // moved to support/commands
    cy.location('pathname').should('eq', '/board')
  })
})
