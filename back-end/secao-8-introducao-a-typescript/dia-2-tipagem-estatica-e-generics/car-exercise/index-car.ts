import Car from "./carClassExercise";

const newCar = new Car('Volkswagen', 'prata', 4);

newCar.turnOn();
newCar.speedUp('50');
newCar.speedDown('20');
newCar.turn('esquerda');
newCar.speedUp('47');
newCar.speedDown('23');
newCar.turn('direita');
newCar.speedUp('56');
newCar.speedDown('25');
newCar.turn('direita');
newCar.speedUp('50');
newCar.speedDown('0');
//passenger gets into the car.
newCar.speedUp('50');
newCar.speedDown('22');
newCar.turn('direita');
newCar.speedUp('75');
newCar.speedDown('10');
newCar.turn('esquerda');
newCar.speedUp('43');
newCar.speedDown('22');
newCar.turn('direita');
newCar.speedUp('64');
newCar.speedDown('0');
newCar.turnOff();