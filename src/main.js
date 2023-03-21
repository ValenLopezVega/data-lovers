import { filterMovies } from './data.js';
import { sortData } from './data.js';
import { filtrarPro } from './data.js';
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
                <span class="score">Score: ${pelicula.rt_score}</span>
                <a href="#">Ver más</a>
                </div>
            </div>
            `
  );
}


//Función para ordenar datos
const elemento = document.querySelector(".seleccionar");
//const productor = document.querySelector(".selection-option");
crearTarjetas(data.films);

elemento.addEventListener("change", (event) => {
  const datasort = sortData(data.films, event.target.value);
  if(event.target.value === "alfabeticamente") {
    crearTarjetas(datasort);
  }
  console.log(datasort);
}); 

// Función para filtrar 
const seleccionar = document.querySelector(".selection-option");

seleccionar.addEventListener("change", (event) => {
  const productor = filtrarPro(data.films, event.target.value);
  const peliculaAño = filterMovies(data.films, event.target.value);
  if(event.target.value === "todas") {
    crearTarjetas(data.films);
  }
  else if (peliculaAño.length === 0){
    crearTarjetas(productor);
  }
  else {
    crearTarjetas(peliculaAño);
  }
});


const masInfo = document.getElementsByTagName("a")
crearTarjetas(data.films);

masInfo.addEventListener("click", (description) => 
  description.forEach(personaje => 
    masInfo.innerHTML +=`
        <div class="card">
            <div class="card-body-img">
                <img class="poster" src="${personaje.people.img[2]}" alt="Imagen de la película"/>
            </div>
            <div class="card-body-text">
                <h5 class="card-title">${personaje.people.name[1]}</h5>
                <span class="año">Edad: ${personaje.people.age[4]}</span>
                <span class="score">Especie: ${personaje.people.specie[7]}</span>
            </div>
        </div>
        `
  ));



// console.log(example, data);