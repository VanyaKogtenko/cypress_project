describe('Google Maps Interaction', () => {
    it('should move the map in different ways', () => {
        // Visit Google Maps
        cy.visit('https://www.google.com/maps');

        // Wait for the map to load
        cy.get('.widget-scene').should('be.visible');

        // Simulate dragging the map
        cy.get('.widget-scene canvas').first().trigger('mousedown', { which: 1, pageX: 500, pageY: 300 })
            .trigger('mousemove', { which: 1, pageX: 600, pageY: 400 })
            .trigger('mouseup', { force: true });

        // Wait for the map to update after dragging
        cy.wait(1000);

        // Simulate zooming in
        cy.get('.widget-scene').trigger('wheel', { deltaY: -100 });

        // Wait for the map to update after zooming
        cy.wait(1000);

        // Simulate panning the map
        cy.get('.widget-scene').trigger('keydown', { keyCode: 37 }); // Press left arrow key
        cy.wait(500); // Wait for the map to update after panning


    });
});
