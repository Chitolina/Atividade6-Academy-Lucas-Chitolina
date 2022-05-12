/// <reference types="cypress" />

class RemoverUsuario {
    // Atributos da classe são os seletores da nossa tela
    inputNome = ".sc-gKXOVf";
    botaoDeletar = ".sc-kgflAQ";

    visitar(){
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    };

    delecaoConjunto(nome){
        cy.get(this.inputNome).type(nome);
        cy.get(this.botaoDeletar).click();
        cy.contains("button", "Confirmar").click();
    };

    verificarMensagemPositiva(seletor, mensagempositiva){
        cy.contains(seletor, mensagempositiva).should("be.visible");
    };
    verificarMensagemNegativa(seletor, mensagemnegativa){
        cy.contains(seletor, mensagemnegativa).should("be.visible");
    };
}
    export var removerUsuario = new RemoverUsuario();