import data from './data/pokemon/pokemon.js';

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const nombrePokemon = urlParams.get('nombre')
console.log(nombrePokemon);
const listaDePokemon = data.pokemon;

const pokemon =buscarPokemonPorNombre(nombrePokemon)
console.log( pokemon);

pokemon[0].evolution['next-evolution'];


function buscarPokemonPorNombre(nombre) {
  return  listaDePokemon.filter(item => item.name === nombre);
}