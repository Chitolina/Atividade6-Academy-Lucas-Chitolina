Feature: Atualizar usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar cadastro de novo usuário
        Given acessei a pagina inicial

    Scenario: Preencher dados corretos
        When escrevo o nome que quero deletar
        | nome  | Cadê a Carmem Sandiego                       |
        Then visualizo a mensagem positiva "Usuário removido!" 

    Scenario: Remover usuário inexistente
        When escrevo um nome que não existe
        | nome  | Abacaxi Azedo com pimenta                   |
        Then visualizo a mensagem negativa "Cadastre um novo usuário"