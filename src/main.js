import { filterByProducer, orderAlphabetical_AZ, orderAlphabetical_ZA } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//variable de data de peliculas en array

//console.log(arrayFilms);

const arrayFilms = data.films;
//IMPRIMIR POSTER DE TODAS LAS PELICULAS
const insertPoster = document.getElementById('insertPoster');

function printAllPoster(allFilms) {

  allFilms.forEach((item) => {
    const post = item.poster;
    const title = item.title;
    insertPoster.innerHTML += `<div class="imgPoster"> <img src=${post} alt="${title}"></img> <p>${title}</p</div>`;

  })

}


//DECLARANDO FUNCION DE IMPRIMIR
printAllPoster(arrayFilms)

const selectProducer = document.getElementById('selectProducer')


//CAPTURAR EL EVENTO
//PODER IGUALAR EL EVENTO(VALUE) CON EL PARAMETRO DEL FILTRO(OPTION)


selectProducer.addEventListener('change', selectOption);


//console.log('prueba', )

function selectOption() {
  insertPoster.innerHTML = '';
  const  optionValue = selectProducer.value;
  console.log('prueba1', optionValue);

  const filter = filterByProducer(arrayFilms, optionValue);
  printAllPoster(filter)
  console.log(filter)
  
  if (optionValue === 'all') {
    insertPoster.innerHTML = '';
    printAllPoster(arrayFilms)
  }
}



const alphabeticalOrder = document.getElementById('alphabeticalOrder')
alphabeticalOrder.addEventListener('change', orderOption);

function orderOption() {
  const  orderValue = alphabeticalOrder.value;
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












