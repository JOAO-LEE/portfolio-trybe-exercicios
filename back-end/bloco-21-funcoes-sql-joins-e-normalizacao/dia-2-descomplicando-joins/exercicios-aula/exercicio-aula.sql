-- Busque todos os nomes das pessoas que possuem pedidos
-- realizado e as pessoas funcionárias que fizeram a operação
SELECT
CustomerName AS `cliente`, 
CONCAT(e.FirstName, ' ', e.LastName) AS `funcionario_resp`
FROM `store-sample`.customers AS c
INNER JOIN orders ON c.CustomerID = orders.CustomerID
INNER JOIN employees AS e ON orders.EmployeeID = e.EmployeeID;

-- Busque todos os nomes das pessoas que possuem pedidos realizados e
-- as pessoas funcionárias que fizeram a operação e a empresa associada
-- para envio do produto
SELECT 
CustomerName AS `cliente`, 
CONCAT(e.FirstName, ' ', e.LastName) AS `funcionario_resp`,
sh.ShipperName AS shipper 
FROM `store-sample`.customers AS c
INNER JOIN orders ON c.CustomerID = orders.CustomerID
INNER JOIN employees AS e ON orders.EmployeeID = e.EmployeeID
INNER JOIN shippers AS sh ON sh.ShipperID = orders.ShipperID
