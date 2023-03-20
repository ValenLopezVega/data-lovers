import { filterMovies  } from './data.js';
import data from './data/ghibli/ghibli.js';
    
    /*Cards Peliculas*/
function crearTarjetas(peliculas){
    let container = document.querySelector("section");
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