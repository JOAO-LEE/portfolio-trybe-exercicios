-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT 
mov.title AS movie, 
box.international_sales, box.domestic_sales 
FROM Pixar.Movies AS mov
INNER JOIN BoxOffice AS box 
ON mov.id = box.movie_id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT 
mov.title AS movie, 
(box.international_sales + box.domestic_sales) AS sales
FROM Pixar.Movies AS mov
INNER JOIN BoxOffice AS box 
ON mov.id = box.movie_id
WHERE international_sales > domestic_sales; 

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT 
mov.title AS movie, 
box.rating 
FROM Movies AS mov
INNER JOIN BoxOffice AS box 
ON mov.id = box.movie_id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
mov.title, mov.director, mov.`year`, mov.length_minutes, th.`name`, th.`location` 
FROM Theater AS th
LEFT JOIN Movies AS mov
ON th.id = mov.theater_id
ORDER BY th.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
t.id, t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;