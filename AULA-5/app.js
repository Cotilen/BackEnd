/*******************************************************************
 * Objetivo: Realizar o calculo de uma tabuada tendo duas entradas a tabuada e o contador.
 * Data: 09/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

var matematica = require('./modulo/tabuada')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o multiplicando \n', function(valor1) {

    let multiplicando = valor1.replace(",", ".")

    entradaDados.question('Digite o multiplicador \n', function(valor2) {

        let multiplicador = valor2.replace(",", ".")


        let resultado = matematica.calcularTabuada(multiplicando, multiplicador)
        if (resultado == false) {
            console.log('ERRO: Não foi possível realizar o cálculo')
            entradaDados.close()
        } else {
            console.log(resultado)
            entradaDados.close()
        }






    })

})