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

//Import da biblioteca do Prisma Client(Responsável por maniular dados no banco de dados)
const { PrismaClient } = require('@prisma/client')

//Intância da classe do prisma client
const prisma = new PrismaClient()

//Função para imserir um novo registro no Banco de Dados
const insertAluno = async function(dadosAluno) {

    //Script sql para inserir os dados no BD
    let sql = `insert into tbl_aluno(nome,
        cpf,
        rg,
        data_nascimento,
        email)
        values
        ('${dadosAluno.nome}',
        '${dadosAluno.cpf}',
        '${dadosAluno.rg}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
            )`

    //Executa o script sql no banco de dados e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql)


    if (result)
        return true
    else
        return false
}

//Função para atualizar um registro do Banco de Dados
const updateAluno = async function(dadosAluno) {
    let sql = `update tbl_aluno set
    nome='${dadosAluno.nome}',
    rg='${dadosAluno.rg}',
    cpf='${dadosAluno.cpf}',
    data_nascimento='${dadosAluno.data_nascimento}',
    email='${dadosAluno.email}'
    where id = '${dadosAluno.id}'`

    
let result = await prisma.$queryRawUnsafe(sql)

//Valida se o banco de dados retonou algum registro
if (result.length > 0)
    return result
else
    return false

}


//Função para deletar um registro do Banco de Dados
const deleteAluno = async function(id) {

    let sql = `delete from tbl_aluno where id=${id}`

    let result = await prisma.$queryRawUnsafe(sql)

//Valida se o banco de dados retonou algum registro
if (result)
    return true
else
    return false


}

//Função para retornar todos os registros do Banco de Dados
const selectAllAluno = async function() {


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
    selectAllAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}