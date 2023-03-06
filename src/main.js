import { imagenes } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';


const insertarImagen = document.getElementById("imgPersonajes");
insertarImagen.innerHTML = imagenes(data);


const characters= data.results
function sortArrayByName(x, y){
  if (x.name < y.name) {return -1;}
  if (x.name > y.name) {return 1;}
  return 0;
}
const characterByName = characters.sort(sortArrayByName);
//console.log("charactersbyname", characterByName);


function sortArrayBySpecie(x, y){
  if (x.species < y.species) {return -1;}
  if (x.species > y.species) {return 1;}
  return 0;
}
const characterBySpecie = characters.sort(sortArrayBySpecie);
//console.log("especie", characterBySpecie)



//console.log(ordenar);

//console.log(especies);

//console.log(data);

