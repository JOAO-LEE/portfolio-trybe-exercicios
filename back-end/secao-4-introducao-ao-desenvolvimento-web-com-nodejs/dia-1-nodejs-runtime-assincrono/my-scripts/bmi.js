const readline = require('readline-sync');

const askWeight = readline.questionInt('Qual é o seu peso?  ');
const askHeight = readline.questionInt('Qual é a sua altura?  ');

function calculateBmi() {
  const yourBmi = (askWeight / (askHeight / 100) ** 2).toFixed(2);
  return yourBmi;
}

function table(result) {
  const imcToNumber = Number(result);
  const underWeight = imcToNumber < 18.5;
  const normalWeight = imcToNumber > 18.5 && imcToNumber < 24.9;
  const overWeight = imcToNumber > 25.0 && imcToNumber < 29.9;
  const obesityDegree1 = imcToNumber > 30.0 && imcToNumber < 34.9;
  const obesityDegree2 = imcToNumber > 35.0 && imcToNumber < 39.9;
  let diagnostic;

  if (underWeight) {
    diagnostic = 'Abaixo do peso (magreza)'
  } else if (normalWeight) {
    diagnostic = 'Peso normal'
  } else if (overWeight) {
    diagnostic = 'Acima do peso (sobrepeso)'
  } else if (obesityDegree1) {
    diagnostic = 'Obesidade grau I'
  } else if (obesityDegree2) {
    diagnostic = 'Obesidade grau II'
  } else {
    diagnostic = 'Obesidade graus III e IV'
  }
  return diagnostic
}
console.log('O seu IMC é', calculateBmi())
console.log('E o diagnóstico é', table(calculateBmi()))
