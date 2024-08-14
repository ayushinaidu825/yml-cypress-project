describe('Google Search Test', () => {
        it('Searches for Cypress and verifies the first result', () => {
           cy.visit('https://www.google.com');
            cy.get('textarea[name="q"]').type('Cypress{enter}');
            cy.get('#search .g').first().should('contain.text', 'Cypress');
        });
    });