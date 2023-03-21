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

console.log("prueba 1", data.films);

const practice = data.films[3].poster;


const practice1 = data.films[4].poster;
const practice2 = data.films[5].poster;
const practice3 = data.films[6].poster;

console.log("prueba 2",practice);
console.log("prueba 3",practice1);
console.log("prueba 4",practice2);
console.log("prueba 5",practice3);





//for (i=0; )



const prueba = data.films;

prueba.forEach((item)=>{
   //console.log(item);
    const post=item.poster;
    const title=item.title;
    const insertPoster=document.getElementById('insertPoster');

    console.log(post);
    insertPoster.innerHTML +=`<div class="imgPoster"> <img src=${post} alt="${title}"></img> <p>${title}</p</div>`
    

})