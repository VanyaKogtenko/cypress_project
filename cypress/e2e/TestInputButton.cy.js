describe('Test coursera input', () => {
    it('Test coursera input', () => {
        cy.visit('https://www.coursera.org/')
        cy.viewport(1200, 900)

        cy.get('.react-autosuggest__input')
            .type('Google')
            .should('have.value','Google')

        cy.get('.search-button > .magnifier-wrapper')
            .click()

        cy.get('.css-1vxysjj')
            .should('be.visible')

        cy.get('[data-testid="Arts and Humanities-false"] > .cds-checkboxAndRadio-label').click()
        cy.get('[data-testid="Business-false"] > .cds-checkboxAndRadio-label').click()
        cy.get('[data-testid="Computer Science-false"] > .cds-checkboxAndRadio-label').click()
        cy.get('[data-testid="Data Science-false"] > .cds-checkboxAndRadio-label').click()

        cy.get('.c-ph-log-in > a').should('be.visible').click()
        cy.get('.ReactModal__Content').should('be.visible')

        cy.get('#email').type('gahahahahh2@gmail.com').click()
        cy.get('#password').type('12222222mmm').click()
        cy.get('._6dgzsvq').should('be.visible').click()





    })

});
