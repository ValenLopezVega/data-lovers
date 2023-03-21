import { typeFilter } from './data.js';
import {typeFilterGeneration} from './data.js';
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
                        <p>${element.num}</p>
                        <div class="pokemon-img">
                        <img src="${element.img}">
                        </div>
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
selFilter.addEventListener("change",function mainFilter(){
  const infoFiltrado=selFilter.selectedIndex;
  console.log(infoFiltrado)

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
    return mostrar(typeFilter(dataPokedex, "water"))
  } else if(infoFiltrado === 5){
    console.log((typeFilter(dataPokedex, "bug")))
    return mostrar(typeFilter(dataPokedex, "bug"))
  } else if(infoFiltrado === 6){
    console.log(typeFilter(dataPokedex, "normal"))
    return mostrar(typeFilter(dataPokedex, "normal"))
  } else if(infoFiltrado === 7){
    console.log(typeFilter(dataPokedex, "electric"))
    return mostrar(typeFilter(dataPokedex, "electric"))
  } else if(infoFiltrado === 8){
    console.log(typeFilter(dataPokedex, "ground"))
    return mostrar(typeFilter(dataPokedex, "ground"))
  } else if(infoFiltrado === 9){
    console.log(typeFilter(dataPokedex, "fighting"))
    return mostrar(typeFilter(dataPokedex, "fighting"))
  } else if(infoFiltrado === 10){
    console.log(typeFilter(dataPokedex, "psychic"))
    return mostrar(typeFilter(dataPokedex, "psychic"))
  } else if(infoFiltrado === 11){
    console.log(typeFilter(dataPokedex, "rock"))
    return mostrar(typeFilter(dataPokedex, "rock"))
  } else if(infoFiltrado === 12){
    console.log(typeFilter(dataPokedex, "ice"))
    return mostrar(typeFilter(dataPokedex, "ice"))
  } else if(infoFiltrado === 13){
    console.log(typeFilter(dataPokedex, "ghost"))
    return mostrar(typeFilter(dataPokedex, "ghost"))
  } else if(infoFiltrado === 14){
    console.log(typeFilter(dataPokedex, "dragon"))
    return mostrar(typeFilter(dataPokedex, "dragon"))
  } else if(infoFiltrado === 15){
    console.log(typeFilter(dataPokedex, "dark"))
    return mostrar(typeFilter(dataPokedex, "dark"))
  } else if(infoFiltrado === 16){
    console.log(typeFilter(dataPokedex, "dark"))
    return mostrar(typeFilter(dataPokedex, "dark"))
  } else if(infoFiltrado === 17){
    console.log(typeFilter(dataPokedex, "steel"))
    return mostrar(typeFilter(dataPokedex, "steel"))
  }
})

const selectGeneration = document.getElementById("type-generation");

selectGeneration.addEventListener("change",() => {
  const filterNumberTwo = selectGeneration.selectedIndex;
  console.log(filterNumberTwo);
  if (filterNumberTwo === 0) {
    console.log(typeFilterGeneration(dataPokedex, "kanto"))
    return mostrar(typeFilterGeneration(dataPokedex, "kanto"))
  } else if(filterNumberTwo === 1){
    console.log(typeFilterGeneration(dataPokedex, "johto"))
    return mostrar(typeFilterGeneration(dataPokedex, "johto"))
  }
})




/*console.log(typeFilter(dataPokedex,"grass"))0ok
console.log(typeFilter(dataPokedex,"poison"))1ok
console.log(typeFilter(dataPokedex,"fire"))2ok
console.log(typeFilter(dataPokedex,"flying"))3ok
console.log(typeFilter(dataPokedex,"water"))4ok
console.log(typeFilter(dataPokedex,"bug"))5ok
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
