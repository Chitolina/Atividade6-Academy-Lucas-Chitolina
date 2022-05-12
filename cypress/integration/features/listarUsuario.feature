Feature: Listar usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Background: Acessar cadastro de novo usuário
        Given acessei a pagina inicial

    Scenario: Visualizar usuários cadastrados
        When há usuários cadastrados
        Then vejo os usuários presentes