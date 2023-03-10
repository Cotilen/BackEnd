/*
 * Objetvo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Cleiton
 * Data: 10/03/2023
 * Versão: 1.0
 */

/**
 * Express     - Dependência do node que permite a integração do protocolo HTTP com o código
 *        npm install express --save
 * 
 * Cors        - Gerenciador de permissões para o protocolo HTTP 
 *        npm install cors --save
 * 
 * Body-parser - É uma dependência que permite manipular dados enviados pelo body da requisição
 *        npm install body-parser --save
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

    //Ativa no cors das requisições as permissões estabellecidas
    app.use(cors())

    next()
})

//endPoints

//endPoint para listar os Estados
app.get('/estados', cors(), async function(request, response, next) {

    const estadosCidades = require('./MODULO/estados_cidades.js')

    let listaDeEstados = estadosCidades.getListaDeEstados()


    response.json(listaDeEstados)
    response.status(200)

})

//Permite carregar os endPoints criados e aguardar as requisições 
//pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080');

})