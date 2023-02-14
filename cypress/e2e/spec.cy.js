/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

describe('e2e testing', () => {
  it('visits start page', () => {
    cy.visit('http://localhost:3000/search');
  });

  it('should change genre option', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('.Drama').click();
    cy.url().should('include', 'genre=Drama');
  });

  it('should change sort by option', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('.selected-sort-by-option').click();
    cy.get('.sort-by-option-item').contains('TITLE').click();
    cy.url().should('include', 'sortBy=title');
  });

  it('should search movies', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('input[name=search]').type('love');
    cy.get('.searchbar-button').contains('Search').click();
    cy.get('input[name=search]').should('have.value', 'love');
    cy.get('.movie-name').contains('From Russia with Love').click();
    cy.url().should('include', 'movieId=657');
    cy.get('.movie-preview-info-rating').contains('7').should('be.visible');
  });
});
