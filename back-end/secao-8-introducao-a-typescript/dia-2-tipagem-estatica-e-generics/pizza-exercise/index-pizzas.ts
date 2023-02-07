import {IPizza, CommonFlavors, vegatarianFlavors, sweetFlavors} from './interface';

const calabresa: IPizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const marguerita: IPizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const nutella: IPizza = {
  flavor: 'Nutella',
  slices: 4,
};

//EXTENDED FLAVORS:

//Common flavors:
const calabresa2: CommonFlavors = {
  flavor: 'Calabresa',
  slices: 6,
};

const chicken: CommonFlavors = {
  flavor: 'Frango',
  slices: 4,
};

const pepperoni: CommonFlavors = {
  flavor: 'Pepperoni',
  slices: 8,
};

//Vegeterian flavors:
const palmito: vegatarianFlavors = {
  flavor: 'Palmito',
  slices: 8
};

const cogumelo: vegatarianFlavors = {
  flavor: 'Cogumelos',
  slices: 4,
};

//Sweet flavors:
const marshmellow: sweetFlavors = {
  flavor: 'Marshmallow',
  slices: 4,
};
