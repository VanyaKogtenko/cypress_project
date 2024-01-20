const validUsername = 'jokipito@qwe.com'
const validPassword = '123456'
const unvalidUsername = 'jo2kipito@qwe.com'
const unvalidPassword = '111212221'


    describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://clientbase.us/v4/user/login');
    });

    it('should login with valid credentials', () => {
        // Enter valid credentials
        cy.get('#normal_login_email')
            .should('be.visible')
            .type(validUsername)
        cy.get('#normal_login_password')
            .should('be.visible')
            .type(validPassword)
        cy.get('.ant-btn')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://clientbase.us/v4/onboarding');


    });
        it('should handle invalid credentials', () => {
            // Enter invalid credentials
            cy.get('#normal_login_email')
                .should('be.visible')
                .type(unvalidUsername)
            cy.get('#normal_login_password')
                .should('be.visible')
                .type(unvalidPassword)
            cy.get('.ant-btn')
                .should('be.visible')
                .click()
            // Check if an error message is displayed
            cy.get('.ant-notification-notice-message').then(($error) => {
                if ($error.length > 0) {
                    // Error message is displayed
                    cy.log('Login failed with invalid credentials');
                } else {
                    // No error message, login might have succeeded (handle as needed)
                    cy.url().should('not.eq', 'https://clientbase.us/v4/onboarding');
                    // Ensure we are not on the dashboard
                    cy.log('Login succeeded with invalid credentials');
                }

                });

        });

        it.only ('should handle empty credentials', () => {

            cy.get('#normal_login_email')
                .should('be.visible')
                .type(' ').clear()
            cy.get('#normal_login_password')
                .should('be.visible')
                .type(' ').clear()

            // Check if an error message is displayed
            cy.contains('Required').then(($error) => {
                if ($error.length > 0) {
                    // Error message is displayed
                    cy.log('Login failed with empty credentials');
                } else {
                    // No error message, login might have succeeded (handle as needed)
                    cy.url().should('not.eq', 'https://clientbase.us/v4/onboarding'); // Ensure we are not on the dashboard
                    cy.log('Login succeeded with empty credentials');
                }
            });
        });


});




