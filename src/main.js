import {filter} from './data.js';
import {order} from "./data.js";
import {spawnCal} from "./data.js";
import data from './data/pokemon/pokemon.js';

//dynamic browser windows
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')
targets.forEach(target => {
  target.addEventListener('click', () => {
    content.forEach(c => {
      c.classList.remove('index');
    });
    const t = document.querySelector(target.dataset.target);
    t.classList.add('index');
  })
});

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
  })
  document.getElementById('content-pokedexs').innerHTML = contentPokedexMain
}
paint (dataPokedex);
// pokemon power percentage display
function statsPokemon (dataArry) {
  let contentPokedexStats = "";
  dataArry.forEach((element)=> {
    contentPokedexStats += `
                        <tr class="element-datatr">
                         <td>${element.num}</td>
                         <td><img src="${element.img}"/></td>
                         <td>${element.name}</td>
                         <td>${element.stats["base-attack"]}</td>
                         <td>${element.stats["base-defense"]}</td>
                         <td>${element.stats["base-stamina"]}</td>
                         <td>${element.stats["max-cp"]}</td>
                         <td>${element.stats["max-hp"]}</td>
                         <td>${spawnCal.spawnPer(element["spawn-chance"])}</td>
                       </tr>`
  });
  document.getElementById('pokedex-stats').innerHTML =contentPokedexStats;
};
statsPokemon(dataPokedex);
//Type filter
function filter1() {
  const selectFilter = document.getElementById("type-pokemon");
  selectFilter.addEventListener("change", () => {
    const typeF = selectFilter.value;
    if (typeF === "Type") {
      paint(dataPokedex);
    } else {
      paint(filter.typeFilter(dataPokedex, typeF));
    }
  });
}
filter1();

//Generation filter
function filter2() {
  const selectGeneration = document.getElementById("type-generation");
  selectGeneration.addEventListener("change", () => {
    const generationF = selectGeneration.value;
    if (generationF === "Gen") {
      paint(dataPokedex);
    } else {
      return paint(filter.typeFilterGeneration(dataPokedex, generationF));
    }
  });
}
filter2();

//Order (Ascending,orderDescending,Number)
function allOrder() {
  const selectOrder = document.getElementById("type-order");
  selectOrder.addEventListener("change", () => {
    const typ = selectOrder.value;
    if (typ === "Ascending") {
      return paint(order.orderAscending(dataPokedex));
    } else if (typ === "Descending") {
      return paint(order.orderDescending(dataPokedex));
    } else if (typ === "Major-Minor") {
      return paint(order.orderNumber1(dataPokedex));
    } else if (typ === "Minor-Major") {
      return paint(order.orderNumber2(dataPokedex));
    }
  });
}
allOrder();
