/*1 - Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.*/
SELECT * FROM Scientists
WHERE name LIKE '%e%';
/*2 - Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.*/
SELECT * FROM Projects
WHERE name LIKE 'a%'
ORDER BY name;
/*3 - Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.*/
SELECT code, name FROM Projects
WHERE code LIKE '%3%'
ORDER BY name;