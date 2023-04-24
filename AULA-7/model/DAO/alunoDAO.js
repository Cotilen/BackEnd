/************************************************************************************
 * Objetvo: Realizar a interação do aluno com o banco de dados
 * Autor: Cleiton
 * Data: 14/04/2023
 * Versão: 1.0
 ************************************************************************************/

/*
 * Para realizar a conexão com o banco de dados, iremos utilizar o Prisma
 *        npm install prisma --save
 *        npx prisma
 *        npx prisma init
 *        npm instal @prisma/client 
 * 
 */

//Função para imserir um novo registro no Banco de Dados
const insertAluno = function(dadosAluno) {

}

//Função para atualizar um registro do Banco de Dados
const updateAluno = function(dadosAluno) {

}

//Função para deletar um registro do Banco de Dados
const deleteAluno = function(id) {

}

//Função para retornar todos os registros do Banco de Dados
const selectAllAluno = async function() {
    //Impo da biblioteca do Prisma Client(Responsável por maniular dados no banco de dados)
    const { PrismaClient } = require('@prisma/client')

    //Intância da classe do prisma client
    const prisma = new PrismaClient()

    let sql = 'select * from tbl_aluno'

    //Executa no banco de dados o scriptSQL
    //$queryRawUnsafe é utilizado quando o scriptSQL está em uma variável
    //$queryRaw é utilizado quando passar o script direto no métodos
    //Ex: $queryRaw('select * from tbl_aluno')
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retonou algum registro
    if (rsAluno.length > 0)
        return rsAluno
    else
        return false
}

//Função para retornar um registro filtrado pelo id do Banco de Dados
const selectByIdAluno = function(id) {

}

module.exports = {
    selectAllAluno
}