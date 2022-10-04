const fs = require('fs').promises;

async function getAllSimpsons(){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const allSimpsons = await convertedSimpsons.map(({id, name}) => {
    console.log(`${id} - ${name}`)
  })
  return allSimpsons
}

async function getSimpsonById(simpson){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const chosenSimpson = await convertedSimpsons.find((id) => Number(id.id) === simpson);
  return chosenSimpson
}
async function main() {
  // await getAllSimpsons();
  const simpson = await getSimpsonById(2);
  const { id, name } = await simpson; 
  console.log(`${id} - ${name}`)
}
main();