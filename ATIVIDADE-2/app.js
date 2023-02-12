/*******************************************************************
 * Objetivo: Criar um sistema de gerencie o cálculo de uma tabuada
 * Data: 10/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

var readline = require('readline')
var calculos = require('./MODULO/tabuada')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('\n**********************MULTIPLICANDO**********************\n')
entradaDados.question('Digite o número inicial da tabuada [ENTRE 2 E 100]: \n', function(numeroInicial) {

    let tabuadaInicial = numeroInicial

    entradaDados.question('Digite o número final da tabuada [ENTRE 2 E 100]: \n', function(numeroFinal) {

        let tabuadaFinal = numeroFinal

        if (tabuadaFinal < tabuadaInicial) {
            console.log('ERRO: O número final não pode ser maior que o inicial')
            entradaDados.close()

        } else if (tabuadaInicial < 2 || tabuadaFinal > 100) {
            console.log('ERRO: Digite apenas números entre 2 e 100')
            entradaDados.close()

        } else {

            console.log('\n**********************MULTIPLICADOR**********************\n')
            entradaDados.question('Digite o contador inicial da tabuada (Multiplicador): \n', function(valorContadorInicial) {

                let contadorInicial = valorContadorInicial

                entradaDados.question('Digite o contador final da tabuada (Multiplicador): \n', function(valorContadorFinal) {

                    let contadorFinal = valorContadorFinal

                    if (contadorFinal < contadorInicial) {
                        console.log('ERRO: O número final não pode ser maior que o inicial')
                        entradaDados.close()
                    } else if (contadorInicial < 1 || contadorFinal > 50) {
                        console.log('ERRO: Digite apenas números entre 1 e 50')
                        entradaDados.close()

                    } else {
                        console.log(calculos.tabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal))
                        entradaDados.close()
                    }


                })
            })
        }


    })
})