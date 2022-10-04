const fs = require('fs').promises;

async function getAllSimpsons(){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
}
async function main() {
  await getAllSimpsons();
}
main();
