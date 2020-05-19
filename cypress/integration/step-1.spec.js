/// <reference types="Cypress" />

context("User Setup", () => {
  // cleaning db before start. nice 
  beforeEach(() => {
      cy.task("clear:db");
    });

  it("signup and login user", () => {
    const email = "amir@cypress.io";
    const password = "1234";
    cy.visit("http://localhost:8080/signup");

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirm-password"]').type(password);
    cy.get("#signup-button").click();

    cy.location("pathname").should("eq", "/login");

    cy.loginWithUI(email, password); // moved to support/commands

    cy.location("pathname").should("eq", "/board");
  });
});
