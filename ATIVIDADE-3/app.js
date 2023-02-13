/*******************************************************************
 * Objetivo: Criar um sistema que separe os números ímpares dos pares
 * Data: 13/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

var readline = require('readline')
var separacao = require('./Modulo/parImpar')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero inicial [ENTRE 0 E 500]:\n', function(valorInicio) {

    let valorMin = parseInt(valorInicio)

    if (valorMin < 0 || valorMin > 500 || isNaN(valorMin) || valorMin === '') {
        console.log('ERRO: Digite apenas NÚMEROS entre 0 e 500')
        entradaDados.close()

    } else {
        entradaDados.question('Digite o valor final [ENTRE 100 E 1000]:\n', function(valorFim) {

            let valorMax = parseInt(valorFim)

            if (valorMax < 100 || valorMax > 1000 || valorMax == '' || isNaN(valorMax)) {
                console.log('ERRO: Digite apenas NÚMEROS entre 100 e 1000')
                entradaDados.close()

            } else if (valorMin == valorMax) {
                console.log('ERRO: O núumero inicial não pode ser igual ao final')
                entradaDados.close()

            } else if (valorMin > valorMax) {
                console.log('ERRO: O número inicial não pode ser maior que o final')
                entradaDados.close()

            } else {
                entradaDados.question('Você deseja calcular como?\n ' + '1) Somente pares\n' + '2) Somente Ímpares\n' + '3) Ambos', function(value) {

                    separacao.parImpar(valorMin, valorMax, value)
                    entradaDados.close()

                })
            }

        })
    }


})