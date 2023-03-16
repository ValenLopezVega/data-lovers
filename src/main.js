import data from './data/ghibli/ghibli.js';

const peliculas= document.querySelector('#peliculas')

//INTERACCION DEL DOM (LISTENERS, HANDLERS)
//MUESTRA DATOS EN PANTALLA

// SELECCION SECCION
//HISTORIA
const botonHistoria = document.getElementById("botonHistoria");
const historia = document.getElementById("historia");
const volver = document.getElementById("volver");

botonHistoria.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  historia.style.display = "block";
});

function refresh() {
  window.location.reload();
}

//VOLVER

volver.addEventListener("click", refresh);




//PERSONAJES
const botonPersonajes = document.getElementById("botonPersonajes");
const seccionPersonajes = document.getElementById("personajes");
const volver2 = document.getElementById("volver2");


botonPersonajes.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionPersonajes.style.display = "block";
});

function refresh2() {
  window.location.reload();
}

//DISABLE
const especieBtn = document.getElementById('especie');
const generoBtn = document.getElementById('genero')
let generoDsbd = false
let especieDsbd = false


generoBtn.addEventListener("click", function () {
  especieDsbd = !especieDsbd;
  especieBtn.disabled = especieDsbd;
});

especieBtn.addEventListener("click", function () {
  generoDsbd = !generoDsbd;
  generoBtn.disabled = generoDsbd;
});

//VOLVER

volver2.addEventListener("click", refresh2);




//FILMOGRAFIA
const botonFilmografia = document.getElementById("botonFilmografia");
const seccionFilmografia = document.getElementById("filmografia");
const volver3 = document.getElementById("volver3");

botonFilmografia.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionFilmografia.style.display = "block";
});

// const down = document.getElementById("descendente");

// function bajar() {
// }
// down.addEventListener("click", bajar)

// document.getElementById("descendente").innerHTML = down;




function refresh3() {
  window.location.reload();
}

//VOLVER

volver3.addEventListener("click", refresh3);

function createHtml(pelicula) {
  const titulo = `<h2>La pelicula es:${pelicula}</h2>`;
  return titulo
}

function printData(films){
  let htmlAcumulado=''
  films.forEach(function(pelicula) {
    htmlAcumulado+=createHtml(pelicula.title);
  })
  peliculas.innerHTML=htmlAcumulado;
}
printData(data.films)

console.log(data.films[2].title);
