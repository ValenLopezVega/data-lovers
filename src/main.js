import { example } from './data.js';

import {anotherExample} from './data.js';

import data from './data/pokemon/pokemon.js';
console.log(example,anotherExample,data);

//Elementos DOM
const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
 
//Funciones que interactuen con el DOM

targets.forEach(target => {
  target.addEventListener('click', () => {
    content.forEach(c => {
      c.classList.remove('active');
    });
    const t = document.querySelector(target.dataset.target);
    t.classList.add('active');
  })
});