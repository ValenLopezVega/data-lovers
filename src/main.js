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


function volverInicio() {
  window.location.reload();
}

volver.addEventListener("click", volverInicio);


//PERSONAJES
const botonPersonajes = document.getElementById("botonPersonajes");
const seccionPersonajes = document.getElementById("personajes");
const volver2 = document.getElementById("volver2");

botonPersonajes.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionPersonajes.style.display = "block";
});

function volverInicio2() {
  window.location.reload();
}

volver2.addEventListener("click", volverInicio2);


//DESACTIVAR
const btnEspecie = document.getElementById('especie');
const btnGenero = document.getElementById('genero')
let desGenero = false
let desEspecie = false

btnGenero.addEventListener("click", function () {
  desEspecie = !desEspecie;
  btnEspecie.disabled = desEspecie;
});

btnEspecie.addEventListener("click", function () {
  desGenero = !desGenero;
  btnGenero.disabled = desGenero;
});


//FILMOGRAFIA
const botonFilmografia = document.getElementById("botonFilmografia");
const seccionFilmografia = document.getElementById("filmografia");
const volver3 = document.getElementById("volver3");

botonFilmografia.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionFilmografia.style.display = "block";
});

function recargar3() {
  window.location.reload();
}

volver3.addEventListener("click", recargar3);


//PANTALLA
function crearHtml(pelicula) {
  const titulo = `<h3>${pelicula}</h3>`;
  return titulo
  
}

function impData(films){
  let htmlAcumulado='';
  films.forEach(function(pelicula) {
    htmlAcumulado += crearHtml(pelicula.title);
  })
  
  peliculas.innerHTML = htmlAcumulado;

  films = films.sort(function(asc, desc) {
    if (asc < desc) {
      return -1;
    } 
    if (desc < asc) {
      return 1;
    }
    return desc.title - asc.title;
        
  })

  console.log(films);
}


//}
impData(data.films)

console.log(data.films[2].title);
