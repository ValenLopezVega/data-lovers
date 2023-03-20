import data from './data/ghibli/ghibli.js';
import { sortData } from './data.js'; 
import { filtrarPro } from './data.js';
/*
fetch("data/ghibli/ghibli.json")
  .then (response => response.json())
  .then(data => {
    crearTarjetas(data.films)})
  // eslint-disable-next-line no-console
  .catch(error => console.log(error));
*/
/*Cards Peliculas*/
function crearTarjetas(peliculas){
  const container = document.querySelector("section");
  container.innerHTML = ""
  peliculas.forEach(pelicula => 
    container.innerHTML += `
        <div class="card">
            <div class="card-body-img">
                <img class="poster" src="${pelicula.poster}" alt="Imagen de la película"/>
            </div>
            <div class="card-body-text">
                <h5 class="card-title">${pelicula.title}</h5>
                <span class="info">Año: ${pelicula.release_date}</span>
                <span class="info">Score: ${pelicula.rt_score}</span>
            </div>
        </div>
        `
  );
}
//Función para ordenar datos
const elemento = document.querySelector(".seleccionar");
const productor = document.querySelector(".select-filter");
crearTarjetas(data.films);

elemento.addEventListener("change", (event) => {
  const datasort = sortData(data.films, event.target.value);
  if(event.target.value === "alfabeticamente") {
    crearTarjetas(datasort);
  }
  console.log(datasort);
}); 

// Función para filtrar según productores 

productor.addEventListener("change", (event) => {
  const productor = filtrarPro(data.films, event.target.value);
  if(event.target.value === "todas") {
    crearTarjetas(data.films);
  }
  else {
    crearTarjetas(productor);
  }
  
  console.log(productor);
});
