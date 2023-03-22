import data from './data/pokemon/pokemon.js';
import { buscarPorNombre, cartillas} from "./data.js";

const listaDePokemon = data.pokemon;
 
// importando datos desde pokemon.js a main.js
const pokeSectionUno = document.getElementById("seccionUno");

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
//filtrar los pokemon

//const pokeSection= document.getElementById("seccionUno");

const inputBuscar = document.getElementById("inputBuscar");

inputBuscar.addEventListener("input", function () {
  const FiltroNombre = buscarPorNombre(data, inputBuscar.value.trim().substring(0, 3));
  if (FiltroNombre.pokemon.length === 0) {
    alert("verica el nombre del pokemon ingresado");
  }
  pokeSectionUno.innerHTML = cartillas(FiltroNombre);

});