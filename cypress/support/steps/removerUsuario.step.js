/// <reference types="cypress" />

import { removerUsuario } from "../pages/removerUsuario.po" 

Given("acessei a pagina inicial", () => {
    removerUsuario.visitar();
});

When("escrevo o nome que quero deletar", (tabela) =>{
    var dadosTabela = tabela.rowsHash();
    removerUsuario.delecaoConjunto(dadosTabela.nome)
});

When("escrevo um nome que não existe", (tabela) =>{
    var dadosTabela = tabela.rowsHash();
    removerUsuario.delecaoConjunto(dadosTabela.nome)
});

Then("visualizo a mensagem positiva {string}", (mensagempositiva) => {
    cy.contains(mensagempositiva).should("be.visible");    
});

// Then("visualizo a mensagem negativa {string}", (mensagemnegativa) => {
//     cy.contains(mensagemnegativa).should("be.visible");    
// });

