/* 1 - Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".*/
SELECT 'This is SQL Exercise, Practice and Solution';

/* 2 - Escreva uma query para exibir três números em três colunas.*/
SELECT 2 AS 'first_number', 4 AS 'second_number', 7 AS 'third_number';

/* 3 - Escreva uma query para exibir a soma dos números 10 e 15.*/
SELECT 10 + 15;

/* 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.*/
SELECT 10 * 5 / 2;

/* 5 - Escreva uma query para exibir todas as informações de todos os cientistas.*/
SELECT * FROM Scientists;

/* 6 - Escreva uma query para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.*/
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Projects;

/* 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.*/
SELECT * FROM Scientists
ORDER BY name;

/* 8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.*/
SELECT * FROM Projects
ORDER BY name DESC;