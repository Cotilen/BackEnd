/*******************************************************************
 * Objetivo: Manipulando Array e Json
 * Data: 03/03/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

import estados from "./estados_cidades.js"


function getListaDeEstados() {


    estados.estadosCidades.estados.forEach(estadosForEach => {
        console.log(estadosForEach.sigla);


    });
}


getListaDeEstados()