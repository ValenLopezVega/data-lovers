import { typeFilter } from './data.js';
import {anotherExample} from './data.js';
import data from './data/pokemon/pokemon.js';



//DOM elements
//const btnFilter=document.getElementById("btn-filter")
//btnFilter.addEventListener("click",typeFilter)
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
//Option select filter
const selFilter = document.getElementById("type-pokemon");
selFilter.addEventListener("change",() => {
  const infoFiltrado=selFilter.selectedIndex;
  if(infoFiltrado === 0){
    console.log(typeFilter(dataPokedex,"grass"))
    return mostrar(typeFilter(dataPokedex,"grass"))
  }else if(infoFiltrado === 1){
    console.log(typeFilter(dataPokedex,"poison"))
    return mostrar(typeFilter(dataPokedex,"poison"))
  }else if(infoFiltrado === 2){
    console.log(typeFilter(dataPokedex,"fire"))
    return mostrar(typeFilter(dataPokedex,"fire"))
  }else if(infoFiltrado === 3){
    console.log(typeFilter(dataPokedex,"flying"))
    return mostrar(typeFilter(dataPokedex,"flying"))
  }else if(infoFiltrado === 4){
    console.log(typeFilter(dataPokedex,"water"))
    return mostrar(typeFilter(dataPokedex,"water"))
  }
})



/*console.log(typeFilter(dataPokedex,"grass"))0ok
console.log(typeFilter(dataPokedex,"poison"))1ok
console.log(typeFilter(dataPokedex,"fire"))2ok
console.log(typeFilter(dataPokedex,"flying"))3ok
console.log(typeFilter(dataPokedex,"water"))4ok
console.log(typeFilter(dataPokedex,"bug"))5
console.log(typeFilter(dataPokedex,"normal"6))
console.log(typeFilter(dataPokedex,"electric"))7
console.log(typeFilter(dataPokedex,"ground"))8
console.log(typeFilter(dataPokedex,"fighting"))9
console.log(typeFilter(dataPokedex,"psychic"))10
console.log(typeFilter(dataPokedex,"rock"))11
console.log(typeFilter(dataPokedex,"ice"))12
console.log(typeFilter(dataPokedex,"ghost"))13
console.log(typeFilter(dataPokedex,"dragon"))14
console.log(typeFilter(dataPokedex,"fairy"))15
console.log(typeFilter(dataPokedex,"dark"))16
console.log(typeFilter(dataPokedex,"steel"))17*/