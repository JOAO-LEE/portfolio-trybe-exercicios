const fs = require('fs').promises;

async function getAllSimpsons(){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const allSimpsons = await convertedSimpsons.map(({id, name}) => {
    console.log(`${id} - ${name}`)
  })
  return allSimpsons
}

async function getSimpsonById(id){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const chosenid = await convertedSimpsons
    .find((simpsonId) => Number(simpsonId.id) === id) 
  if (!chosenid) {
    throw new Error('id não encontrado')
  }  
  return chosenid
}
async function main() {
  // await getAllSimpsons();
  const simpson = await getSimpsonById(12312);
  const { id, name } = await simpson; 
  console.log(`${id} - ${name}`)
}
main();