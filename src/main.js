import { typeFilter } from './data.js';
import {anotherExample} from './data.js';
import data from './data/pokemon/pokemon.js';



//DOM elements
const btnFilter=document.getElementById("btn-filter")
btnFilter.addEventListener("click",typeFilter)
//Functions that interact with the DOM


//Constante donde se guarda la data
const dataPokedex = data.pokemon;
//Vizualizacion de la data en la pagina (img,num,name,generation,type)
function mostrar (dataArray) {
  let contentPokedexMain = "";
  dataArray.forEach((element)=>{
    contentPokedexMain += `<article class="card"> 
                        <div class="pokemon-img">
                        <img src="${element.img}">
                        </div>
                        <p>${element.num}</p>
                        <p>${element.name}</p>
                        <p>${element.generation.name}</p>
                        <p>${element.type}<p>
                      </article>`                    
  /*console.log('contenido pokedex' +contentPokedex);*/
  })
  document.getElementById('content-pokedexs').innerHTML = contentPokedexMain
}
mostrar (dataPokedex)
//Option select
const selFilter = document.getElementById("type-pokemon");
selFilter.addEventListener("change",() => {
  const infoFiltrado=selFilter.selectedIndex;
  if(infoFiltrado === 0){
    console.log(typeFilter(dataPokedex,"grass"))
    return typeFilter(dataPokedex,"grass")
  }else if(infoFiltrado === 1){
    console.log(typeFilter(dataPokedex,"poison"))
    return typeFilter(dataPokedex,"poison")
  }
  

filtrado1(datosPokedex)
console.log(filtrado1)
btnBuscar.addEventListener("click",filtrado1)*/

/*console.log(typeFilter(dataPokedex,"grass"))
console.log(typeFilter(dataPokedex,"poison"))
console.log(typeFilter(dataPokedex,"fire"))
console.log(typeFilter(dataPokedex,"flying"))
console.log(typeFilter(dataPokedex,"water"))
console.log(typeFilter(dataPokedex,"bug"))
console.log(typeFilter(dataPokedex,"normal"))
console.log(typeFilter(dataPokedex,"electric"))
console.log(typeFilter(dataPokedex,"ground"))
console.log(typeFilter(dataPokedex,"fighting"))
console.log(typeFilter(dataPokedex,"psychic"))
console.log(typeFilter(dataPokedex,"rock"))
console.log(typeFilter(dataPokedex,"ice"))
console.log(typeFilter(dataPokedex,"ghost"))
console.log(typeFilter(dataPokedex,"dragon"))
console.log(typeFilter(dataPokedex,"fairy"))
console.log(typeFilter(dataPokedex,"dark"))
console.log(typeFilter(dataPokedex,"steel"))*/