import data from './data/pokemon/pokemon.js';
import { filtro, cartillasHtml, ordenar} from "./data.js";

const listaDePokemon = data.pokemon;
 
// importando datos desde pokemon.js a main.js
const pokeSectionUno = document.getElementById("seccionUno");
pokeSectionUno.innerHTML = cartillasHtml(listaDePokemon);

const kantoRow = document.getElementById("kantoRow");
const johtoRow = document.getElementById("johtoRow");
calcularPorcentajeRegion(listaDePokemon)

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
  calcularPorcentajeRegion(listaFiltradoDePokemon);
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

function calcularPorcentajeRegion(lista){
  const total = lista.length;
  const totalKanto = filtro.porRegion(lista,"kanto").length;
  const totalJohto= filtro.porRegion(lista,"johto").length;

  const porcentajeKanto = (100 * totalKanto)/total;
  const porcentajeJohto = (100 * totalJohto)/total;

  kantoRow.textContent = redondear(porcentajeKanto )+ "%";
  johtoRow.textContent = redondear(porcentajeJohto )+ "%";
}

function redondear(numero){
  return parseFloat(numero).toFixed(2);
}