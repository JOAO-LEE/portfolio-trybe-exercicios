/*1 - Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.*/
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
/*2 - Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.*/
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;
/*3 - Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.*/
SELECT peca, fornecedor, Preco FROM Fornecimentos
WHERE fornecedor LIKE '%N%';
/*4 - Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.*/
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;
