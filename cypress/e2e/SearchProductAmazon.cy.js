describe('Search product and add', ()=> {
    it('Search product', ()=> {
        cy.visit('https://amazon.com/')
        cy.get('input[type="text"]').type('Iphone')
        cy.contains('Go').click()
        cy.contains('Apple iPhone 11, 64GB, Black - Unlocked (Renewed)').click()
        cy.contains('Add to').click()
    })
})