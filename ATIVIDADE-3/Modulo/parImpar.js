/*******************************************************************
 * Objetivo: Criar um sistema que separe os números ímpares dos pares
 * Data: 13/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

const parImpar = function(valorInicio, valorFinal, escolha) {

        let valorMin = valorInicio
        let valormax = valorFinal
        let value = escolha
        let contador = 0
        let contadorImpar = 0

        if (value == 1) {
            console.log('*Pares*\n')
            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 == 0) {
                    console.log(`*  ${i}  *`)
                    contador++
                }
            }
            console.log(`Quantidade de números pares encontrados ${contador}`)

        } else if (value == 2) {
            console.log('\n*Ímpares*\n')

            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 != 0) {
                    console.log(`*  ${i}  *`)
                    contadorImpar++
                }
            }
            console.log(`Quantidade de números ímpares encontrados ${contador}`)

        } else {
            console.log('*Pares*\n')
            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 == 0) {
                    console.log(`*  ${i}  *`)
                    contador++
                }
            }
            console.log(`Quantidade de números pares encontrados ${contador}`)
            console.log('\n*Ímpares*\n')
            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 != 0) {
                    console.log(`*  ${i}  *`)
                    contadorImpar++
                }
            }
            console.log(`Quantidade de números ímpares encontrados ${contador}`)

        }
    }
    // parImpar(5, 13, 3)
module.exports = { parImpar }