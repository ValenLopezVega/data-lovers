import data from './data/pokemon/pokemon.js';
import { filtro} from "./data.js";

//extraer de la URL el nombre del pokemon que se va mostrar su informacion
const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const nombrePokemon = urlParams.get('nombre');


const listaDePokemon = data.pokemon;
const pokemon = filtro.porNombrePokemon(listaDePokemon, nombrePokemon)[0];
const tituloSeccionDos = document.getElementById("tituloSeccionDos");
const parrafoSeccionDos = document.getElementById("parrafoSeccionDos");
const imagenSeccionDos = document.getElementById("imagenSeccionDos");
const tamañoDelPokemonUno = document.getElementById("tamañoDelPokemonUno");
const tamañoDelPokemonDos = document.getElementById("tamañoDelPokemonDos");
const resistenciaDelPokemon = document.getElementById("resistenciaDelPokemon");
const tipoDePokemon = document.getElementById("tipoDePokemon");
const devilidadesDelPokemon = document.getElementById("devilidadesDelPokemon");

tituloSeccionDos.textContent = pokemon.name;
parrafoSeccionDos.textContent = pokemon.about;
imagenSeccionDos.src = pokemon.img;
tamañoDelPokemonUno.textContent = pokemon.size.height;
tamañoDelPokemonDos.textContent = pokemon.size.weight;

resistenciaDelPokemon.textContent = pokemon.resistant;
tipoDePokemon.textContent = pokemon.type;
devilidadesDelPokemon.textContent = pokemon.weaknesses;
