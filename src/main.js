import data from './data/rickandmorty/rickandmorty.js';
import {searchByName, 
  filterBySpecies,
  filterByGender,
  filterByOrderAZ,
  filterByOrderZA,
  calculate
}
  from './data.js';

//guardo la data-objeto en una variable
const characters = data.results; 
const cutCharatcters = characters.slice(0,20)

const contentMain = document.querySelector('.container-cards');
const searchInput = document.querySelector('#search');
const selectSpecies = document.querySelector('#select-species');
const selectGender = document.querySelector('#select-gender');
const selectOrder = document.getElementById('select-order');
// modal
const modal = document.querySelector('.modal');
const boxStatictics = document.querySelector('#box-statistics');
const openModal = document.querySelector('#statistics');
const closeModal = document.querySelector('.modal_close');
const modalContainer = document.querySelector('.modal_container');



// RENDERIZAR DATA
document.addEventListener('DOMContentLoaded',()=>{
  show(characters);
})

// Mostrando todos los personajes al cargar la pagina
function show(characters) {
  //Limpiando el contenedor
  contentMain.innerHTML = '';

  characters.forEach(element => {
      const contentCards = document.createElement('div');// div card front y revers.
      // front card 
      const divCard = document.createElement('div');
      const imag = document.createElement('img');
      const nameCharacters = document.createElement('h2');
        
      // agrego clases a mis elementos creados segun correspondan
      contentCards.classList.add('content-front-reverse')
      divCard.classList.add('cards-front');
      imag.classList.add('img');
      nameCharacters.classList.add('text-name-f');
              
      // inserto los datos a mis elementos creados
      nameCharacters.textContent = element.name;
      imag.src = element.image;
            
      // insertamos los elementos creados en cadas div correspondiente
      divCard.appendChild(imag);
      divCard.appendChild(nameCharacters);

      // reves de la card
      const divCard2 = document.createElement('div');
      const nameCharacters2 = document.createElement('h2');
      const paragraph = document.createElement('p');
      const paragraph2 = document.createElement('p');
      const paragraph3 = document.createElement('p');
      const paragraph4 = document.createElement('p');

      divCard2.classList.add('cards-reverse');
      nameCharacters2.classList.add('text-name-r');
      paragraph.classList.add('text1');
      paragraph2.classList.add('text1');
      paragraph3.classList.add('text1');
      paragraph4.classList.add('text1');

      nameCharacters2.textContent = element.name;
      paragraph.textContent = 'Species: ' + element.species;
      paragraph2.textContent = 'Gender: ' + element.gender;
      paragraph3.textContent = 'Origin: ' + element['origin']['name'];
      paragraph4.textContent = 'Location: ' + element['location']['name'];

      divCard2.appendChild(nameCharacters2);
      divCard2.appendChild(paragraph);
      divCard2.appendChild(paragraph2);
      divCard2.appendChild(paragraph3);
      divCard2.appendChild(paragraph4);

      contentCards.appendChild(divCard);
      contentCards.appendChild(divCard2);
      contentMain.appendChild(contentCards);

      //evento click en la card
      contentCards.addEventListener('click',()=>{
      contentCards.classList.toggle('active');   
    })
  })
}


// SEARCH
searchInput.addEventListener('keyup',() => {
  const searchValue = searchInput.value.toLowerCase().trim();
  const filterByName = searchByName(characters,searchValue);
  // para mostar un mensaje si no se encuentra lo buscado
  if (filterByName.length) {
    show(filterByName); //si exite algo en el array que a generado filter muestralo
  } else {
    error();
  }
});


// SPECIE
selectSpecies.addEventListener('change',(event) => {
  const specieValue = event.target.value;
  const selectBySpecies = filterBySpecies(characters,specieValue);
  show(selectBySpecies);
});

// GENDER
selectGender.addEventListener('change',(event) => {
  const genderValue = event.target.value;
  const selectByGender = filterByGender(characters,genderValue);
  show(selectByGender);
});



// ALERT
function error() {
  contentMain.innerHTML = '';
  const messageError = document.createElement('h3');
  messageError.classList.add('messageError');
  messageError.textContent =`No se encontro resultado para...'${searchInput.value}'`;
  contentMain.appendChild(messageError);
}



// ORDER A-Z / Z-A
selectOrder.addEventListener('change',() => {
  const orderValue = selectOrder.options[selectOrder.selectedIndex].value;

  if (orderValue === 'Ascending') {
    const orderAZ = filterByOrderAZ(characters,orderValue);
    show(orderAZ);
  }

  if (orderValue === 'Descending') {
    const orderZA = filterByOrderZA(characters,orderValue);
    show(orderZA);
  }

});

// PORCENTAJE POR GENERO

openModal.addEventListener('click', (e)=> {
  e.preventDefault();
  modal.classList.add('modal--show');
  showStat();
 

});

closeModal.addEventListener('click', (e)=> {
  e.preventDefault();
  modal.classList.remove('modal--show');
});


function showStat () { 
  
  // boxStatictics.innerHTML = '';
  const percenFemale = calculate(filterByGender(characters,'Female'),characters);
  const percenMale = calculate(filterByGender(characters,'Male'),characters);
  const percenUnknown = calculate(filterByGender(characters,'unknown'),characters);
  const percenGenderless = calculate(filterByGender(characters,'Genderless'),characters);

  // Creando ventana para mostrar estadistica
  const textStatictics1 = document.createElement('p');
  const textStatictics2 = document.createElement('p');
  const textStatictics3 = document.createElement('p');
  const textStatictics4 = document.createElement('p');

  boxStatictics.classList.add('box-statis');
  textStatictics1.classList.add('text-box');
  textStatictics2.classList.add('text-box');
  textStatictics3.classList.add('text-box');
  textStatictics4.classList.add('text-box');

  textStatictics1.textContent = `Female: ${percenFemale}`;
  textStatictics2.textContent = `Male: ${percenMale}`;
  textStatictics3.textContent = `Unknown: ${percenUnknown}`;
  textStatictics4.textContent = `Genderless: ${percenGenderless}`;

  boxStatictics.appendChild(textStatictics1);
  boxStatictics.appendChild(textStatictics2);
  boxStatictics.appendChild(textStatictics3);
  boxStatictics.appendChild(textStatictics4);

  //Gráfica
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Gender', '493'],
      ['Female',   73  ],
      ['Male',     372 ],
      ['Unknown',  42],
      ['Genderless',  6],
    ]);
    
    const options = {
      title: 'Characters by gender',
      is3D: true,
    };
    
    const chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }
}


// Método fetch para traer la data desde json

fetch("./data/rickandmorty/rickandmorty.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
});