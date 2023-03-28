import data from './data/pokemon/pokemon.js';
import {filtro} from "./data.js";

//extraer de la URL el nombre del pokemon que se va mostrar su informacion
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nombrePokemon = urlParams.get('nombre')


const listaDePokemon = data.pokemon;
const pokemon = filtro.elPrimeroPorNombre(listaDePokemon, nombrePokemon)
const tituloSeccionDos = document.getElementById("tituloSeccionDos");
const parrafoSeccionDos = document.getElementById("parrafoSeccionDos");
const imagenSeccionDos = document.getElementById("imagenSeccionDos");
const tamañoDelPokemonUno = document.getElementById("tamañoDelPokemonUno");
const tamañoDelPokemonDos = document.getElementById("tamañoDelPokemonDos");
const resistenciaDelPokemon = document.getElementById("resistenciaDelPokemon");
const tipoDePokemon = document.getElementById("tipoDePokemon");
const debilidadesDelPokemon = document.getElementById("debilidadesDelPokemon");

tituloSeccionDos.textContent = pokemon.name;
parrafoSeccionDos.textContent = pokemon.about;
imagenSeccionDos.src = pokemon.img;
tamañoDelPokemonUno.textContent = pokemon.size.height;
tamañoDelPokemonDos.textContent = pokemon.size.weight;

resistenciaDelPokemon.textContent = pokemon.resistant;
tipoDePokemon.textContent = pokemon.type;
debilidadesDelPokemon.textContent = pokemon.weaknesses;