/*******************************************************************
 * Objetivo: Realizar uma calculadora simples que subtraia, some, multiplique e divida.
 * Data: 30/01/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

console.log("Calculadora");

// Importe da biblioteca para entrada de dados
var readline = require("readline");
const { isNumber } = require("util");

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entradaDados.question("Digite o primeiro número \n", function(numero1) {

    let primeiroNumero = parseFloat(numero1.replace(",", "."))

    if (primeiroNumero == "" || primeiroNumero != Number(primeiroNumero)) {
        console.log("Erro: Digite um número")
    } else {
        console.log(primeiroNumero)
        entradaDados.question("Digite o segundo número \n", function(numero2) {

            let segundoNumero = parseFloat(numero2.replace(",", "."))

            if (segundoNumero == "" || segundoNumero != Number(segundoNumero)) {
                console.log("Erro: Digite um número")

            } else {


                entradaDados.question("Escolha a operação :\n" + "1" + "- Adição \n" + "2" + "- Subtração \n" + "3" + "- Divisão \n" + "4" + " - Multiplicação \n", function(simbolo) {

                    let operação = simbolo
                    let adicao = parseFloat(primeiroNumero) + parseFloat(segundoNumero)
                    let subtracao = (primeiroNumero - segundoNumero)
                    let divisao = (primeiroNumero / segundoNumero)
                    let multiplicacao = parseFloat(primeiroNumero) * parseFloat(segundoNumero)



                    if (operação == 1) {
                        console.log("O resultado da adição é " + adicao)
                    } else if (operação == 2) {
                        console.log("O resultado da subtração é " + subtracao)
                    } else if (operação == 3) {
                        console.log("O resultado da divisão é " + divisao)
                    } else if (operação == 4) {
                        console.log("O resultado multiplicação é " + multiplicacao)
                    } else {
                        console.log("Erro: Por favor escolha uma das alternativas")
                    }

                })

            }

        })
    }



})