const fs = require('fs').promises;

async function getAllSimpsons(){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = JSON.parse(simpsons);
  convertedSimpsons.map(({id, name}) => {
    console.log(`${id} - ${name}`)
  })
}
async function main() {
  await getAllSimpsons();
}
main();
