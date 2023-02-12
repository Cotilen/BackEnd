/*******************************************************************
 * Objetivo: Criar um sistema de gerencie  o cálculo de uma tabuada
 * Data: 10/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

const tabuada = function(valorMultiplicandoInicio, valorMultiplicandoFinal, valorContadorInicio, valorContadorFinal) {

    let resultado
    let multiplicando = valorMultiplicandoInicio
    let multiplicandoFinal = valorMultiplicandoFinal
    let inicioContador
    let fimContador = valorContadorFinal


    while (multiplicando <= multiplicandoFinal) {
        console.log(`\n*********** Tabuada do ${multiplicando} *********** \n`)

        inicioContador = valorContadorInicio
        while (inicioContador <= fimContador) {
            resultado = multiplicando * inicioContador

            console.log(`${multiplicando} x ${inicioContador} = ${resultado}`)
            inicioContador++
        }
        multiplicando++

    }


}

// console.log(tabuada(5, 10, 5, 10))

module.exports = { tabuada }