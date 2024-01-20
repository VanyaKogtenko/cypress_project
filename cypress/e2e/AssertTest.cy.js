describe('Assert', ()=> {
    it('Assert Web Test', ()=> {
        cy.visit('https://unsplash.com/')
        cy.viewport(1280, 900)
        cy.location("protocol").should('eq', 'https:')
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')

        cy.get('a[class="cLLOA p1cWU jpBZ0 QYbJJ EzsBC KHq0c IKU9M XHI2L qT3N_"]')
            .should('be.visible')
            .click()

        cy.get('input[id="user_email"]')
            .type('sjjsjsjsajjd@gmail.com')
            .should('have.value', 'sjjsjsjsajjd@gmail.com')

        cy.get('input[id="user_password"]')
            .type('1234567')
            .should('have.value', '1234567')

        cy.contains('Login')
            .should('be.visible')
            .click()

        cy.get('input[type="submit"]').should('be.visible')
            .should('be.visible')


    })
})