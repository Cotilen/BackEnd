/*******************************************************************
 * Objetivo: Trabalhando com Array e Json
 * Data: 24/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

//[] - significa que estamos manipulando um array de dados.
//{} - significa que estamos manipulando um formato json de dados.

const listaDeNomes = ['José', 'Maria', 'Luiz', 'Carlos', 'Dagoberto']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'Web-Cam']
const listaProdutosJson = {}

/*

    Exemplo de JSON com estrututra de array

produtos = {
            [ 
                {nome : "Teclado", cor: "Preto", quantidade: 50},
                {nome : "Monitor", cor: "Branco", quantidade: 30},
                {nome : "Mouse", cor: "Branco", quantidade: 200}
            ]
        }
*/


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

const removerElemento = function(array, nomeItem) {
    let nome = nomeItem
    const novosProdutos = array.slice()
    let indice = array.indexOf(nome)
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

const listagemProdutos = function() {
    let listProdutosJSON = {}


    let listProdutos = [
        { nome: 'Teclado DELL', valor: 200, quantidade: 50 },
        { nome: 'Monitor DELL', valor: 1000, quantidade: 70 },
        { nome: 'Mouse DELL', valor: 100, quantidade: 350 }
    ]

    let listCores = ['Branco', 'Preto', 'Cinza']
    let listTipoTeclados = ['Mecanico', 'Semi-Mecanico', 'Membrana']
    let listTipoMonitores = ['LCD ', 'Full-HD', '4K', 'OLED']

    //Adiciona chaves (opções) no Teclado
    listProdutos[0].cores = listCores
    listProdutos[0].tipo = listTipoTeclados

    //Adiciona chaves (opções) no Monitor
    listProdutos[1].cores = listCores
    listProdutos[1].tipo = listTipoMonitores

    //Adiciona chaves (opções) no Mouse
    listProdutos[2].cores = listCores

    //Adiciona uma chave produtos e coloca toda a estrutura dos produtos dentro dela
    listProdutosJSON.produtos = listProdutos

    // listaProdutosJson.produtos = listaProdutos
    // listaProdutosJson.clientes = listaDeNomes

    // console.log(listaProdutosJson.clientes);
    // console.log(listaProdutosJson.produtos);
    console.log(listProdutosJSON.produtos);

    // console.log(listProdutosJSON.produtos[1].nome);
    // console.log(listProdutosJSON.produtos[1].valor);
    // console.log(listProdutosJSON.produtos[1].cores[1]);


    // Minha resolução

    // let qtdeItensFor = listProdutosJSON.produtos.length
    // let cont = 0
    // listProdutosJSON.produtos.forEach(dadosProduto => {
    //     console.log('Nome:' + dadosProduto.nome);
    //     console.log('Valor:' + dadosProduto.valor);
    //     console.log('Cores:');

    //     for (let conti = 0; conti < qtdeItensFor; conti += 1)

    //         if (dadosProduto.cores != undefined)
    //             console.log(listProdutosJSON.produtos[cont].cores[conti])
    //         else {
    //             console.log('Esse produto não possui cores');
    //             break
    //         }
    //     console.log('Tipos:');

    //     for (let conti = 0; conti < qtdeItensFor; conti += 1)
    //         if (dadosProduto.tipo != undefined)
    //             console.log(listProdutosJSON.produtos[cont].tipo[conti]);
    //         else {
    //             console.log('Esse item não possui tipos');
    //             break
    //         }
    //     console.log();

    // Resolução Professor

    //Retorna todos os dados de produto (1º nível de dados do JSON)
    listProdutosJSON.produtos.forEach(dadosProduto => {
        console.log('Nome:' + dadosProduto.nome);
        console.log('Valor:' + dadosProduto.valor);

        //Validação para tratar quando não existe cores de produto
        if (dadosProduto.cores != undefined) {

            //Retorna todas as cores existentes de cada produto
            dadosProduto.cores.forEach(dadosCores => {
                console.log('***' + dadosCores)
            })
        }

        //Validação para tratar quando não existe tipos de produto
        if (dadosProduto.tipo != undefined) {

            //Retorna todas os tipos existentes de cada produto
            dadosProduto.tipo.forEach(dadosTipo => {
                console.log('****' + dadosTipo);

            })
        }
    });
    console.log(listProdutosJSON.produtos);


}

listagemProdutos()

// console.log(removerElemento(listaProdutos, 'Monitor'));