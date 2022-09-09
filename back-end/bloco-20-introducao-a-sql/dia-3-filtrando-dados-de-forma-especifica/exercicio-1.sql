/*1 - Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.*/
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
/*2 - Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.*/
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;