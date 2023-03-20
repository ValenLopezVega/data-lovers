import { filtrado } from './data.js';

import {anotherExample} from './data.js';

import data from './data/pokemon/pokemon.js';




//DOM elements
//Functions that interact with the DOM
//Data Pokemon (Visualizar img,num,name en la interfaz)

const datosPokedex = data.pokemon;
function mostrar (dataArray) {
// const cotenedorPokedex =document.querySelector('.contenedor-pokedex')
  let contentPokedex = "";
  dataArray.forEach((element)=>{
  // console.log('cada elemento; ', elemento)
    contentPokedex += `<article class="card"> 
                        <div class="pokemon-img">
                        <img src="${element.img}">
                        </div>
                        <p>${element.num}</p>
                        <p>${element.name}</p>
                        <p>${element.generation.name}</p>
                        <p>${element.type}<p>
                      </article>
                        `
  /*console.log('contenido pokedex' +contentPokedex);*/
  })
  /*console.log(dataArray);*/
  document.getElementById('content-pokedexs').innerHTML = contentPokedex
}
mostrar (datosPokedex)

/*function filtrado1 (filtradoGen){
  let contenedorFiltrado = "";
  let fil = filtradoGen.filter(itemGen => { 
    itemGen.generation.name === "kanto"}
    )
    contenedorFiltrado+=fil
    console.log(fil)
  }

filtrado1(datosPokedex)
console.log(filtrado1)
btnBuscar.addEventListener("click",filtrado1)*/


/*datosPokedex.addEventListener("click", () => {
})*/

filtrado(datosPokedex)