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
        let status = true

        if (value == 1) {
            console.log('*Pares*\n')
            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 == 0)
                    console.log(`*  ${i}  *`)
            }

        } else if (value == 2) {
            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 != 0) {
                    console.log(`*  ${i}  *`)
                }
            }

        } else {
            console.log('*Pares*\n')
            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 == 0)
                    console.log(`*  ${i}  *`)
            }
            console.log('\n*Ímpares*\n')

            for (i = valorMin; i <= valormax; i++) {
                if (i % 2 != 0) {
                    console.log(`*  ${i}  *`)

                }
            }
        }
    }
    // console.log(parImpar(1, 11))

module.exports = { parImpar }