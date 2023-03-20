import { filterMovies, sortData, filtrarPro } from './data.js';
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
const filterElement = document.querySelector(".select-filter");
const filterYear = document.querySelector(".selection-option");
crearTarjetas(data.films);

    filterYear.addEventListener("change", (filter) => {
    if (filter.target.value === "all"){
        console.log("todas las peliculas")
        return crearTarjetas(data.films);

    } else {
        return crearTarjetas(filterMovies(data.films, filter.target.value));
        };  
    });

const masInfo = document.getElementsByTagName("a")
crearTarjetas(data.films);
masInfo.addEventListener("click", (description) => 
  description.forEach(personaje => 
    container.innerHTML +=`
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


// console.log(example, data);