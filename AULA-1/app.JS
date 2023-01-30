// Comentário em linha

/*
    Comentário 
        em 
       bloco
*/

//Permite escrever uma mensagem no terminal
console.log('Vai aparecer mesmo??')
console.log('NÃO!!!Não vai!')

//Import da biblioteca que faz entrada de dados pelo usuário
var readline = require('readline')

//Criamos um objeto entradaDados com as referências do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// Uma funçao de call back é uma função que quando
// chamada ela retorna seu conteúdo em uma única instrução, ou seja, 
//em apenas um passo na programação

//Criamos uma função de call back para receber os dados digitados pelo usuário
/*(O objeto entrada dados aguarda a digitação do usuário, após a    
digitação do conteúdo é acionado um call back para encaminhar os dados
para o console.log. Esse conteúdo foi encaminhado através do parametro
dados da função)*/
entradaDados.question("Digite seu nome: \n", function(dados) {

    console.log('Bem Vindo, ' + dados + ' ao servidor node.JS')

});