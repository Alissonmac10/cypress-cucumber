# new feature
# Tags: optional
    
Feature: Logins
    Realizar logins phpTravels
    Scenario Outline: "<cenario>"
        Given eu acesse a pagina da aplicação
        When e inserir meu "<email>" e minha "<senha>"
        And clicar no botão entrar
        Then tenho meu acesso "<mensagem>"
        Examples:
      |  cenario    | email | senha | mensagem |
      | Realizar login com sucesso|user@phptravels.com|demouser|com sucesso|