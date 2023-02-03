/*******************************************************************
 * Objetivo: Realizar uma calculadora simples que subtraia, some, multiplique e divida.
 * Data: 03/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

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


                if (operacao == "SOMAR") {
                    resultado = parseFloat(valor1) + parseFloat(valor2)
                } else if (operacao == "SUBTRAIR") {
                    resultado = parseFloat(valor2) - parseFloat(valor2)
                } else if (operacao == "DIVIDIR") {
                    if (valor2 == 0) {
                        console.log("ERRO: Não é possível fazer uma divisão por zero")
                        entradaDados.close()
                    } else {
                        resultado = parseFloat(valor1) / parseFloat(valor2)
                    }
                } else if (operacao == "MULTIPLICAR") {
                    resultado = parseFloat(valor1) * parseFloat(valor2)

                } else {
                    console.log("Erro: A operação informada não é valida. Confira sua entrada.")
                    entradaDados.close()
                }
                if (resultado != undefined) {
                    console.log(resultado)
                    entradaDados.close()
                }
            }
        })
    })

})