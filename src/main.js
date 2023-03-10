import { tarjetas } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML= tarjetas(data);



//console.log(tarjetas, data);
