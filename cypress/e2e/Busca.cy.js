/// <reference types="cypress"/>

describe('US-001: Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix111')
    });

    it('Deve buscar filme com sucesso de uma lista', () => {
        cy.fixture('Filmes').then((Filmes) => {
            cy.get('#search-input').type(Filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', Filmes[3].titulo)
      })
    });

    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('Filmes').each((Filmes) => {
            cy.get('#search-input').clear().type(Filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', Filmes.titulo)
        })
    });
});