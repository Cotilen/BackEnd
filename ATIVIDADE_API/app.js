/*
 * Objetvo: Criar uma API para manipulação de dados de contatos
 * Autor: Cleiton
 * Data: 20/03/2023
 * Versão: 1.0
 */

var whatsapp = require('./MODEL/functions.js')

console.log(whatsapp.getContatos(1));

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




