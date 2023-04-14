#Cria um database
create database db_lion_school_turma_manha; 

#Visualiza todos os databases existentes no banco de dados
show databases;

#Seleciona o database que será utilizado
use db_lion_school_turma_manha; 

show tables;

create table tbl_aluno (
id int not null primary key auto_increment,
nome varchar(100) not null,
cpf varchar(18) not null,
rg varchar(15) not null,
data_nascimento date not null,
email varchar(250) not null,
unique index(id)
);

#Mostra a descrição da tabela
describe tbl_aluno;

#Insere dados na tabela de alunos
insert into tbl_aluno(
						nome, 
                        cpf, 
                        rg, 
                        data_nascimento, 
                        email) 
				values(
				'José da Silva',
				'300.400.458-10',
				'22.700.453-7',
				'2000-05-20',
				'jose@gmail.com');

insert into tbl_aluno(
						nome, 
                        cpf, 
                        rg, 
                        data_nascimento, 
                        email) 
				values(
                'Maria da Silva',
                '255.239.978-97',
                '23.467.345-31',
                '1974-07-27',
               'maria@gmail.com');
               
#Visualiza o conteúdo de uma tabela                
select * from tbl_aluno;

#Atualiza informações na tabela(Não esquecer do critério de busca
update tbl_aluno set email = 'jose@hotmail.com' where id = 1;

#Exclui o registro
delete from tbl_aluno where id=4;


