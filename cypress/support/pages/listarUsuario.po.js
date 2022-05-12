/// <reference types="cypress" />

class Users{
    username = "p[data-test='userDataName']";
    useremail = "p[data-test='userDataEmail']";
    botaoDetalhar = ""
    
    visitar(){
        cy.visit("https://crud-api-academy.herokuapp.com/api/v1/users");
    }
                
    checar(nome, email) {
        cy.contains(this.username, nome);
        cy.contains(this.useremail, email);
    }
    
}

export var users = new Users();