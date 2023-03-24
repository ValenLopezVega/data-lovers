import { filterMovies, sortData, filtrarPro, sortNum } from './data.js'
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
                <button name="button" class="button-info" data-id="${pelicula.id}">Mas información</button>
                </div>
            </div>
            `
  );
}

//Función para ordenar datos
const elemento = document.querySelector(".seleccionar");
crearTarjetas(data.films);

elemento.addEventListener("change", (event) => {
  const datasort = sortData(data.films, event.target.value);
  if(event.target.value === "alfabeticamente") {
    crearTarjetas(datasort);
  }
  else if (event.target.value === "año") {
    return crearTarjetas(sortNum(data.films, event.target.value));
  } else if (event.target.value === "puntaje") {
    return crearTarjetas(sortNum(data.films, event.target.value))
  }
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

//Funcion para ir a la página siguiente

/*for(const info of masInfo) {
  info.addEventListener("click", (event) => {

  })
}*/
  

const masInfo = document.querySelectorAll(".button-info");
const container = document.querySelector("section");
for(const info of masInfo) {
  info.addEventListener("click", (event) => {
    const resultado = data.films.find(elemento => elemento.id === event.target.dataset.id);
    container.innerHTML = "";
    container.innerHTML +=`
        <div class="card-info">
            <div class="card-body-img">
                <img class="poster" src="${resultado.poster}" alt="Imagen de la película"/>
            </div>
            <div class="card-body-text">
                <span class="card-title"> Nombre: ${resultado.title}</span>
                <span class="card-title"> Año: ${resultado.release_date}</span>
                <span class="card-title"> Director: ${resultado.director}</span>
                <span class="card-title"> Productor: ${resultado.producer}</span>
                <span class="card-title"> Puntaje: ${resultado.rt_score}</span>
                <span class="card-title"> Descripción: ${resultado.description}</span>
            </div>`
    resultado.people.forEach(elemento => {
      container.innerHTML +=`
              <div class="card-body-text-people">
                <span class="card-title"> Género: ${elemento.gender}</span>
                <img class="poster-people" src="${elemento.img}"/>
            </div>`
    });
            
  })}


  
/*container.innerHTML = "";
  resultado.forEach(resultado =>
    container.innerHTML +=`
        <div class="card-info">
            <div class="card-body-img">
                <img class="poster" src="${resultado.poster}" alt="Imagen de la película"/>
            </div>
            <div class="card-body-text">
                <span class="card-title"> Nombre: ${resultado.title}</span>
                <span class="card-title"> Año: ${resultado.release_date}</span>
                <span class="card-title"> Director: ${resultado.director}</span>
                <span class="card-title"> Productor: ${resultado.producer}</span>
                <span class="card-title"> Puntaje: ${resultado.rt_score}</span>
                <span class="card-title"> Descripción: ${resultado.description}</span>
            </div>
        </div>
        `

  ); */




// console.log(example, data);