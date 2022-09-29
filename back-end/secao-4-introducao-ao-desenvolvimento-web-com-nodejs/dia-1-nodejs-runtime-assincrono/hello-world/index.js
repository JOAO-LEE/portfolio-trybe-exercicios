const questioner = require('readline-sync')

console.log('Olá!');

const name = questioner.question('Qual é o seu nome? ');

console.log(`Olá ${name}!`);

const age = questioner.questionInt('Qual sua idade? ');

console.log(`Ok... então você tem ${age} anos. Beleza!`);
