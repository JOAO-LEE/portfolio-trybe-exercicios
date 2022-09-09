/*1 - Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.*/
SELECT * FROM Scientists
WHERE name LIKE '%e%';
/*2 - Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.*/
SELECT * FROM Projects
WHERE name LIKE 'a%'
ORDER BY name;