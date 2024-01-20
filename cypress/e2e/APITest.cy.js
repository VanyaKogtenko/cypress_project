describe('Test API GET', ()=> {
    it('Get-Test', ()=> {
        cy.request('GET', 'https://swapi.dev/api/planets/1/').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.films).to.have.length(5)
        })
    })
})