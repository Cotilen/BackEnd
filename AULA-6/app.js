/*******************************************************************
 * Objetivo: Trabalhando com Array
 * Data: 24/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

//[] - significa que estamos manipulando um array de dados.
//{} - significa que estamos manipulando um formato json de dados.

const listaDeNomes = ['José', 'Maria', 'Luiz', 'Carlos', 'Dagoberto']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'Web-Cam']

//Forma ERRADA de maniplar um conjunto de dados

//const nome1 = 'José'
//const nome2 = 'Maria'
//const nome3 = 'Luiz'
//const nome4 = 'Carlos'


const manipulandoElementos = function() {
    //verifica o tipo de dados do elemento listaDeNomes
    console.log(typeof(listaDeNomes));


    console.log(listaDeNomes);
    console.log(`O nome do usuário é ${listaDeNomes[2]}`);

    //lenght - Permite contar quantos elementos tem em um array
    console.log(`A quantdades de item do meu array é ${listaDeNomes.length}`);

    //Percorrendo um array usando While
    let cont = 0 //Start da repetição
    let qtdeItens = listaDeNomes.length // Stop da repetição

    console.log('\nExibindo dados do array com While\n');

    while (cont < qtdeItens) {
        console.log(`Nome: ${listaDeNomes[cont]}`);
        cont += 1
    }

    //Percorrendo um array usando For

    let qtdeItensFor = listaDeNomes.length
    console.log('\nExibindo dados do array com For\n');

    for (let cont = 0; cont < qtdeItensFor; cont += 1)
        console.log(`Nome: ${listaDeNomes[cont]}`)

    //Percorrendo um array usando FOREACH

    console.log('\nExibindo dados do array com Foreach\n');

    //Foreach é um método de um objeto array, qu retorna uma função de call back
    listaDeNomes.forEach(function(nome) {
        console.log(`Nome: ${nome}`);
    })

    //Adicionando elementos novos no ARRAY
    ////PUSH - Adiciona Elemenos no final do ARRAY
    listaDeNomes.push('Fernandinho', 'Beira-mar')
    console.log(listaDeNomes);

    //unshift - adiciona elementos no inicio do ARRAY (ele muda a posição de 
    //todos os próximos elementos

    listaDeNomes.unshift('Fergúncio', 'Leôncio')
    console.log(listaDeNomes);

    //Removendo elementos do ARRAY
    ////POP - Remove o último elemento do ARRAY
    listaDeNomes.pop()
    console.log(listaDeNomes)

    //shift - remove o primeiro elemento do ARRAY(ele reorganiza todos os 
    //próximos elementos )
    listaDeNomes.shift()
    console.log(listaDeNomes);
}

const filtrandoElementos = function() {
    //indexof - permite buscar elementos dentro de um ARRAY
    // se o retorno for -1 (não encontrou o item)
    // se o rtorno for maior ou igual a zero (item encontrado)
    console.log(listaProdutos);

    console.log(listaProdutos.indexOf('Fone'));

    if (listaProdutos.indexOf('Fone de Ouvido') >= 0)
        console.log('O item pesquisado foi encontrado');
    else
        console.log('O item não foi encontrado');

    //slice - Permite criar uma cópia do ARRAY
    // const novosProdutos = listaProdutos.slice(0, 3)
    // const novosProdutos = listaProdutos.slice()

    console.log(listaProdutos);
    console.log(novosProdutos);
}

const removerElemento = function(nomeProduto) {
    let nome = nomeProduto
    const novosProdutos = listaProdutos.slice()
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - Permite remover um elemento do array, pelo indice
    if (indice >= 0) {
        novosProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    if (status == true) {
        return novosProdutos
    } else
        return status
}

console.log(removerElemento('Monitor'));