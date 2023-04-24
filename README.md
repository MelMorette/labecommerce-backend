# Projeto labecommerce

É o primeiro projeto do back-end, onde pratiquei toda a base de criação de uma API vinculada a um banco de dados real.<br>

## Stacks utilizadas

- NodeJS
- Typescript
- Express
- SQL e SQLite
- Knex
- Postman

# Banco de dados
![image](https://user-images.githubusercontent.com/29845719/214396608-ddcfd097-e615-44f9-acbe-f815f9abb83f.png)
https://dbdiagram.io/d/63c6e8e5296d97641d7a4666

##  Funcionalidades
A coleção de endpoints da API LabeCommerce no Postman foi criada para gerenciar uma plataforma de comércio eletrônico. Ela inclui vários endpoints para gerenciar usuários, produtos e compras. Abaixo estão detalhes dos endpoints disponíveis:

-   **`Get All Users`**: Retorna todos os usuários cadastrados no sistema.

-   **`Get All Products`**: Retorna todos os produtos cadastrados no sistema.
-   **`Get Product By Name`**: Permite buscar por um produto na lista de produtos por meio de sua nome.

-   **`Get Product By Id`**: Recebe um GET request com um parâmetro de ID do produto. Ele procura o produto com o ID correspondente na lista de produtos e retorna o resultado.

-   **`Create New User`**: Cria um novo usuário na plataforma.
    
-   **`Create New Product`**: Permite criar um novo produto na plataforma.
    
-   **`Create New Purchase`**: Permite ao usuário realizar uma compra de um produto especificado, informando o id do usuário, id do produto, quantidade e preço total.

-   **`Edit product by id`**: Permite atualizar as informações de um produto existente com base no ID do produto.

-   **`Edit User by id`**: Permite atualizar as informações de um usuário existente com base no ID de cadastro.
    

-   **`Get User Purchase By Buyer Id`**: Retorna todos as purchases cadastradas no id de um usuário.
    
-   **`Delete product by id`**: Permite excluir um produto existente com base no ID de cadastrado.

-   **`Delete User by id`**: Permite excluir um usuário existente com base no ID de cadastrado.

-   **`Delete Purchase by id`**: Permite excluir uma purchase existente com base no ID de cadastrado.
    
-   **`Get Purchase by id`**: Retorna informações sobre uma compra existente com base no ID da compra especificada.

##  Instalação :computer: :fireworks:

Para instalar o projeto que utiliza NodeJS, Typescript, Express, SQL e SQLite, Knex e Postman, siga as seguintes etapas:

<b>Instalação do NodeJS</b>: faça o download do NodeJS em https://nodejs.org/en/download/ e instale-o seguindo as instruções do instalador.

<b>Instalação do Typescript</b>: abra o terminal ou prompt de comando e digite o comando `npm install -g typescript`. Isso instalará o Typescript globalmente em sua máquina.

**Criação do projeto**: crie uma pasta para o projeto e abra o terminal ou prompt de comando na pasta criada. Em seguida, digite o comando `npm init -y`. Isso criará um arquivo package.json padrão na pasta do projeto.

**Instalação do Express e SQLite**: digite o comando `npm install express sqlite3 @types/express @types/sqlite3` no terminal ou prompt de comando na pasta do projeto.

**Instalação do Knex**: digite o comando `npm install knex @types/knex sqlite3` no terminal ou prompt de comando na pasta do projeto.

**Configuração do Knex**: crie um arquivo knexfile.js na raiz do projeto com as configurações do banco de dados. Em seguida, crie um arquivo database.ts na pasta src com as configurações do Knex para acessar o banco de dados.

**Instalação do Postman**: faça o download e instale o Postman em https://www.postman.com/downloads/.

#A documentação completa está nesse link:

https://documenter.getpostman.com/view/27061449/2s93Y5RLWK