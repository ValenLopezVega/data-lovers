//import { example } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';

import { buscarPorNombre, cartillas} from "./data.js";
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

const inputBuscar = document.getElementById("inputBuscar");
const listadepokemon =data.pokemon;

const pokeSection= document.getElementById("seccionUno");

inputBuscar.addEventListener("input", function () {
  const FiltroNombre = buscarPorNombre(data, inputBuscar.value.trim().substring(0, 3));
  if (FiltroNombre.pokemon.length === 0) {
    alert("verica el nombre del pokemon ingresado");
  }
  pokeSection.innerHTML = cartillas(FiltroNombre);
});

listadepokemon.forEach((item)=>{
  const pokeCard = document.createElement("article");
  const poketitulo = document.createElement("h3");
  const pokeParrafo = document.createElement("p");
  const pokeImagen = document.createElement("img");

  poketitulo.textContent = item.name;
  pokeParrafo.textContent = item.about;
  pokeImagen.src= item.img;
  
  pokeSection.appendChild(pokeCard);
  pokeCard.appendChild(poketitulo);
  pokeCard.appendChild(pokeParrafo);
  pokeCard.appendChild(pokeImagen);
} );

