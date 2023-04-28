/************************************************************************************
 * Objetvo: Arquivo responsável pelas variáveis, constatntes e funções globais do projeto
 * Autor: Cleiton
 * Data: 28/04/2023
 * Versão: 1.0
 ************************************************************************************/

//Constantes de erros
const ERROR_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.' }
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor de banco de dados' }

//Constantes de sucessos
const CREATED_ITEM = { status: 201, message: 'Registro criado com sucesso' }

module.exports = {
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_DATA,
    CREATED_ITEM
}