var calculos = require('./MODULO/calculadora')
var readline = require('readline')
var sexo = require('./MODULO/sexo')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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

                        entradaDados.question('Digite a primeira nota: \n', function(valor1) {

                            let nota_1 = valor1.replace(',', '.')

                            entradaDados.question('Digite a segunda nota: \n', function(valor2) {

                                let nota_2 = valor2.replace(',', '.')


                                entradaDados.question('Digite a terceira nota: \n', function(valor3) {

                                    let nota_3 = valor3.replace(',', '.')


                                    entradaDados.question('Digite a quarta nota: \n', function(valor4) {

                                        let nota_4 = valor4.replace(',', '.')

                                        let resultado = calculos.calcularMedia(nota_1, nota_2, nota_3, nota_4)

                                        console.log(resultado)

                                        if (resultado < 50) {

                                            if (sexoAluno == 'FEMININO' && sexoProfessor == 'FEMININO') {
                                                console.log(`\nA aluna ${aluno} foi reprovada na disciplina ${disciplina}.
                                                Curso: ${curso}\n
                                                Professora: ${professor}\n
                                                Notas do aluno: ${nota_1},${nota_2},${nota_3},${nota_4}\n
                                                Média Final:${resultado}`)
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