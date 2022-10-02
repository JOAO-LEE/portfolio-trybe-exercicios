
function calculateBmi(weight, height) {

  return (weight / (height/100) ** 2).toFixed(2)

}
console.log('O seu IMC é', calculateBmi(78, 178))