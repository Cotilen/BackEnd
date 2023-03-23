/*
 * Objetvo: Criar uma API para manipulação de dados de contatos
 * Autor: Cleiton
 * Data: 20/03/2023
 * Versão: 1.0
 */



//Import das dependências para criar API

//Responsável pelas requisições
const express = require('express')

//Responsável pelas permissões das requisições
const cors = require('cors')

//Responsável pela manipulação do body da requisição
const bodyParser = require('body-parser')
    // const { response } = require('express') Criado automaticamente pelo VScode, pode apagar se quiser

//Cria um objeto ck=om as informações da classe express
const app = express()

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

const whatsapp = require('./MODEL/functions.js')

// console.log(whatsapp.getContatos(1));

app.get('/v1/senai/contatos', cors(), async function(request, response, next) {


    let idContato = request.query.id
    let statusCode
    let dadosContatos = {}

    if (idContato == '' || idContato == undefined || isNaN(idContato)) {
        statusCode = 400
        dadosContatos.message = ("Não é possível processar a requisição pois o id do contato não foi informado ou não atende a quantidade de caracteres(1 digitos)")
    } else {
        let contatos = whatsapp.getContatos(idContato)

        if (contatos) {
            statusCode = 200
            dadosContatos = contatos
        } else {
            statusCode = 404

        }
    }

    response.status(statusCode)
    response.json(dadosContatos)
})

app.listen(8080, function() {


    console.log('Servidor aguardando requisições na porta 8080');

})