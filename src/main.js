/* eslint-disable no-unused-vars */
/* import { example } from './data/ghibli/ghibli.js';
// import data from './data/lol/lol.js';*/
import data from './data/ghibli/ghibli.js';
console.log(data);

fetch("data/ghibli/ghibli.json")
  .then (response => response.json())
  .then(data => {
    crearTarjetas(data.films)})
  // eslint-disable-next-line no-console
  .catch(error => console.log(error));

/*Cards Peliculas*/
function crearTarjetas(peliculas){
  const container = document.querySelector("section");
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
  // eslint-disable-next-line no-console
  console.log(peliculas);
}

//Aqui colocar el código relacionado con el usuario 

//const elemento = document.querySelector(".seleccionar");
//elemento.addEventListener("change", (event) => {
//const result = document.querySelector(".result");
//result.textContent = `You like ${event.target.value}`;
//});

const paddockType = [
  { id: 1, name: 'PALTOS' },
  { id: 2, name: 'AVELLANOS' },
  { id: 3, name: 'CEREZAS' },
  { id: 4, name: 'NOGALES' },
  { id: 5, name: 'AZUCAR' },
  { id: 6, name: 'ARANDANOS' },
]


const rta = data.films.sort(function(a,b){
  if(a.title < b.title){ return -1; }
  if(a.title > b.title){ return 1; }
  return 0;
})

console.log(rta);

//const elemento = document.querySelector(".seleccionar");
//elemento.addEventListener("change", (event) => {
  
//});



//ordenAlfabetico.addEventListener("click", function(){
//return alert("Si funciono");
//}
//)







// console.log(example, data);