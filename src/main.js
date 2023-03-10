import { pokemonData} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//
const homeSecction = document.getElementById('homeSecction');
const pokedexSecction = document.getElementById('pokedexSecction');
const mapSecction = document.getElementById('mapSecction');
const extraSecction = document.getElementById('extraSecction');
const btnHome = document.getElementById('buttonHome');
const btnPokedex = document.getElementById('buttonPokedex');
const btnMap = document.getElementById('buttonMap');
const btnExtra = document.getElementById('buttonExtra');
const pokemonDiv = document.getElementById('pokemons');



function mostrarSeccion(seccion) {
 
  switch (seccion) {
  case 'home':
    homeSecction.style.display = 'block';
    pokedexSecction.style.display = 'none';
    mapSecction.style.display = 'none';
    extraSecction.style.display = 'none';
    break;
  case 'pokedex':
    homeSecction.style.display = 'none';
    pokedexSecction.style.display = 'block';
    mapSecction.style.display = 'none';
    extraSecction.style.display = 'none';
    break;
  case 'map':
    homeSecction.style.display = 'none';
    pokedexSecction.style.display = 'none';
    mapSecction.style.display = 'block';
    extraSecction.style.display = 'none';
    break;
  case 'extra':
    homeSecction.style.display = 'none';
    pokedexSecction.style.display = 'none';
    mapSecction.style.display = 'none';
    extraSecction.style.display = 'block';
    break;
  default:
    console.error('Sección no válida');
  }
}

btnHome.addEventListener('click', () => mostrarSeccion('home'));
btnPokedex.addEventListener('click', () => mostrarSeccion('pokedex'));
btnMap.addEventListener('click', () => mostrarSeccion('map'));
btnExtra.addEventListener('click', () => mostrarSeccion('extra'));

console.log(pokemonData);
console.log(data);


const allType = data.pokemon;


let contador = 0;
allType.forEach((pokemon) => {
  pokemonDiv.innerHTML +=
    `<div class="pokemon-container">
            <img src="${pokemon.img}"><br>
            <strong>N°:</strong>${pokemon.num}<br> 
            <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
            <strong>Type</strong>:${pokemon.type}<br>
        </div>`;
  contador++;
  if (contador % 3 === 0) {
    pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
  }
});