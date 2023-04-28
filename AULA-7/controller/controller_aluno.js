/************************************************************************************
 * Objetvo: Implementa a regra de negócio entre o app e a model
 * Autor: Cleiton
 * Data: 24/04/2023
 * Versão: 1.0
 ************************************************************************************/

//Import do arquivo de acesso ao BD
const alunoDAO = require('../model/DAO/alunoDAO.js')

//Função para receber os dados do APP e enviar para a Model para inderir um novo item
const inserirAluno = async function(dadosAluno) {

    //Import do arquivo de glodal de configurações do projeto
    let message = require('./modulo/config.js')

    if (dadosAluno.nome == undefined || dadosAluno.nome == '' || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == undefined || dadosAluno.cpf == '' || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == undefined || dadosAluno.rg == '' || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == undefined || dadosAluno.email == '' || dadosAluno.email.length > 250
    ) {
        return message.ERROR_REQUIRED_DATA
    } else {
        //Envia os dados para a model a serem inseridos no BD
        let status = await alunoDAO.insertAluno(dadosAluno)

        if (status)
            return message.CREATED_ITEM
        else
            return message.ERROR_INTERNAL_SERVER

    }

}

//Função para receber os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAlunos = function(dadosAluno) {

}

//Função para excluir um aluno filtrado pelo ID, será encaminhado para a Model
const deletarAlunos = function(id) {

}

//Função para retornar todos os itens da tabela recebidos da Model
const selecionarTodosAlunos = async function() {


    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno()

    //Cria um objeto do tipo json
    let dadosJson = {}

    //Valida se BD teve registros
    if (dadosAluno) {
        //Adiciona o array de alunos em um JSON para retornar ao app
        dadosJson.Alunos = dadosAluno
        return dadosJson
    } else
        return false

}

//Função para buscar um item filtrado pelo ID, que será encaminhado pela Model
const buscarIdAluno = function(id) {

}

module.exports = {
    selecionarTodosAlunos,
    inserirAluno
}