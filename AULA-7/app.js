/*
 * Objetvo: Criar uma API para interagir com um banco de dados(GET, POST, DELETE PUT)
 * Autor: Cleiton
 * Data: 14/04/2023
 * Versão: 1.0
 */


/*
 * Para realizar a conexão com o banco de dados, iremos utilizar o Prisma
 *        npm install prisma --save
 *        npx prisma
 *        npx prisma init
 *        npm instal @prisma/client 
 * 
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

//Import da controller do aluno
const controllerAluno = require('./controller/controller_aluno.js')
const bodyJSON = bodyParser.json()


//Criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição

//EndPoint: Retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {


    //Solicita a controller que retorne todos os alunos do BD
    let dados = await controllerAluno.selecionarTodosAlunos()

    //Valida se existem registros para retornar na requisição
    if (dados) {
        response.json(dados)
        response.status(200)

    } else {
        response.status(404)
        response.json()

    }
})

//EndPoint: Retorna dados do aluno pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//EndPoint: Inseri um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function (request, response) {

    let contentType = request.headers['content-type']

    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe os dados encaminhados no body da requisição
        let dadosBody = request.body

        //Envia os dados para a controller
        let resultInsertDados = await controllerAluno.inserirAluno(dadosBody)

        //Retorna o status code e a message
        response.status(resultInsertDados.status)
        response.json(resultInsertDados)
    } else {

    }






})

//EndPoint: Atualiza um aluno pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function (request, response) {
    //Recebe os dados do Body
    let dadosBody = request.body

    //Recebe o id do aluno
    let idAluno = request.params.id
    let resultUpdatedados = await controllerAluno.atualizarAlunos(dadosBody, idAluno)

    response.status(resultUpdatedados.status)
    response.json(resultUpdatedados)

})

//EndPoint: Deleta um aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function (request, response) {
    //Recebe os dados do Body
    let dadosBody = request.body

    //Recebe o id do aluno
    let idAluno = request.params.id

    let resultDeleteDados = await controllerAluno.deletarAlunos(dadosBody, idAluno)

    response.status(resultDeleteDados.status)
    response.json(resultDeleteDados)

})

app.listen(8080, function () {
    console.log('Servidor aguardando requisições');

})