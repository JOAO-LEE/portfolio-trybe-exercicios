import Person from "./Person";
import Products from "./Products";
import Order from "./Order";


const customer = new Person('João');

const product1 = new Products('Frango ao molho branco', 65.29);
const product2 = new Products('Suco', 15.23);
const product3 = new Products('Petit gateau', 89.90);

const order = new Order(customer, [product1, product2, product3], 'dinheiro', 0.3);

console.log(order);

