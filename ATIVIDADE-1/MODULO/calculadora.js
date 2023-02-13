/*******************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
 * Data: 10/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/



const calcularMediaExame = function(media, valorExame) {

    let mediaExame = media
    let notaExame = valorExame
    let resultadoFinal = (Number(mediaExame) + Number(notaExame)) / 2

    return resultadoFinal




}
const calcularMedia = function(valor1, valor2, valor3, valor4) {

    let nota_1 = valor1
    let nota_2 = valor2
    let nota_3 = valor3
    let nota_4 = valor4

    let media = (Number(nota_1) + Number(nota_2) + Number(nota_3) + Number(nota_4)) / 4

    return media
}


module.exports = { calcularMedia, calcularMediaExame }
    // module.exports = { calcularMediaExame }