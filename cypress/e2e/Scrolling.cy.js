describe('Scrolling', ()=> {
    it('scroll to carousel', ()=> {
        cy.visit('https://unsplash.com/')
        cy.get('[data-test="nav-bar-search-form-input"]').type('Car{enter}')
        cy.get('[data-test="page-header-title"]').should('have.text', 'Car')
        cy.scrollTo(0, 3000)
        cy.get(':nth-child(2) > :nth-child(2) > .GFY23 > :nth-child(1) > .MbNnd > .zmDAx > .rEAWd > .omfF5 > .MorZF > [data-test="photo-grid-masonry-img"]').click()
    })
})