/*******************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
 * Data: 10/02/23
 * Autor: Cleiton
 * Versão: 1.0
 ******************************************************************/

var calculos = require('./MODULO/calculadora')
var readline = require('readline')


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('*******************Cadastro*******************')
console.log('\n')
entradaDados.question('Digite o nome do aluno(a): \n', function(nome) {

    let aluno = nome

    entradaDados.question('Digite o sexo do aluno(a) [MASCULINO | FEMININO]: \n', function(sexo) {

        let sexoAluno = sexo.toUpperCase()



        entradaDados.question('Digite o nome do professor(a): \n', function(nome) {

            let professor = nome

            entradaDados.question('Digite o sexo do professor(a) [MASCULINO | FEMININO]: \n', function(sexo) {

                let sexoProfessor = sexo.toUpperCase()


                entradaDados.question('Digite o curso: \n', function(valorCurso) {

                    let curso = valorCurso

                    entradaDados.question('Digite a disciplina: \n', function(valorDisciplina) {

                        let disciplina = valorDisciplina

                        console.log('*******************Média*******************')
                        console.log('\n')

                        entradaDados.question('Digite a primeira nota: \n', function(valor1) {

                            let nota_1 = valor1.replace(',', '.')

                            entradaDados.question('Digite a segunda nota: \n', function(valor2) {

                                let nota_2 = valor2.replace(',', '.')


                                entradaDados.question('Digite a terceira nota: \n', function(valor3) {

                                    let nota_3 = valor3.replace(',', '.')


                                    entradaDados.question('Digite a quarta nota: \n', function(valor4) {

                                        let nota_4 = valor4.replace(',', '.')

                                        let resultado = calculos.calcularMedia(nota_1, nota_2, nota_3, nota_4)

                                        if (sexoAluno != 'FEMININO' || sexoProfessor != 'FEMININO' ||
                                            sexoAluno != 'MASCULINO' || sexoProfessor != 'MASCULINO') {
                                            console.log('ERRO: Por favor, digite apenas MASCULINO ou FEMININO')
                                        } else {
                                            if (nota_1 < 0 || nota_1 > 100 || isNaN(nota_1) ||
                                                nota_2 < 0 || nota_2 > 100 || isNaN(nota_2) ||
                                                nota_3 < 0 || nota_3 > 100 || isNaN(nota_3) ||
                                                nota_4 < 0 || nota_4 > 100 || isNaN(nota_4)) {
                                                console.log('ERRO: Digite um NÚMERO entre 0 e 100!')
                                                entradaDados.close()
                                            } else {
                                                if (aluno == '' || professor == '' || sexoAluno == '' || sexoProfessor == '' ||
                                                    curso == '' || disciplina == '' || nota_1 == '' || nota_2 == '' || nota_3 == '' ||
                                                    nota_4 == '') {
                                                    console.log('ERRO: Não é possível gerar o relatório sem que todos os valores estejam preenchidos!')
                                                    entradaDados.close()
                                                } else {
                                                    if (resultado < 50) {
                                                        console.log('*******Relatório do Aluno*******')
                                                        console.log('\n')
                                                        if (sexoAluno == 'FEMININO') {
                                                            console.log(`A aluna ${aluno} foi reprovada na disciplina ${disciplina}.`)
                                                            console.log(`Curso: ${ curso }\n`)
                                                            if (sexoProfessor == 'FEMININO') {
                                                                console.log(`Professora: ${ professor }\n`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }\n`)
                                                                console.log(`Média Final: ${resultado}`)
                                                            } else {
                                                                console.log(`Professor: ${ professor }\n`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }\n`)
                                                                console.log(`Média Final: ${resultado}`)
                                                                entradaDados.close
                                                            }
                                                        } else {
                                                            console.log(`O aluno ${aluno} foi reprovado na disciplina ${disciplina}.`)
                                                            console.log(`Curso: ${ curso }\n`)
                                                            if (sexoProfessor == 'FEMININO') {
                                                                console.log(`Professora: ${ professor }\n`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }\n`)
                                                                console.log(`Média Final: ${resultado}`)
                                                            } else {
                                                                console.log(`Professor: ${ professor }\n`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }\n`)
                                                                console.log(`Média Final: ${resultado}`)
                                                                entradaDados.close
                                                            }
                                                        }
                                                    } else if (resultado >= 70) {
                                                        console.log('*******Relatório do Aluno*******')
                                                        console.log('\n')
                                                        if (sexoAluno == 'FEMININO') {
                                                            console.log(`A aluna ${aluno} foi APROVADA na disciplina ${disciplina}.`)
                                                            console.log(`Curso: ${ curso }`)
                                                            if (sexoProfessor == 'FEMININO') {
                                                                console.log(`Professora: ${ professor }`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }`)
                                                                console.log(`Média Final: ${resultado}`)
                                                            } else {
                                                                console.log(`Professor: ${ professor }`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }`)
                                                                console.log(`Média Final: ${resultado}`)
                                                                entradaDados.close
                                                            }
                                                        } else {
                                                            console.log(`O aluno ${aluno} foi APROVADO na disciplina ${disciplina}.`)
                                                            console.log(`Curso: ${ curso }\n`)
                                                            if (sexoProfessor == 'FEMININO') {
                                                                console.log(`Professora: ${ professor }\n`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }\n`)
                                                                console.log(`Média Final: ${resultado}`)
                                                            } else {
                                                                console.log(`Professor: ${ professor }\n`)
                                                                console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }\n`)
                                                                console.log(`Média Final: ${resultado}`)
                                                                entradaDados.close
                                                            }
                                                        }
                                                    } else {
                                                        entradaDados.question('Digite a nota do exame:\n', function(valorExame) {

                                                            let notaExame = valorExame
                                                            let resultadoExame = calculos.calcularMediaExame(resultado, notaExame)

                                                            if (resultadoExame == '' || resultadoExame < 0 || resultadoExame > 100 || isNaN(notaExame)) {
                                                                console.log('ERRO: Digite um NÚMERO entre 0 e 100!')
                                                                entradaDados.close()
                                                            } else {
                                                                if (resultadoExame < 50) {
                                                                    console.log('*******Relatório do Aluno*******')
                                                                    console.log('\n')
                                                                    if (sexoAluno == 'FEMININO') {
                                                                        console.log(`A aluna ${aluno} foi REPROVADO pelo exame na disciplina ${disciplina}.`)
                                                                        console.log(`Curso: ${ curso }\n`)
                                                                        if (sexoProfessor == 'FEMININO') {
                                                                            console.log(`Professora: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                        } else {
                                                                            console.log(`Professor: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                            console.log(`Média final Exame: ${resultadoExame}`)
                                                                            entradaDados.close
                                                                        }
                                                                    } else {
                                                                        console.log(`O aluno ${aluno} foi REPROVADO pelo exame na disciplina ${disciplina}.`)
                                                                        console.log(`Curso: ${ curso }\n`)
                                                                        if (sexoProfessor == 'FEMININO') {
                                                                            console.log(`Professora: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                        } else {
                                                                            console.log(`Professor: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                            console.log(`Média final Exame: ${resultadoExame}`)
                                                                            entradaDados.close
                                                                        }
                                                                    }
                                                                } else {
                                                                    console.log('*******Relatório do Aluno*******')
                                                                    console.log('\n')
                                                                    if (sexoAluno == 'FEMININO') {
                                                                        console.log(`A aluna ${aluno} foi APROVADA pelo exame na disciplina ${disciplina}.`)
                                                                        console.log(`Curso: ${ curso }\n`)
                                                                        if (sexoProfessor == 'FEMININO') {
                                                                            console.log(`Professora: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                        } else {
                                                                            console.log(`Professor: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                            console.log(`Média final Exame: ${resultadoExame}`)
                                                                            entradaDados.close
                                                                        }
                                                                    } else {
                                                                        console.log(`O aluno ${aluno} foi APROVADO pelo exame na disciplina ${disciplina}.`)
                                                                        console.log(`Curso: ${ curso }\n`)
                                                                        if (sexoProfessor == 'FEMININO') {
                                                                            console.log(`Professora: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                        } else {
                                                                            console.log(`Professor: ${ professor }\n`)
                                                                            console.log(`Notas do aluno: ${ nota_1 }, ${ nota_2 }, ${ nota_3 }, ${ nota_4 }, Exame: ${notaExame}\n`)
                                                                            console.log(`Média Final: ${resultado}`)
                                                                            console.log(`Média final Exame: ${resultadoExame}`)
                                                                            entradaDados.close
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})