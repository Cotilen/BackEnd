/*******************************************************************
 * Objetivo: Arquivo de istrução para realizar cálculos matemáticos
 * Data: 03/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

//Realzar o calculo matemático das quatro operações(Somar, Subtrair, Dividir, Multiplicar)

// //Forma 01 (Tradicipnal) 
// function calcular(numero1, numero2, tipoCalculo) {



//     let valor1 = Number(numero1)
//     let valor2 = Number(numero2)
//     let operacao = tipoCalculo.toUpperCase()
//     let resultado
//     let status = true


//     switch (operacao) {
//         case 'SOMAR':
//             resultado = (valor1) + (valor2)
//             break

//         case 'SUBTRAIR':
//             resultado = (valor1) - (valor2)
//             break

//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2
//             break

//         case 'DIVIDIR':
//             if (valor2 == 0) {
//                 console.log("ERRO: Não é possível fazer uma divisão por zero")
//                 status = false
//             } else {
//                 resultado = valor1 / valor2

//             }
//             break

//         default:
//             console.log("Erro: A operação informada não é valida. Confira sua entrada.")
//             status = false


//     }
//     if (resultado != undefined) {
//         return resultado
//     } else
//         return status
// }

// // Exporta uma função para ser utilizada em outro arquivo
// module.exports = {
//     calcular
// }

//Forma 02 (é uma das mais utilizadas hoje)

const calcular = function(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    // if (operacao == "SOMAR") {
    //     
    // } else if (operacao == "SUBTRAIR") {
    //     resultado = (valor1) + (valor2)
    // } else if (operacao == "DIVIDIR") {
    //    
    //     }
    // } else if (operacao == "MULTIPLICAR") {
    //     

    // } else {
    //     
    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2)
            break

        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2)
            break

        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2)
            break

        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log("ERRO: Não é possível fazer uma divisão por zero")
                status = false
            } else {
                resultado = DIVIDIR(valor1, valor2)

            }
            break

        default:
            console.log("Erro: A operação informada não é valida. Confira sua entrada.")
            status = false


    }
    if (resultado != undefined) {
        return Number(resultado.toFixed(2))
    } else
        return status
}

//Forma 03 (Arrow Function) Exemplo de funções privadas

const SOMAR = (valor1, valor2) => valor1 + valor2
const SUBTRAIR = (valor1, valor2) => valor1 - valor2
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2
const DIVIDIR = (valor1, valor2) => valor1 / valor2



// Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}