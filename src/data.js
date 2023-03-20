import data from "./data/ghibli/ghibli.js";

console.log(data);

//import { filtroDirector, filtroProductor, filtroEspecie, filtroGenero } from "./data.js";

// MANIPULACION A TRAVES DE ARRAYS Y OBJETOS
// FUNCIONALIDAD PARA MANIPULAR, OBTENER Y PROCESAR DATOS
// FUNCIONES PURAS E INDEPENDIENTES DEL DOM


//ORDEN

// function orderTitle(films) {

// }

// orderTitle(data.films);


// titulos.sort();
// console.log(titulos);




// //TITULO
// const tituloAscendente = (a, b) => {
  
//   for (let i = 0; i < titulos.length; i++) {
//   // console.log(data.films[i].title);
//   }
  
//   if (a.title > b.title) {
//     return 1;
//   } else {
//     return -1;
//   }
// };
// console.log(titulos);

// export const tituloDescendente = (a, b) => {
//   if (a.title > b.title) {
//     return -1;
//   } else {
//     return 1;
//   }
// };
// export const ordenamientoTitulo = (order, films) => {
//   if (order === "ascendente") {
//     const returnOrdenamientoTitulo = films.sort(tituloAscendente);
//     return returnOrdenamientoTitulo;
//   }
//   else {
//     const returnOrdenamientoTitulo = films.sort(tituloDescendente);
//     return returnOrdenamientoTitulo;
//   }
// };




// //FILTROS

// //Director
// export const filtroDirector = (data, director) => {
//   const returnDirector = data.filter((y) => y.director === director);
//   return returnDirector;
// };
// //document.getElementById("returnDirector").innerHTML = data.films(data, director);

// //Productor
// export const filtroProductor = (films, nombreProductor) => {
//   const returnProductor = films.filter((y) => y.producer === nombreProductor);
//   return returnProductor;
// };

// //Especie
// export const arrayEspeciePersonajes = [];
// for (let i = 0; i < data.films.length; i++) {
//   for (let j = 0; j < data.films[i].people.length; j++) {
//     arrayEspeciePersonajes.push(data.films[i].people[j]);
//   }
// }
// export const filtroEspecie = (arrayEspeciePersonajes, especie) => {
//   const returnEspecie = arrayEspeciePersonajes.filter((y) => y.specie === especie);
//   return returnEspecie;
// };

// //Género
// export const arrayGeneroPersonajes = [];
// for (let i = 0; i < data.films.length; i++) {
//   for (let j = 0; j < data.films[i].people.length; j++) {
//     arrayGeneroPersonajes.push(data.films[i].people[j]);
//   }
// }
// export const filtroGenero = (arrayGeneroPersonajes, genero) => {
//   const returnGenero = arrayGeneroPersonajes.filter((y) => y.gender === genero);
//   return returnGenero;
// };