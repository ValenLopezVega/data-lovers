import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

// Crear un espacio (div) en HTML para insertar la data
// Filtrar, traer la data "poster" en un constante o función
// Insertar en el div de HTML.
//Recorrer la data, ubicar propiedad FILMS => un array => al elemento de array=>acceder al propiedad POSTER
//Cada valor de las propiedades POSTER, se almacene en un div 
//


const prueba = data.films;

prueba.forEach((item)=>{
   //console.log(item);
    const post=item.poster;
    const title=item.title;

    console.log(post);
    insertPoster.innerHTML +=`<div id="movie"> <img src=${post} alt="${title}"></img> <figcaption>${title}</figcaption</div>`
    

})
