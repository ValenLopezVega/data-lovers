import data from './data/pokemon/pokemon.js';
import { filtro} from "./data.js";

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
const devilidadesDelPokemon = document.getElementById("devilidadesDelPokemon");

tituloSeccionDos.textContent = pokemon.name;
parrafoSeccionDos.textContent = pokemon.about;
imagenSeccionDos.src = pokemon.img;
tamañoDelPokemonUno.textContent = pokemon.size.height;
tamañoDelPokemonDos.textContent = pokemon.size.weight;

resistenciaDelPokemon.textContent = pokemon.resistant;
tipoDePokemon.textContent = pokemon.type;
devilidadesDelPokemon.textContent = pokemon.weaknesses;

//pokemon[0].evolution['next-evolution'];


//crea lista de pokemon en mi primera seccion importando datos desde pokemon.js
//y creando etiquetas en mi seccionUno, asignando atributos de mi data a las etiquetas 
/*
listaDePokemon.forEach ((item)=>{
  const pokeCard = document.createElement("article");
  const poketitulo = document.createElement("h3");
  const pokeParrafo = document.createElement("p");
  const pokeImagen = document.createElement("img");
  const linkVer = document.createElement("a");
  linkVer.href = "pokemon.html?nombre=" + item.name
  linkVer.target = "_blank"
  linkVer.textContent="ver mas"

  poketitulo.textContent = item.name;
  pokeParrafo.textContent = item.about;
  pokeImagen.src = item.img;


  pokeSectionUno.appendChild(pokeCard);
  pokeCard.appendChild(poketitulo);
  pokeCard.appendChild(pokeParrafo);
  pokeCard.appendChild(pokeImagen);
  pokeCard.appendChild(linkVer);
});
*/