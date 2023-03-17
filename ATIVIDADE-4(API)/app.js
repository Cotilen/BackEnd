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

//endPoints

//Import do arquivo de funções
const estadosCidades = require('./MODULO/estados_cidades.js')


//endPoint para listar os Estados
app.get('/v1/senai/estados', cors(), async function(request, response, next) {



    //Chama a função que retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados()

    //Tratamento para validar se a função realizou o processamento
    if (listaDeEstados) {
        //Retorna o Json e o Status code
        response.json(listaDeEstados)
        response.status(200)
    } else
        response.status(500)

})


//endPoint: Lista as características do estado pela sigla
app.get('/v1/senai/estado/sigla/:uf', cors(), async function(request, response, next) {
    //:uf - é uma variável que será utilizada para passagens de valores, na URL da requisição

    //Recebe o valor da variável uf que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf
    let statusCode
    let dadosEstado = {}

    //Tratamento para vaidar os valores encaminhados no parâmetro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        //chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstado(siglaEstado)
            //valida se houve retorno válido da funçao
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/v1/senai/estado/capital/sigla/:uf', cors(), async function(request, response, next) {

    //:uf - é uma variável que será utilizada para passagens de valores, na URL da requisição

    //Recebe o valor da variável uf que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf
    let statusCode
    let capitalEstado = {}

    //Tratamento para vaidar os valores encaminhados no parâmetro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        capitalEstado.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        //chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getCapitalEstado(siglaEstado)
            //valida se houve retorno válido da funçao
        if (estado) {
            statusCode = 200
            capitalEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(capitalEstado)
})

app.get('/v1/senai/estados/regiao/:regiao', cors(), async function(request, response, next) {

    let regiao = request.params.regiao
    let statusCode
    let regiaoEstados = {}

    if (regiao == '' || regiao == undefined || !isNaN(regiao)) {
        statusCode = 400
        regiaoEstados.message = ("Não é possível processar a requisição pois a região não foi informada")
    } else {
        let estados = estadosCidades.getEstadosRegiao(regiao)

        if (estados) {
            statusCode = 200
            regiaoEstados = estados
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(regiaoEstados)
})

app.get('/v1/senai/estados/capital/pais', cors(), async function(request, response, next) {

    let statusCode
    let capitalPais = {}


    let capital = estadosCidades.getCapitalPais()

    if (capital) {
        statusCode = 200
        capitalPais = capital
    } else {
        statusCode = 404
    }
    response.status(statusCode)
    response.json(capitalPais)
})

//  EndPoint feito por mim
app.get('/v1/senai/estados/cidades/sigla/:uf', cors(), async function(request, response, next) {

    let sigla = request.params.uf
    let statusCode
    let cidades = {}

    if (sigla == '' || sigla == undefined || !isNaN(sigla) || sigla.length != 2) {
        statusCode = 400
        cidades.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        let estados = estadosCidades.getCidades(sigla)

        if (estados) {
            statusCode = 200
            cidades = estados
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(cidades)
})

//EndPoint: Lista de cidades filtrada pela sigla do estado
app.get('/v1/senai/cidades', cors(), async function(request, response, next) {

    //Recebe o valr da variável que ser enviada por QueryString
    //Ex: www.uol.com.br?uf=sp&cep=8547423&nome=vaiola
    /*
     * 
     *  Usamos a query para receber diversas variaveis para realizar filtros
     *  Usamos o params para reveber ID (PK), geralmente
     *          para fazer PUT, DELETE, GET
     * 
     */

    let siglaEstado = request.query.uf
    let statusCode
    let dadosCidades = {}

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
        statusCode = 400
        dadosCidades.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        let estados = estadosCidades.getCidades(siglaEstado)

        if (estados) {
            statusCode = 200
            dadosCidades = estados
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCidades)

})

//EndPoint versão 2: Lista de cidade filtrada pela sigla do estado com mais detelhes
app.get('/v2/senai/cidades', cors(), async function(request, response, next) {

    //Recebe o valr da variável que ser enviada por QueryString
    //Ex: www.uol.com.br?uf=sp&cep=8547423&nome=vaiola
    /*
     * 
     *  Usamos a query para receber diversas variaveis para realizar filtros
     *  Usamos o params para reveber ID (PK), geralmente
     *          para fazer PUT, DELETE, GET
     * 
     */

    let siglaEstado = request.query.uf
    let statusCode
    let dadosCidades = {}

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
        statusCode = 400
        dadosCidades.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        let estados = estadosCidades.getCidades(siglaEstado)

        if (estados) {
            statusCode = 200
            dadosCidades = estados
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCidades)

})


//Permite carregar os endPoints criados e aguardar as requisições 
//pelo protocolo HTTP na porta 8080
app.listen(8080, function() {


    console.log('Servidor aguardando requisições na porta 8080');

})