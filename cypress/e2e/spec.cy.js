/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.1.110:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araújo')
    cy.get('#signup-email').type('fabio44@testes.com')
    cy.get('#signup-phone').type('11234567890')
    cy.get('#signup-password').type('Teste$2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  
  it('Deve fazer a validação do formato de email invalido', ()=>{
    cy.visit('http://192.168.1.110:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araújo')
    cy.get('#signup-email').type('fabio2.com')
    cy.get('#signup-phone').type('11234567890')
    cy.get('#signup-password').type('Teste$2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  // it('Deve fazer a validação de envio sem preencher campos obrigatórios', ()=>{
  //   cy.visit('http://192.168.1.110:8080')
  //   cy.get('#signup-firstname').type('') //?
  //   cy.get('#signup-lastname').type('')
  //   cy.get('#signup-email').type('')
  //   cy.get('#signup-phone').type('')
  //   cy.get('#signup-password').type('')
  //   cy.get('#signup-button').click()
  //   cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  // })

  it('Deve fazer a validação do bloqueio da senha fraca', ()=>{
    cy.visit('http://192.168.1.110:8080')
    cy.get('#signup-firstname').type('ana')
    cy.get('#signup-lastname').type('lin')
    cy.get('#signup-email').type('analin@teste.com')
    cy.get('#signup-phone').type('2222222222')
    cy.get('#signup-password').type('Teste')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })

  it('Deve fazer a validação do email duplicado', ()=>{
    cy.visit('http://192.168.1.110:8080')
    cy.get('#signup-firstname').type('ana')
    cy.get('#signup-lastname').type('lin')
    cy.get('#signup-email').type('fabio@teste.com')
    cy.get('#signup-phone').type('2222222222')
    cy.get('#signup-password').type('Teste@1233')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })


})