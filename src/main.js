import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

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

//mostrar seccion pokedex
/*function mostrarPokedex() {
  document.getElementById('homeSecction').style.display = 'none';
  document.getElementById('mapSecction').style.display = 'none';
  document.getElementById('extraSecction').style.display = 'none';
  document.getElementById('pokedexSecction').style.display = 'block';
}

document.getElementById('buttonPokedex').addEventListener('click', function () {
  mostrarPokedex();
})
//mostras seccion home
function mostrarHome() {
  document.getElementById('homeSecction').style.display = 'block';
  document.getElementById('mapSecction').style.display = 'none';
  document.getElementById('extraSecction').style.display = 'none';
  document.getElementById('pokedexSecction').style.display = 'none';
}

document.getElementById('buttonHome').addEventListener('click', function () {
  mostrarHome();
})

//mostrar seccion mapa
function mostrarMap() {
  document.getElementById('homeSecction').style.display = 'none';
  document.getElementById('mapSecction').style.display = 'block';
  document.getElementById('extraSecction').style.display = 'none';
  document.getElementById('pokedexSecction').style.display = 'none';
}

document.getElementById('buttonMap').addEventListener('click', function () {
  mostrarMap();
})

//mostrar seccion Noticias
function mostrarExtra() {
  document.getElementById('homeSecction').style.display = 'none';
  document.getElementById('mapSecction').style.display = 'none';
  document.getElementById('extraSecction').style.display = 'block';
  document.getElementById('pokedexSecction').style.display = 'none';
}

document.getElementById('buttonExtra').addEventListener('click', function () {
  mostrarExtra();
})


/*function mostrarSecction() {
  if (homeSecction) {
    homeSecction.style.display = 'block'
    pokedexSecction.style.display = 'none'
    mapSecction.style.display = 'none'
    extraSecction.style.display = 'none'
  } else if (pokedexSecction) {
    pokedexSecction.style.display = 'block'
    homeSecction.style.display = 'none'
    mapSecction.style.display = 'none'
    extraSecction.style.display = 'none'
  } else if (mapSecction) {
    mapSecction.style.display = 'block'
    homeSecction.style.display = 'none'
    pokedexSecction.style.display = 'none'
    extraSecction.style.display = 'none'
  } else  {
    extraSecction.style.display = 'block'
    homeSecction.style.display = 'none'
    pokedexSecction.style.display = 'none'
    mapSecction.style.display = 'none'
  }
}*/

console.log(example);