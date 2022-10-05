const fs = require('fs').promises;

async function getAllSimpsons(){
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const allSimpsons = await convertedSimpsons.map(({id, name}) => {
    console.log(`${id} - ${name}`)
  })
  return allSimpsons;
}

async function getSimpsonById(id){
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedSimpsons = await JSON.parse(simpsons);
  const chosenid = await convertedSimpsons
    .find((simpsonId) => Number(simpsonId.id) === id) 
  if (!chosenid) {
    throw new Error('id não encontrado');
  }
  return chosenid;
}
async function removeSixthAndTenthChar() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8');
  const convertedSimp = JSON.parse(simpsons);
  const charsToRemove = convertedSimp
    .filter((simpsons) => simpsons.id !== '6' && simpsons.id !== '10');
  const remainingChars = fs
    .writeFile('./simpsons.json', JSON.stringify(charsToRemove))
  return remainingChars;  
}

async function addSimpsonFourthAndFiveth(){
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8');
  const convertedSimp = await JSON.parse(simpsons);
  const newFamily = await convertedSimp
    .filter((simpsonsIds) => simpsonsIds.id >= 1 && simpsonsIds.id <= 4);
  const simpsonsFamily = fs
    .writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
  return simpsonsFamily;
}

async function addNelsonMuntz(){
  const simpsons = await fs
  .readFile('./simpsonFamily.json', 'utf-8');
const convertedSimp = await JSON.parse(simpsons);
convertedSimp.push({ id: 8, name: 'Nelson Muntz'});
const newFamilyMember = fs
  .writeFile('./simpsonFamily.json', JSON.stringify(convertedSimp));
return newFamilyMember;
}

async function addMaggieSimpson() {
  const simpsonFamily = await fs
    .readFile('./simpsonFamily.json', 'utf-8');
  const convertedSimp = await JSON.parse(simpsonFamily);
  const removeNelson = await convertedSimp 
    .filter((member) => member.id !== 8)
  const maggieSimpson = { id: '15', name: 'Maggie Simpson' };
  const addMaggie = [...removeNelson, maggieSimpson];
  const fullFamily = fs
    .writeFile('./simpsonFamily.json', JSON.stringify(addMaggie));
  return fullFamily
} 


async function main() {
  await addMaggieSimpson();
    // await addNelsonMuntz();
  // await addSimpsonFourthAndFiveth();
  // const removedSimps = await removeSixthAndTenthChar();
  // await getAllSimpsons();
  // const simpson = await getSimpsonById(12312);
  // const { id, name } = await simpson; 
  // console.log(`${id} - ${name}`);
}
main();