Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar cadastro de novo usuário
        Given acessei a pagina inicial
        And acessei a tela de cadastro

    Scenario: Preencher dados corretos
        When preencho o formulário e salvo
        | nome  | Cadê a Carmem Sandiego                |
        | email | ttschau@oi.com                         |
        Then visualizo a mensagem positiva "Usuário salvo com sucesso!"        

    Scenario: Criar usuário com e-mail inválido
        When preencho o formulário e salvo com email invalido
        | nome  | Lailass            |
        | email | dfdfd@sdsd         |
        Then visualizo a mensagem de email invalido "Formato de e-mail inválido"
        
    Scenario Outline: Criar usuário com e-mail inválido sem @
        When preencho o formulário e salvo com email sem @
        | nome  | kiko     |
        | email | kika-kos |
        Then visualizo mensagem de erro de e-mail "Inclua um '@' no endereço de e-mail.'kika-kos' está com um '@' faltando"
        
    Scenario: Criar usuário com e-mail já utilizado
        When preencho o formulário e salvo com email já utilizado
        | nome  | tchau            |
        | email | ttchau@oi.com     |
        Then visualizo mensagem indicando que o email não está disponível "Este e-mail já é utilizado por outro usuário."
   
    Scenario: Criar usuário com e-mail acima do limite de 60 caracteres
        When preencho o formulário e salvo com email além do limite
        | nome  | harry                                                                                            | 
        | email | auhsuahsuahsuahsuahsuahsauhsauhsausshaushasdsdsdsdsdssdsushau@globo.com                          |
        Then visualizo mensagem sobre limite do email "Informe no máximo 60 caracteres para o e-mail"

    Scenario: Criar usuário com nome acima do limite de 100 caracteres
        When preencho o formulário e salvo com nome além do limite
        | nome  | Harrys Potter Harrys PotterHarrys PotterHarrys PotterHarrys PotterHarrys PotterHarrys PotterHarrys Potter  |                            
        | email | harrys@potter.com                                                                                          |
        Then visualizo uma mensagem sobre limite do nome "Informe no máximo 100 caracteres para o nome"
       