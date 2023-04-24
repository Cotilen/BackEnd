/************************************************************************************
 * Objetvo: Implementa a regra de negócio entre o app e a model
 * Autor: Cleiton
 * Data: 24/04/2023
 * Versão: 1.0
 ************************************************************************************/

//Função para receber os dados do APP e enviar para a Model para inderir um novo item
const inserirAlunos = function(dadosAluno) {

}

//Função para receber os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAlunos = function(dadosAluno) {

}

//Função para excluir um aluno filtrado pelo ID, será encaminhado para a Model
const deletarAlunos = function(id) {

}

//Função para retornar todos os itens da tabela recebidos da Model
const selecionarTodosAlunos = async function() {

    //Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

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
    selecionarTodosAlunos
}