/// <reference types="cypress" />

import { users } from "../pages/listarUsuario.po" 

Given("acessei a pagina inicial",() => {
    users.visitar();
});

When("há usuários cadastrados",() => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",{
        fixture: "usuarios.json"
    });
});

Then('vejo os usuários presentes', ()=>{
    users.checar("Viviane Araújo","viviaraujo@gmail.com")
    users.checar("Carol","raro@raro.com")
    users.checar("Marcolina","marcolina@gmail.com")
});
