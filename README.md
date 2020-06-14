# Diga Hello World: **Meu amigo Caminhoneiro**
## O que esta Aplicação faz???
***Esta Aplicacao tem a responsabilidade de registar Caminhoneiros, com o intuito de analizar sua saude, com testes de batimentos cardiacos, emoção e temperatura utilizisando a camera frontal do celular*** 

## **Tecnologias Utilizadas**
## Tecnologias base
    * Node.js
    
## Server
    * TypeScript      
    * Express
    * Knex
    * Cors
    * MySQL2
    * Bcryptjs
    
## Mobile
    * ReactNative
    * Expo
    * TypeScript 
    * Axios

## Instalação
1. Primeiramente você precisa ter as **tecnologias base** encontrada da area [Tecnologias utlizada](#tecnologias-utilizadas)
2. Com o terminar, entre na pasta **Backend** e utilize o comando ```npm install``` repita o comando na pasta **Mobile**
3. Para configurar o servidor voce tem duas opções: 
   * Caso queira utilizar o SQLite (mais facil)
        1. você vai no arquivo **backend/knexfile.ts** e substitui todo o conteudo por:
            ``` 
                import path from 'path'
                module.exports = {
                    client: 'mysql2',
                    connection: {
                        host : 'localhost',
                        user : 'root',
                        password : '',
                        database : 'amigocaminhoneiro'
                    },
                    migrations: {
                        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
                    },
                    seeds: {
                        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
                    },
                    useNullAsDefault: true
                }; 
            ```
        2. Agora você deve ir no arquivo **backend/src/database/connection.ts** e alterar o conteudo por:
            ```
                import knex from 'knex'
                import path from 'path'
                const connection = knex({
                    client: 'sqlite3',
                    connection:{
                        filename: path.resolve(__dirname, 'database.sqlite')
                    },
                    useNullAsDefault: true
                })
                
                export default connection;
            ```
        3. Agora basta rodar no terminal dentro da pasta **backend** os  seguintes comandos
            * ```npm i sqlite3 ```
            * ```npm run knex:migrate ```
            * ```npm run knex:seed ```
         
    * Caso queira rodar a aplicação em Mysql2
        1. Você deve instalar em sua maquina um servidor local [**XAMPP**](https://www.apachefriends.org/pt_br/index.html) ou [**WAMP**](https://www.wampserver.com/en/)
        2. Abra os Serviços MySQL e Apache (no caso do WAMP ja vem tudo aberto)
        3. Nos Arquivos **backend/knexfile.ts** e **backend/src/database/connection.ts** ja esta configurado como por padrão as configurações de acesso, mas para meios de entendimento do que voce deve fazer:
            * host: É onde seu servidor esta sendo hosteado, no meu caso no localhost
            * user: Seu usuario(Não a do computador), por padrão é root
            * password: Sua Senha(Não a do computador), por padrão é nada ou seja '', ou 'root'
            * database: o banco de dados no qual você quer inserir os dados, no caso voce vai ter que entrar no terminar SQL e digitar o comando: ```Create database amigoCaminhoneiro```
        
4. Finalmente, agora voce pode rodar, em terminais separados os seguintes comandos
    * Na pasta **Backend:** ```npm run dev```
    * Na pasta **Mobile:** ```npm start```
