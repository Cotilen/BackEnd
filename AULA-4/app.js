/*******************************************************************
 * Objetivo: Realizar uma calculadora simples que subtraia, some, multiplique e divida.
 * Data: 03/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

//Importe calculadora

var matematica = require("./Modulo/calculadora.js")

// Importe da biblioteca para entrada de dados
var readline = require('readline');
const { DefaultSerializer } = require("v8");

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
                entradaDados.close()

                // Validação para verificar se os dados verificados são números
                // Podemos uilizar o (isNaN ou typeof)
                // Se usar o typeof precisa garantir se o tipo de dados não é genérico(String)
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log("Erro: Não é possível calcular sem a entrada de valores numéricos")
                entradaDados.close
            } else {

                //Recebe da função o cálculo das operações( Função que nós criamos)
                resultado = matematica.calcular(valor1, valor2, operacao)

                //Verifica se o retorno da função é válido se for, exibe o valor, senão, encerra o programa
                if (resultado === false) //Pode usar tbm (resultado == false && typeof(resultado) == 'boolean')
                    entradaDados.close()
                else
                    console.log(resultado)

            }
        })
    })

})