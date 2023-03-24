import { filterMovies, sortData, filtrarPro, sortNum } from './data.js';
import data from './data/ghibli/ghibli.js';

function crearTarjetas(peliculas){
  const container = document.querySelector("section");
  container.innerHTML = "";
  peliculas.forEach(pelicula => 
    container.innerHTML += `
        <div class="card">
            <div class="card-body-img">
                <img class="poster" src="${pelicula.poster}" alt="Imagen de la película"/>
            </div>
            <div class="card-body-text">
                <h5 class="card-title">${pelicula.title}</h5>
                <span class="año">Año: ${pelicula.release_date}</span>
                <span class="score">Productor: ${pelicula.producer}</span>
                <span class="score">Score: ${pelicula.rt_score}</span>
                <button name="button" class="button-info" data-id="${pelicula.id}">Más información</button>
            </div>
        </div>
        `
  );
}

crearTarjetas(data.films);

//Función para ordenar datos
const elemento = document.querySelector(".seleccionar");
elemento.addEventListener("change", (event) => {
  const datasort = sortData(data.films, event.target.value);
  if(event.target.value === "alfabeticamente") {
    return crearTarjetas(datasort);
  } else if (event.target.value === "año") {
    return crearTarjetas(sortNum(data.films, event.target.value));
  } else if (event.target.value === "puntaje") {
    return crearTarjetas(sortNum(data.films, event.target.value));
  }
}); 

// Función para filtrar
const seleccionar = document.querySelector(".selection-option");
seleccionar.addEventListener("change", (event) => {
  const productor = filtrarPro(data.films, event.target.value);
  const peliculaAño = filterMovies(data.films, event.target.value);
  if(event.target.value === "todas") {
    crearTarjetas(data.films);
  } else if (peliculaAño.length === 0) {
    crearTarjetas(productor);
  }
  else {
    crearTarjetas(peliculaAño);
  }
});
//Función para buscar
const search = document.querySelector(".b-busqueda");
const result = document.querySelector("section")
const filtrar = () => {
  result.innerHTML ="";
  const text = search.value.toLowerCase();
  for (let film of data.films){
    let title = film.title.toLowerCase();
    if(title.indexOf(text) !== -1){
      result.innerHTML += `
      <div class="card">
          <div class="card-body-img">
              <img class="poster" src="${film.poster}" alt="Imagen de la película"/>
          </div>
          <div class="card-body-text">
              <h5 class="card-title">${film.title}</h5>
              <span class="año">Año: ${film.release_date}</span>
              <span class="score">Productor: ${film.producer}</span>
              <span class="score">Score: ${film.rt_score}</span>
              <button name="button" class="button-info" data-id="${film.id}">Más información</button>
          </div>
      </div>
      `
    }
  }
  if(result.innerHTML === ""){
    result.innerHTML = "Pelicula no encontrada";
  }
}

search.addEventListener("keyup", filtrar);


const masInfo = document.querySelectorAll(".button-info");
const container = document.querySelector("section");
for(const info of masInfo) {
  info.addEventListener("click", (event) => {
    const resultado = data.films.find(elemento => elemento.id === event.target.dataset.id);
    container.innerHTML = "";
    container.innerHTML +=`
          <div class="card-info">
              <div class="card-body-img2">
                  <img class="poster" src="${resultado.poster}" alt="Imagen de la película"/>
              </div>
              <div class="card-body-text2">
                  <span class="card-title"> <strong>Nombre:</strong> ${resultado.title}</span>
                  <span class="card-title"> <strong>Año:</strong> ${resultado.release_date}</span>
                  <span class="card-title"> <strong>Director:</strong> ${resultado.director}</span>
                  <span class="card-title"> <strong>Productor:</strong> ${resultado.producer}</span>
                  <span class="card-title"> <strong>Puntaje:</strong> ${resultado.rt_score}</span>
                  <span class="card-title"> <strong>Descripción:</strong> ${resultado.description}</span>
              </div>
          </div>`
    resultado.people.forEach(elemento => {
      container.innerHTML+=
          `<div class="card-people">
             <div class="c-people">
              <div class="card-body-img3">
                <img class="p-people" src="${elemento.img}" alt="Imagen de la película"/>
              </div>
              <div class="card-body-text3">
                <span class="nombre"><strong>Nombre:</strong> ${elemento.name}</span>
                <span class="año"><strong>Edad:</strong> ${elemento.age}</span>
                <span class="score"><strong>Especie:</strong> ${elemento.specie}</span>
              </div>
            </div>
        </div>
        `
    });
  });
}


