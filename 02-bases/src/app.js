//const {emailTemplate} = require('./js-foundation/01-template')
//require('./js-foundation/02-destructuring')
//const { getUserById } = require('./js-foundation/03-callbacks')
//const { buildMakePerson } = require('./js-foundation/05-factory')
//const { uuid, getAge } = require('./plugins')
const getPokemonById = require('./js-foundation/06-promises')

const id = 4;

const name = getPokemonById(4, (pokemon) => {
  console.log(pokemon);
  
});
