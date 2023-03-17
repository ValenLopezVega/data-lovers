import { ordenar, filtrar} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films
const container = document.getElementById("animaciones")

const pintarEnInterfaz = (array) => {
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement("img");
    img.src=array[i].poster
    container.appendChild(img);
  }
}

pintarEnInterfaz(films)

const selectedValue = document.getElementById("selectionBy")

function getSelectedValue(){
  const optionUser = selectedValue.value
  if(optionUser==="title-az"){
    container.innerHTML=""
    pintarEnInterfaz(ordenar(films,optionUser))
  }
  if(optionUser==="title-za"){
    container.innerHTML=""
    pintarEnInterfaz(ordenar(films,optionUser))    
  }
}

selectedValue.addEventListener("change", getSelectedValue)

const selectedValueFilter = document.getElementById("filteringBy")

function getSelectedValueFilter(){
  for(let i=0;i<films.length;i++){
    const optionDirector = selectedValueFilter.value
    const director = films[i].director
    if(optionDirector===director){
      container.innerHTML=""
      pintarEnInterfaz(filtrar(films,optionDirector))
    }
  }
}

selectedValueFilter.addEventListener("change", getSelectedValueFilter)