/*******************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
 * Data: 10/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

var calculos = require('./MODULO/calculadora')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite a primeira nota \n', function(valor1) {

    let nota_1 = valor1.replace(',', '.')

    entradaDados.question('Digite a segunda nota \n', function(valor2) {

        let nota_2 = valor2.replace(',', '.')


        entradaDados.question('Digite a terceira nota \n', function(valor3) {

            let nota_3 = valor3.replace(',', '.')


            entradaDados.question('Digite a quarta nota \n', function(valor4) {

                let nota_4 = valor4.replace(',', '.')

                let resultado = calculos.calcularMedia(valor1, valor2, valor3, valor4)
                console.log(resultado)



            })
        })
    })
})