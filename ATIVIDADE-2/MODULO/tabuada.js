/*******************************************************************
 * Objetivo: Criar um sistema de gerencie  o cálculo de uma tabuada
 * Data: 10/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

const tabuada = function(valorMultiplicando, valorMultiplicador, valorInicio, valorFinal) {

    let resultado
    let multiplicando = Number(valorMultiplicando)
    let multiplicador = Number(valorMultiplicador)
    let contador = valorInicio
    let fim = valorFinal

    while (multiplicando <= multiplicador) {
        console.log(`\n*********** Tabuada do ${multiplicando} *********** \n`)

        for (let contador = valorInicio; contador <= fim; contador++) {

            resultado = multiplicando * contador
            console.log(`${multiplicando} x ${contador} = ${resultado}`)
        }

        multiplicando += 1

    }


}

// console.log(tabuada(10, 20, 0, 15))

module.exports = { tabuada }