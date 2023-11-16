import { typeFilter } from './data.js';
import {typeFilterGeneration} from './data.js';
import data from './data/pokemon/pokemon.js';


//Constant where the data is stored
const dataPokedex = data.pokemon;
//Vizualization of the data on the pag(img,num,name,generation,type)
function paint (dataArray) {
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
paint (dataPokedex)

//Type filter
function filter1() {
  const selectFilter = document.getElementById("type-pokemon");
  selectFilter.addEventListener("change", () => {
    const typeF = selectFilter.value;
    if (typeF === "Type") {
      paint(dataPokedex);
    } else {
      paint(typeFilter(dataPokedex, typeF));
    }
  });
}
filter1()

//Generation filter
function filter2() {
  const selectGeneration = document.getElementById("type-generation");
  selectGeneration.addEventListener("change", () => {
    const generationF = selectGeneration.value;
    if (generationF === "Gen") {
      paint(dataPokedex);
    } else {
      return paint(typeFilterGeneration(dataPokedex, generationF));
    }
  });
}
filter2()
