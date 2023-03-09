import { pokemonData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//


// DOM
const btnHome = document.getElementById('buttonHome');
const btnPokedex = document.getElementById('buttonPokedex');
const btnMap = document.getElementById('buttonMap');
const btnExtra = document.getElementById('buttonExtra');
const homeSecction = document.getElementById('homeSecction');
const pokedexSecction = document.getElementById('pokedexSecction');
const mapSecction = document.getElementById('mapSecction');
const extraSecction = document.getElementById('extraSecction');


function mostrarHome() {
  homeSecction.style.display = 'block'
  pokedexSecction.style.display = 'none'
  mapSecction.style.display = 'none'
  extraSecction.style.display = 'none'
}

function mostrarPokedex() {
  pokedexSecction.style.display = 'block'
  homeSecction.style.display = 'none'
  mapSecction.style.display = 'none'
  extraSecction.style.display = 'none'
}

function mostrarMap() {
  mapSecction.style.display = 'block'
  homeSecction.style.display = 'none'
  pokedexSecction.style.display = 'none'
  extraSecction.style.display = 'none'
}

function mostrarExtra() {
  extraSecction.style.display = 'block'
  homeSecction.style.display = 'none'
  mapSecction.style.display = 'none'
  pokedexSecction.style.display = 'none'
}

btnHome.addEventListener('click', mostrarHome);
btnPokedex.addEventListener('click', mostrarPokedex);
btnMap.addEventListener('click', mostrarMap);
btnExtra.addEventListener('click', mostrarExtra);

console.log(pokemonData);
console.log(data);

const allType= data.pokemon;
const pokemonDiv= document.getElementById('pokemons');

allType.forEach((pokemon) => {
    pokemonDiv.innerHTML +=
        `<strong>Numero</strong>:${pokemon.num}<br> 
     <strong>Nombre</strong>:${pokemon.name}<br>
     <strong>Foto</strong>:<img src="${pokemon.img}"><br>`

});