/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
 
  beforeEach(() =>{
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `Thaise${Date.now()}@teste.com`
    cy.preencherCadastro('Thaise', 'Nakao', email, '1196543212', 'Teste@12334')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  
  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('20thaise', 'Nakao', 'blabla@teste.com', '1122334567', 'T123aaa') 
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })

  it('Deve fazer a validação do sobrenome vazio', () => {
    cy.preencherCadastro('Thaise', '', 'blabla@teste.com', '1122334567', 'T123aaa') 
    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')
  })

  it('Deve fazer a validação do formato de email invalido', ()=>{
    cy.preencherCadastro('thaise', 'Nakao', 'blabla@com', '1122334567', 'T123aaa') 
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('Deve fazer a validação do telefone invalido', ()=>{
    cy.preencherCadastro('thaise', 'Nakao', 'blabla@teste.com', 'aaaaa', 'T123aaa') 
    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  })

  it('Deve fazer a validação de envio sem preencher campos obrigatórios', ()=>{
    cy.preencherCadastro('', '', '', '', '') 
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('Deve fazer a validação do bloqueio da senha fraca', ()=>{
    cy.preencherCadastro('thaise', 'Nakao', 'blabla@teste.com', '2345677892', 'Taaa')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })

  it('Deve fazer a validação do email duplicado', ()=>{
    cy.preencherCadastro('thaise', 'nakao', 'fabio@teste.com', '2398765432', 'T@123aaaqa')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })


})