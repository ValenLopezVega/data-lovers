/* import { example } from './data/ghibli/ghibli.js';
// import data from './data/lol/lol.js';*/
import data from './data/ghibli/ghibli.js';
console.log(data);

fetch("data/ghibli/ghibli.json")
.then (response => response.json())
.then(data => {
    crearTarjetas(data.films)})
    .catch(error => console.log(error));

    /*Cards Peliculas*/
function crearTarjetas(peliculas){
    let container = document.querySelector("section");
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
console.log(peliculas)
};



// console.log(example, data);