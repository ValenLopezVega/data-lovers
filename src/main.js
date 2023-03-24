import data from './data/pokemon/pokemon.js';
import { filtro, cartillasHtml, ordenar} from "./data.js";

const listaDePokemon = data.pokemon;
 
// importando datos desde pokemon.js a main.js
const pokeSectionUno = document.getElementById("seccionUno");
pokeSectionUno.innerHTML = cartillasHtml(listaDePokemon);

//filtrar los pokemon
const inputBuscar = document.getElementById("inputBuscar");
//creo el evento para filtrar cuando el usuario digite desde la primera letra
inputBuscar.addEventListener("input",ejecutarFiltros) 

function ejecutarFiltros() {
  const listaFiltradoDePokemon = filtro.porNombrePokemon (listaDePokemon, inputBuscar.value.trim());
  
  if (listaFiltradoDePokemon.length === 0) {
    alert("verificar el nombre del pokemon ingresado");
  }
  pokeSectionUno.innerHTML = cartillasHtml(listaFiltradoDePokemon);
}

//manipulacion del dom para traer informacion de la seleccion del orden
const selectOrden = document.getElementById("orden");
selectOrden.addEventListener("change", ordenarPokemones);

// funcion para ordenar el pokemon
function ordenarPokemones(){

  const ordenSeleccionado = selectOrden.value;
  if(ordenSeleccionado === "ascendente"){

    const listaOrdenada = ordenar.ascendente(listaDePokemon);
    pokeSectionUno.innerHTML = cartillasHtml(listaOrdenada);
  } else if(ordenSeleccionado === "descendente"){

    const listaOrdenada = ordenar.descendente(listaDePokemon);
    pokeSectionUno.innerHTML = cartillasHtml(listaOrdenada);
  } else {
    
    pokeSectionUno.innerHTML = cartillasHtml(listaDePokemon);
  }
}