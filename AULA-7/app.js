/*
 * Objetvo: Criar uma API para interagir com um banco de dados(GET, POST, DELETE PUT)
 * Autor: Cleiton
 * Data: 14/04/2023
 * Versão: 1.0
 */

//Import das bibliotecas(dependências) do projeto

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto com as informações da classe express
const app = express()

//Defie as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origen das requisiçõe da API
    //* - significa que a API será pública
    //IP - se colocar o IP, a API smente responderá para aquela máquina
    response.header('Access-Control-Allow-Origin', '*')

    //Permite gerenciar quais verbos (métodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update, Delete)

/****************************************************
 * Objetvo: Tabela do Aluno
 * Data: 14/04/2023
 * Versão: 1.0
 ***************************************************/

//EndPoint: Retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

})

//EndPoint: Retorna dados do aluno pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//EndPoint: Inseri um novo aluno
app.post('/v1/lion-school/aluno', cors(), async function(request, response) {

})

//EndPoint: Atualiza um aluno pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//EndPoint: Deleta um aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})