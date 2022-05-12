/// <reference types="cypress" />

import { criarUsuario } from "../pages/criarUsuario.po" 

Given("acessei a pagina inicial", () => {
    criarUsuario.visitar();
});

And("acessei a tela de cadastro", () => {
    criarUsuario.novoUsuario();
}); 

When("preencho o formulário e salvo", (tabela) =>{
    var dadosTabela = tabela.rowsHash();
    criarUsuario.cadastroConjunto(dadosTabela.nome,dadosTabela.email)
});

When("preencho o formulário e salvo com email invalido", (tabela)=> {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.cadastroConjunto(dadosTabela.nome,dadosTabela.email)
});

When("preencho o formulário e salvo com email sem @", (tabela)=> {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.cadastroConjunto(dadosTabela.nome,dadosTabela.email)
});

When("preencho o formulário e salvo com email já utilizado", (tabela)=> {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.cadastroConjunto(dadosTabela.nome,dadosTabela.email)
});

When("preencho o formulário e salvo com email além do limite", (tabela)=> {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.cadastroConjunto(dadosTabela.nome,dadosTabela.email)
});

When("preencho o formulário e salvo com nome além do limite", (tabela)=> {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.cadastroConjunto(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo a mensagem positiva {string}", (mensagempositiva) => {
    cy.contains(mensagempositiva).should("be.visible");    
});

Then("visualizo a mensagem de email invalido {string}", (mensagemnegativa) => {
    cy.contains(mensagemnegativa).should("be.visible");    
});

Then("visualizo mensagem de erro de e-mail {string}", (mensagemnegativa) => {
    cy.contains(mensagemnegativa).should("be.visible");    
});

Then("visualizo mensagem indicando que o email não está disponível {string}", (mensagemnegativa) => {
    cy.contains(mensagemnegativa).should("be.visible");    
});

Then("visualizo mensagem sobre limite do email {string}", (mensagemnegativa) => {
    cy.contains(mensagemnegativa).should("be.visible");    
});

Then("visualizo uma mensagem sobre limite do nome {string}", (mensagemnegativa) => {
    cy.contains(mensagemnegativa).should("be.visible");    
});
