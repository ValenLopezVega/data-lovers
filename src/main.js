import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// DOM
//const btnHome = ;
const btnPokedex = document.getElementById('buttonPokedex');
//const btnmap = document.getElementById ('buttonMap');
//const btnextra = document.getElementById ('buttonExtra');
/*const homeSecction = document.getElementById('homeSecction');
const pokedexSecction = document.getElementById('pokedexSecction');
const mapSecction = document.getElementById('mapSecction');
const extraSecction = document.getElementById('extraSecction');*/

//mostrar seccion pokedex
function mostrarPokedex() {
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








/*function mostrarSeccionHome() {
    if (mostrarHome) {
        homeSecction.style.display = 'block';
    } else {
        pokedexSection.style.display = 'none';
        mapSecction.style.display = 'none';
        extraSecction.style.display = 'none';
    }
},

function mostrarSeccionPokedex() {
    if (mostarPokedex) {
        pokedexSecction.style.display = 'block'
    } else {
        homeSecction.style.display = 'none';
        mapSecction.style.display = 'none';
        extraSecction.style.display = 'none';

    }
}


btnHome.addEventListener('click', mostrarSecctionHome)
btnPokedex.addEventListener('click', mostrarSecctionPokedex)*/
console.log(example, data);
