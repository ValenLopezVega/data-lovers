import { filterByProducer, orderAlphabetical_AZ, orderAlphabetical_ZA, topMovies, genderStadisctic, specieStadistic } from './data.js';

import data from './data/ghibli/ghibli.js';



//VARIABLE QUE ENGLOBA EL ARREGLOS DE PELICULAS

const arrayFilms = data.films;

//TRAYENDO EL DOM QUE CONTENDRÁ LAS PORTADAS DE PELICULAS

const insertPoster = document.getElementById('insertPoster');

//FUNCION QUE IMPRIME TODAS LAS PORTADASY NOMBRES

function printAllPoster(allFilms) {
  allFilms.forEach((item) => {
    const post = item.poster;
    const title = item.title;
    insertPoster.innerHTML += `<div class="imgPoster" id="imgPoster"> <img src=${post} alt="${title}"></img> <p>${title}</p</div>`;
  })
}




/*function clickMoreInformation(index) {
  const description = index.description;
  const title = index.title;
  const director = index.director;
  const rt_score = index.rt_score;
  const yearFilm = index.release_date;

  insertPoster.innerHTML = `<div class="moreInformacion"> </h1>${title}<h1><p>${description}</p> <h3>${director} </h3> <h3>${rt_score} </h3> <h3>${yearFilm} </h3></div> `

}



console.log(clickMoreInformation(arrayFilms[4]))*/




//DECLARANDO FUNCION DE IMPRIMIR CON LA VARIABLE QUE GUARDA NUESTROS ARREGLOS
printAllPoster(arrayFilms)

//DOM QUE GUARDA EL CONJUNTO DE SELECTORES
const selectProducer = document.getElementById('selectProducer')

//EVENTO PARA EL SELECTOR DEL FILTRO DE PRODUCER
selectProducer.addEventListener('change', selectOption);

//FUNCION QUE PERMITE INTERACTUAR CON EL SELECTOR DE FILTRO

function selectOption() {
  insertPoster.innerHTML = '';
  const optionValue = selectProducer.value;
  console.log('prueba1', optionValue);

  const filter = filterByProducer(arrayFilms, optionValue);
  printAllPoster(filter)
  console.log(filter)

  if (optionValue === 'all') {
    insertPoster.innerHTML = '';
    printAllPoster(arrayFilms)
  }
}


//DOM PARA EL SELECT DE ORDEN ALFABETICO
const alphabeticalOrder = document.getElementById('alphabeticalOrder')

//EVENTO PARA EL SELECTOR DE ORDENAMIENTO
alphabeticalOrder.addEventListener('change', orderOption);

//FUNCION QUE PERMITE INTERACTUAR CON EL SELECTOR DE ORDENAMIENTO

function orderOption() {
  const orderValue = alphabeticalOrder.value;
  console.log('prueba1', orderValue);
  if (orderValue === 'A-Z') {
    insertPoster.innerHTML = '';
    const orderA_Z = orderAlphabetical_AZ(arrayFilms);
    console.log('prueba2', orderA_Z)
    printAllPoster(orderA_Z)
  }
  else {
    insertPoster.innerHTML = '';
    const orderZ_A = orderAlphabetical_ZA(arrayFilms);
    console.log('prueba3', orderZ_A)
    printAllPoster(orderZ_A)
  }
}



//CREACION DE BOTON TOP 10
const btnTop = document.getElementById("btnTop");
btnTop.addEventListener('click', selecTop)

function selecTop() {
  insertPoster.innerHTML = '';
  printAllPoster(topMovies(arrayFilms))
}


//CREACION EVENTO DATOS CURIOSOS
const btnCurious = document.getElementById("btnCurious");
btnCurious.addEventListener('click', selectCurious);

function selectCurious() {
  insertPoster.innerHTML = '';
  insertPoster.innerHTML = `<div class="textEstadistics"> <h1 id="titleDiv">¿Sabias que?</h1> 
  <div id="datePeople" class="cajaCuriosa"> <spam>El ${genderStadisctic(arrayFilms).female}% de personajes que aparecen en las peliculas de Studios Ghibli son femeninos, y que el ${genderStadisctic(arrayFilms).male} % son masculinos y el ${genderStadisctic(arrayFilms).other}% no se encuentran definidos.</spam>
  <img class="child" src="./img/child.png" alt=""></div>
  <div id="dateSpecies" class="cajaCuriosa"> <spam >El ${specieStadistic(arrayFilms).human}% de personajes que aparecen en las peliculas de Studios Ghibli son Humanos y tan solo el ${specieStadistic(arrayFilms).sumaOthers}% son personajes conformados por animales y criaturas fantásticas.</spam> 
  <img class="child" src="./img/imgc.png" alt=""></div>
  </div>`;
}
