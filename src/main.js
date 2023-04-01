import { filterMovies, sortData, filtrarPro, sortNum } from './data.js';
import data from './data/ghibli/ghibli.js';

const header = document.querySelector("header");
header.innerHTML=""
header.innerHTML= `<picture class="logo">
<source id="logo2" class="l-ghibli" srcset="img/logoghibli.png" media="(max-width: 480px)">
<img id="logo1" src="img/ghibli1.png" alt="Logo estudio Ghibli">
</picture>
<div class="barra">
<div class="buscar">
<input class="b-busqueda" type="search" placeholder="Buscar título">
</div>
<div class="filtro">
<select class="selection-option">
  <option value="" disabled selected hidden>Seleccionar Filtro</option> 
  <option value="todas">Todas</option> 
  <optgroup label="Productores"> 
  <option value="Isao Takahata">Isao Takahata</option>
  <option value="Hayao Miyazaki">Hayao Miyazaki</option>
  <option value="Toru Hara">Toru Hara</option>
  <option value="Toshio Suzuki">Toshio Suzuki</option>
  <option value="Yoshiaki Nishimura">Yoshiaki Nishimura</option>    
  </optgroup>
  <optgroup label="Año">
  <option value="1986">1986</option>
  <option value="1988">1988</option>
  <option value="1989">1989</option>
  <option value="1991">1991</option>
  <option value="1992">1992</option>
  <option value="1994">1994</option>
  <option value="1995">1995</option>
  <option value="1997">1997</option>
  <option value="1999">1999</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2004">2004</option>
  <option value="2006">2006</option>
  <option value="2008">2008</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
</optgroup>
</select>
</div>
<div class="filtro"> 
<select class="seleccionar">
  <option value="" disabled selected hidden>Ordenar Por</option> 
  <option value="alfabeticamente">A-Z</option>
  <option value="año">Año</option>
  <option value="puntaje">Puntaje</option>
</select>
</div>
</div>`
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
  for (const film of data.films){
    const title = film.title.toLowerCase();
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

//Segunda pagina
const masInfo = document.querySelectorAll(".button-info");
const container = document.querySelector("section");
const headerPag2 = document.querySelector("header")
for(const info of masInfo) {
  info.addEventListener("click", (event) => {
    const resultado = data.films.find(elemento => elemento.id === event.target.dataset.id);
    headerPag2.innerHTML= `
    <a href="index.html">
    <picture class="logo">
        <source id="logo2" class="l-ghibli" srcset="img/logoghibli.png" media="(max-width: 480px)">
        <img id="logo1" src="img/ghibli1.png" alt="Logo estudio Ghibli">
    </picture>
    </a> 
`
    container.innerHTML = "";
    container.innerHTML +=`  
    <div class="buttons-up">  
    <a class="home" href="index.html">
    <img class="backarrow" src="img/backblack.svg" alt="Volver a peliculas">
    </a>
    <button class="estadistic" id="modal">Más Info</button>
    </div>
    <div id="ventanaModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Más información sobre los personajes</h2>
        <p class="people-info"></p>
    </div>
  </div>`
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
        `
        <div class="card-people">
          <div class="c-people">
            <div class="card-body-img3">
              <img class="p-people" src="${elemento.img}" alt="Imagen del personaje"/>
            </div>
            <div class="card-body-text3">
              <span class="nombre"><strong>Nombre: </strong> ${elemento.name}</span>
              <span class="año"><strong>Edad: </strong> ${elemento.age}</span>
              <span class="score"><strong>Especie: </strong> ${elemento.specie}</span>
            </div>
          </div>
        </div>`
    });
    
    const bestadistic = document.querySelector(".estadistic");
    const modal = document.getElementById("ventanaModal");
    const closeButton = document.querySelector(".close");
    const peopleInfo = document.querySelector(".people-info");
    let female = 0;
    let male = 0;
    let other = 0;
    let animal = 0;
    let human = 0;
    for(const i of resultado.people){
      if (i.gender === "Female"){
        female += 1;
      } else if (i.gender === "Male"){
        male += 1;
      } else  {
        other += 1;
      } if (i.specie === "Human"){
        human += 1;
      } else {
        animal +=1;
      } 
    }
    bestadistic.addEventListener("click", function (){
      modal.style.display = "block"; 
      closeButton.addEventListener("click", function(){
        modal.style.display = "none";
      });    
      window.addEventListener("click", function (event) {
        if (event.target === modal){
          modal.style.display = "none";
        }
      });
      peopleInfo.innerHTML = ("<strong>En esta película hay:<br></strong>"+ "" +human + " humanos, "+ animal +" animales"+ 
      "<strong><br><br>Visto de otra forma:</strong><br>" +female+" son mujeres, "+male+" son hombres y "+other+" son de otro genero"); 
    });
  });
}
