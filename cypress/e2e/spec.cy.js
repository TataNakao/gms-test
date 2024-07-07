/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.1.110:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araújo')
    cy.get('#signup-email').type('fabio2@testes.com')
    cy.get('#signup-phone').type('11234567890')
    cy.get('#signup-password').type('Teste$2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})