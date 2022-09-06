/* 1 - Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT. */
SELECT * FROM Provides
WHERE provider = 'RBT';

/* 2 - Escreve uma query para exibir todas as informações das cinco peças com os maiores preços. */
SELECT * FROM Provides
ORDER BY price DESC LIMIT 5;