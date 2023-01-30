/*******************************************************************
 * Objetivo: Realizar a média escolar de quatro notas dos alunos.
 * Data: 27/01/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

console.log("Sistema de Calculo de Médias Escolares");

// Importe da biblioteca para entrada de dados
var readline = require("readline");

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/** CONCEITOS SOBRE A CRIAÇÃO DE VARIÁVEIS
 *
 * var - Toda variável criada como var, tem por objetivo ser um escopo global, ou seja
 * ela poderá ser utilizada em diversos pontos da programação.
 *
 * let - Toda variaável criada como let, tem por objetivo ser um escopo local,
 * ou seja, será utilizada somente naquela função.
 *
 * const - Tem por objetivo, criar um espaço em memória ppara armazenar dados
 * que não sofrem mudança.
 *
 *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

//Função de callback para retornar o nome do aluno
entradaDados.question("Digite o nome do aluno: \n", function(nome) {
    //Variável local para receber o nome do aluno,
    //que vai ser retornado pela função
    let nomeAluno = nome;

    //Função de callback para a entrada da nota1
    entradaDados.question("Digite a nota1: \n", function(nota1) {
        let primeiraNota = nota1;

        //Função de callback para a entrada da nota2
        entradaDados.question("Digite a nota2: \n", function(nota2) {
            let segundaNota = nota2;

            //Função de callback para a entrada da nota3
            entradaDados.question("Digite a nota3: \n", function(nota3) {
                let terceiraNota = nota3;

                //Função de callback para a entrada da nota4
                entradaDados.question("Digite a nota4: \n", function(nota4) {
                    let quartaNota = nota4;
                    let media = 0;

                    /**
                     * Conversão de dados String para Numero
                     * Number.parseInt() ou parseInt() - Converte para Inteiro
                     * Number.parseFloat() ou parseFloat() - Converte para Real
                     * Number() - converte para int ou float, conforme a entrada de dados
                     *
                     */

                    /**
                                        * Operadores de comparação (===, ==, !=, >, <, >=, <=)
                                        
                                        * === (Verificar a igualdade de conteúdo e validar a tipagem de dados)
                                        * EX: 0 == 0 V
                                              0 == '0' V 
                                              0 === '0' F

                                        *Operadores Lógicos
                                        *OU         ||(pipe)  OR
                                        *E          &&        AND
                                        *NEGAÇÃO    !         NOT

                                        *Ordem de execução dos operadores lógicos
                                        
                                        *0° ()
                                        *1° Negação
                                        *2° E
                                        *3° OU
                                     */

                    //Validação para tratar entradas vazias e caracteres errados
                    if (
                        primeiraNota == "" ||
                        segundaNota == "" ||
                        terceiraNota == "" ||
                        quartaNota == ""
                    ) {
                        console.log("Erro: É necessário digitar algum valor nas entradas.");
                    } else if (
                        isNaN(primeiraNota) ||
                        isNaN(segundaNota) ||
                        isNaN(terceiraNota) ||
                        isNaN(quartaNota)
                    ) {
                        console.log("Erro: É necessário digitar numeros nas entradas.");
                        //Validação de entrada de valores entre 0 e 10
                    } else if (primeiraNota > 10 || primeiraNota < 0 || segundaNota < 0 || segundaNota > 10 || terceiraNota < 0 || terceiraNota > 10 || quartaNota > 10 || quartaNota < 0) {

                        console.log('Erro: A nota deve ser maior que 0 e menor que 10')

                    } else {
                        media =
                            (Number(primeiraNota) +
                                Number(segundaNota) +
                                Number(terceiraNota) +
                                Number(quartaNota)) / 4;

                        console.log('A média deste aluno é ' +
                            media);

                        if (media >= 7) {
                            console.log('Este aluno foi aprovado')


                        } else {

                            console.log('Este aluno foi reprovado')
                        }
                    }

                });
            });
        });
    });
});