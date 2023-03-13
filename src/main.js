import { example } from './data.js';

import {anotherExample} from './data.js';

import data from './data/pokemon/pokemon.js';
/*console.log(example,anotherExample,data);*/

//DOM elements
const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');



//Functions that interact with the DOM
//Dynamic windows
targets.forEach(target => {
  target.addEventListener('click', () => {
    content.forEach(c => {
      c.classList.remove('active');
    });
    const t = document.querySelector(target.dataset.target);
    t.classList.add('active');
  })
});

//data POkemon
const datosPokedex = data.pokemon;
function mostrar (dataArray) {
 // const cotenedorPokedex =document.querySelector('.contenedor-pokedex')
  let contentPokedex = "";
  dataArray.forEach((elemento)=>{
   // console.log('cada elemento; ', elemento)
    contentPokedex += `<article> 
                        <img src="${elemento.img}">
                        <p>${elemento.num}</p>
                        <p>${elemento.name}</p>
                      </article>
                        `
    console.log('contenido pokedex' +contentPokedex);
    })
    console.log(dataArray);
  document.getElementById('content-pokedexs').innerHTML = contentPokedex
}
mostrar (datosPokedex)

