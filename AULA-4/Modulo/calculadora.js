/*******************************************************************
 * Objetivo: Arquivo de istrução para realizar cálculos matemáticos
 * Data: 03/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

//Realzar o calculo matemático das quatro operações(Somar, Subtrair, Dividir, Multiplicar)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor1 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == "SOMAR") {
        resultado = (valor1) + (valor2)
    } else if (operacao == "SUBTRAIR") {
        resultado = valor2 - (valor2)
    } else if (operacao == "DIVIDIR") {
        if (valor2 == 0) {
            console.log("ERRO: Não é possível fazer uma divisão por zero")
        } else {
            resultado = valor1 / valor2
        }
    } else if (operacao == "MULTIPLICAR") {
        resultado = valor1 * valor2

    } else {
        console.log("Erro: A operação informada não é valida. Confira sua entrada.")
    }
    if (resultado != undefined) {
        return resultado
    } else
        return false
}

// Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}