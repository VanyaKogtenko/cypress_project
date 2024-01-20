
//Search with different attributes examples

it('By ID', () => {
    cy.visit('https://facebook.com')
    cy.get('#email')
});

it('By class', () => {
    cy.visit('https://docs.cypress.io')
    cy.get('.DocSearch')
});

it('By tag', () => {
    cy.visit('https://wise.com/')
    cy.get('nav')
});

it('By tag value', () => {
    cy.visit('https://facebook.com')
    cy.get('[name="pass"]')
});

it('By different tag', () => {
    cy.visit('https://facebook.com')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it('By contains name', () => {
    cy.visit('https://next.privat24.ua')
    cy.get('*[class^="card"]')
});
