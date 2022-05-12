/// <reference types="cypress" />

class CriarUsuario {
    // Atributos da classe são os seletores da nossa tela
    inputNome = "#name";
    inputEmail = "#email";
    botaoNovo = ".sc-gsnTZi";
    botaoSalvar = ".sc-iqcoie";
    
    visitar(){
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    };

    novoUsuario(){
        cy.get(this.botaoNovo).click();
    };

    cadastroConjunto(nome,email){
        cy.get(this.inputNome).type(nome);
        cy.get(this.inputEmail).type(email);
        cy.get(this.botaoSalvar).click();
    };
    
    verificarMensagemPositiva(seletor, mensagempositiva){
        cy.contains(seletor, mensagempositiva).should("be.visible");
    };

    verificarMensagemNegativa(mensagemnegativa){
        cy.contains(mensagemnegativa).should("be.visible");
    };
}

export var criarUsuario = new CriarUsuario();