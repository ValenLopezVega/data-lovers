import { pokemonData } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

//secciones
const homeSecction = document.getElementById("homeSecction");
const pokedexSecction = document.getElementById("pokedexSecction");
const mapSecction = document.getElementById("mapSecction");
const extraSecction = document.getElementById("extraSecction");
//botones de barra menu
const btnHome = document.getElementById("buttonHome");
const btnPokedex = document.getElementById("buttonPokedex");
const btnMap = document.getElementById("buttonMap");
const btnExtra = document.getElementById("buttonExtra");

//botones de tipos
const btnAllTypes = document.getElementById("allTypes");
const btnTypeNormal = document.getElementById('typeNormal');
/*const btnTypeFighting = document.getElementById('typeFighting');
const btnTypeFlying = document.getElementById('typeFlying');
const btnTypePoison = document.getElementById('typePoison');
const btnTypeGround = document.getElementById('typeGround');
const btnTypeRock = document.getElementById('typeRock');
const btnTypeBug = document.getElementById('typeBug');
const btnTypeGhost = document.getElementById('typeGhost');
const btnTypeSteel = document.getElementById('typeSteel');
const btnTypeFire = document.getElementById('typeFire');
const btnTypeWater   = document.getElementById('typeWater');
const btnTypeGrass   = document.getElementById('typeGrass');
const btnTypeElectric    = document.getElementById('typeElectric');
const btnTypePsychic    = document.getElementById('typePsychic');
const btnTypeIce   = document.getElementById('typeIce');
const btnTypeDragon    = document.getElementById('typeDragon');
const btnTypeDark     = document.getElementById('typeDark');
const btnTypeFairy    = document.getElementById('typeFairy');*/

function mostrarSeccion(seccion) {
  switch (seccion) {
  case "home":
    homeSecction.style.display = "block";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "pokedex":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "block";
    mapSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "map":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "block";
    extraSecction.style.display = "none";
    break;
  case "extra":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "none";
    extraSecction.style.display = "block";
    break;
  default:
    console.error("Sección no válida");
  }
}

btnHome.addEventListener("click", () => mostrarSeccion("home"));
btnPokedex.addEventListener("click", () => mostrarSeccion("pokedex"));
btnMap.addEventListener("click", () => mostrarSeccion("map"));
btnExtra.addEventListener("click", () => mostrarSeccion("extra"));

//botones filtros pokemons
//btnAllTypes.addEventListener('click', mostrarAll());

console.log(pokemonData);
console.log(data);

const allType = data.pokemon;
const pokemonDiv = document.getElementById("pokemons");


btnAllTypes.addEventListener("click", function mostrarAll() {
  let contador = 0;
  allType.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
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
});


btnTypeNormal.addEventListener("click", function mostrarNormal() {
  
let contador = 0;
   const normalPokemon = data.normal;
   console.log(normalPokemon,'prueba');
  normalPokemon.forEach((pokemon, normal) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
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
});
