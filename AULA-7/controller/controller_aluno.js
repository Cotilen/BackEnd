/************************************************************************************
 * Objetvo: Implementa a regra de negócio entre o app e a model
 * Autor: Cleiton
 * Data: 24/04/2023
 * Versão: 1.0
 ************************************************************************************/

//Import do arquivo de acesso ao BD
const alunoDAO = require('../model/DAO/alunoDAO.js')

//Import do arquivo de glodal de configurações do projeto
const message = require('./modulo/config.js')

//Função para receber os dados do APP e enviar para a Model para inderir um novo item
const inserirAluno = async function(dadosAluno) {


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

        if (status) {
            let dadosJson = {}

            let alunoNovoId = await alunoDAO.selectLastId()
            dadosAluno.id = alunoNovoId

            dadosJson.status = message.CREATED_ITEM.status
            dadosJson.aluno = dadosAluno

            return dadosJson
        } else
            return message.ERROR_INTERNAL_SERVER

    }

}

//Função para receber os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAlunos = async function(dadosAluno, idAluno) {

    //Validação de dados
    if (dadosAluno.nome == undefined || dadosAluno.nome == '' || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == undefined || dadosAluno.cpf == '' || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == undefined || dadosAluno.rg == '' || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == undefined || dadosAluno.email == '' || dadosAluno.email.length > 250
    ) {
        return message.ERROR_REQUIRED_DATA

        //Validação para o id
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_REQUIRED_ID

    } else {
        //Adiciona o ID no JSON com todos os dados
        dadosAluno.id = idAluno


        //Encaminha para o DAO os dados para serem alterados
        let status = await alunoDAO.updateAluno(dadosAluno)
        console.log(status);


        if (status) {
            let dadosJson = {}
            dadosJson.status = message.UPDATED_ITEM.status
            dadosJson.aluno = dadosAluno

            return dadosJson

        } else {
            return message.ERROR_INTERNAL_SERVER

        }
    }
}

//Função para excluir um aluno filtrado pelo ID, será encaminhado para a Model
const deletarAlunos = async function(dadosAluno, id) {

    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_REQUIRED_ID
    } else {
        let status = await alunoDAO.deleteAluno(id)

        dadosAluno.id = id

        if (status) {
            return message.DELETED_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER

        }
    }

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
        dadosJson.status = 200
        dadosJson.count = dadosAluno.length
        dadosJson.Alunos = dadosAluno
        return dadosJson
    } else {
        return message.ERROR_NOT_FOUND
    }

}

//Função para buscar um item filtrado pelo ID, que será encaminhado pela Model
const buscarIdAluno = async function(id) {

    //Validação para o ID
    if (id == '' || id == undefined || isNaN(id))
        return message.ERROR_REQUIRED_ID
    else {
        //Solicita ao DAO todos os alunos do BD
        let dadosAluno = await alunoDAO.selectByIdAluno(id)

        //Cria um objeto do tipo json
        let dadosJson = {}

        //Valida se BD teve registros
        if (dadosAluno) {
            //Adiciona o array de alunos em um JSON para retornar ao app
            dadosJson.status = 200
            dadosJson.Alunos = dadosAluno
            return dadosJson
        } else {
            return message.ERROR_NOT_FOUND
        }
    }

}

module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAlunos,
    deletarAlunos,
    buscarIdAluno
}