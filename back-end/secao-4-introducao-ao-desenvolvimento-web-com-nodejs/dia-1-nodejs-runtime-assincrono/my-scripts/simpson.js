const fs = require('fs').promises;

async function getAllSimpsons(){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const chosenSimpson = await convertedSimpsons.map(({id, name}) => {
    console.log(`${id} - ${name}`)
  })
  return chosenSimpson
}

async function main() {
  await getAllSimpsons(2);
}
main();