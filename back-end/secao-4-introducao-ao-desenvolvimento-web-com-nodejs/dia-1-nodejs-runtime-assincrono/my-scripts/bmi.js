const readline = require('readline-sync');

function calculateBmi() {

  const askWeight = readline.questionInt('Qual é o seu peso?  ');
  const askHeight = readline.questionInt('Qual é a sua altura?  ');
  const yourBmi = (askWeight / (askHeight / 100) ** 2).toFixed(2);
  return yourBmi
}
console.log('O seu IMC é', calculateBmi())