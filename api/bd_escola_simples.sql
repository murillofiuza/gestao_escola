CREATE DATABASE sis_escola;

use sis_escola;

CREATE TABLE aluno (
	id int primary key auto_increment,
	nome varchar(150),
	cpf varchar(150),
    rg varchar(30),
	email varchar(150),
	endereco varchar(150),
	numero varchar(25),
	cidade varchar(150),
	estado varchar(150),
	telefone varchar(16),
	dt_nascimento date
);

CREATE TABLE curso (
	id int primary key auto_increment,
	nome varchar(150),
    requisitos varchar(150),
    cg_horaria varchar(150)
    /*id_profesor int,
	foreign key (id_professor) references professor(id)*/
);

CREATE TABLE professor (
	id int primary key auto_increment,
	nome varchar(150),
	email varchar(150),
	cpf varchar(14),
	endereco varchar(150),
	numero varchar(25),
	cidade varchar(150),
	estado varchar(150),
	telefone varchar(16)
);
CREATE TABLE turma (
	id int primary key auto_increment,
	id_curso int(30),
    id_professor int(30),
    dt_inicio date,
    dt_final date,
    cg_horaria varchar(50),
	foreign key (id_curso) references curso(id),
    foreign key (id_professor) references professor(id)
);

CREATE TABLE matricula (
	id int primary key auto_increment,
	id_aluno int(30),
	id_curso int(30),
	dt_matricula date,
	foreign key (id_aluno) references aluno(id),
	foreign key (id_curso) references curso(id)
);









CREATE TABLE historico (
id int primary key auto_increment,
id_aluno int(30),
id_curso int(30),
id_matricula int(30),
foreign key (id_aluno) references aluno(id),
foreign key (id_curso) references curso(id),
foreign key (id_matricula) references matricula(id)
);

CREATE TABLE funcionario (
	id int primary key auto_increment,
	nome varchar(150),
	email varchar(150),
	cpf varchar(14),
    senha varchar(175),
	endereco varchar(150),
	numero varchar(25),
	cidade varchar(150),
	estado varchar(150),
	telefone varchar(16)
);

CREATE TABLE pagamento (
id int primary key auto_increment,
ds_pagamento varchar(100)

);

CREATE TABLE financeiro (
id int primary key auto_increment,
id_aluno int(30),
id_funcionario int(30),
id_pagamento int(30),
valor_total decimal(30),
desconto varchar(40),
dt int(30), 
foreign key (id_aluno) references aluno(id),
foreign key (id_funcionario) references funcionario(id),
foreign key (id_pagamento) references pagamento(id)
);




