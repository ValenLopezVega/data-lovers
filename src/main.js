<<<<<<< HEAD
import { filterByProducer, orderAlphabetical_AZ, orderAlphabetical_ZA } from './data.js';
=======
import { filterByProducer, orderAlphabetical_AZ, orderAlphabetical_ZA, topMovies } from './data.js';
>>>>>>> origin/main
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


//VARIABLE QUE ENGLOBA EL ARREGLOS DE PELICULAS

const arrayFilms = data.films;

//TRAYENDO EL DOM QUE CONTENDRÁ LAS PORTADAS DE PELICULAS

const insertPoster = document.getElementById('insertPoster');

//FUNCION QUE IMPRIME TODAS LAS PORTADASY NOMBRES

function printAllPoster(allFilms) {
  allFilms.forEach((item) => {
    const post = item.poster;
    const title = item.title;
    insertPoster.innerHTML += `<div class="imgPoster"> <img src=${post} alt="${title}"></img> <p>${title}</p</div>`;
  })

}

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

/*const prueba1=arrayFilms.sort((a, b) => b.rt_score - a.rt_score);
 

prueba1.forEach((item)=>{
  console.log(item.rt_score)
})
/*const prueba2=prueba1.filter((item)=>{
 console.log('prueba2',item.rt_score) 
})*/


<<<<<<< HEAD

/*function findPeople(arrayFilms) {
  arrayFilms.forEach((item) => {
    const people1 = item.people
    console.log('prueba1', people1)
  }
  )

}*/

/*const people = arrayFilms.forEach((item)=>
  item.people.filter((index)=>index.gender==='female'
  )
)*/

//console.log('prueba1', people)


/*function people(arrayFilms) {
  const people = [];
  
  arrayFilms.forEach((element) =>
    people.push(element.people)
  )
  const female = [];
  people.forEach((item) => female.push(item.gender)
  )
  console.log('prueba1', people)
  console.log('prueba2', female)

}
console.log('prueba3', people(arrayFilms))*/
/*arrayFilms.forEach((item) =>{return item.people})
console.log('prueba1', arrayPeople(arrayFilms));*/

=======
arrayFilms.forEach((item) => {
  item.rt_score
})


const btnTop = document.getElementById("btnTop");
btnTop.addEventListener('click', selecTop)

function selecTop() {
  insertPoster.innerHTML = '';
  const orderScore = topMovies.orderbyScore(arrayFilms)
  const top10 = topMovies.mayorScore(orderScore)
  printAllPoster(top10)
}
>>>>>>> origin/main

const female = [];
const male =[];
const other =[];

arrayFilms.forEach((item) =>
  item.people.forEach((index) => {
    if (index.gender === 'Female') {
      female.push(index.gender)
    }
    if (index.gender === 'Male'){
      male.push(index.gender)
    }
    if(index.gender !== 'Male' && index.gender !== 'Female'){
      other.push(index.gender)
    }
  })
)

console.log('prueba3', female.length);
console.log('prueba4', male.length);
console.log('prueba5', other.length);

function genderStadisctic(a,b,c){

  
  const sum= a.length + b.length + c.length;
  const femalePorcent=Math.round((a.length*100)/sum);
  const malePorcent=Math.round((b.length*100)/sum);
  const otherPorcent=Math.round((c.length*100)/sum);

 

  // console.log('prueba7', femalePorcent);
  // console.log('prueba8', malePorcent);
  // console.log('prueba9', otherPorcent);

}
console.log('prueba6',genderStadisctic(female,male,other));

 