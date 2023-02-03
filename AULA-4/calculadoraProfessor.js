/*******************************************************************
 * Objetivo: Realizar uma calculadora simples que subtraia, some, multiplique e divida.
 * Data: 03/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

//Importe calculadora

var matematica = require("./Modulo/calculadora.js")

// Importe da biblioteca para entrada de dados
var readline = require('readline')

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question("Valor1: \n", function(numero1) {

    let valor1 = numero1.replace(",", ".")

    entradaDados.question("Valor2: \n", function(numero2) {

        let valor2 = numero2.replace(",", ".")


        entradaDados.question("Escolha uma operação: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n", function(tipoCalculo) {

            // toUpperCase converte uma string para MAIÚSCULA
            // toLowerCase converte uma string para minúscula

            let operacao = tipoCalculo.toUpperCase()
            let resultado

            if (valor1 == "" || valor2 == "" || operacao == "") {
                console.log("Erro: Não é possível calcular sem preencher todos os dados.")

                // Validação para verificar se os dados verificados são números
                // Podemos uilizar o (isNaN ou typeof)
                // Se usar o typeof precisa garantir se o tipo de dados não é genérico(String)
            } else if (isNaN(valor1) || isNaN(valor1)) {
                console.log("Erro: Não é possível calcular sem a entrada de valores numéricos")
            } else {

                resultado = matematica.calcular(valor1, valor2, operacao)

                console.log(resultado)

            }
        })
    })

})