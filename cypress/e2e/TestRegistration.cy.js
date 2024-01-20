describe('Coursera', ()=> {

    const user_email = 'johhny123@gmail.com'
    const full_name = 'johhnysupreme'
    const password = 'Qawee!24588373mm'

    it('Coursera test registration', ()=> {
        cy.visit('https://www.coursera.org/');
        cy.viewport(1000, 660)

        cy.get('.css-1gocctr > .cds-149')
            .should('be.visible')
            .click()

        cy.get('#email')
            .type(user_email)
            .should('have.value', user_email)

        cy.get('#name')
            .type(full_name)
            .should('have.value', full_name)

        cy.get('#password')
            .type(password)
            .should('have.value', password)

        cy.get('._6dgzsvq')
            .should('be.visible')
            .click()


    })
})