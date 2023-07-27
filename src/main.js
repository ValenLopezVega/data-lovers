import data from './data/rickandmorty/rickandmorty.js';
import {searchByName, 
  filterGeneral,
  filterByGender,
  filterByOrderAZ,
  filterByOrderZA,
  calculate
} from './data.js';

//DECLARING VARIABLES

const characters = data.results;
const cutCharacters = characters.slice(0,20);
const showCharacters = document.querySelector('#showCharacters');

const contentMain = document.querySelector('#container-cards');

// select e inputs
const searchInput = document.querySelector('#search');
const selectSpecies = document.querySelector('#select-species');
const selectGender = document.querySelector('#select-gender');
const selectOrder = document.querySelector('#select-order');

// modal / estadistica
const openModal = document.querySelector('#statistics'); 
const modal = document.querySelector('.modal');
const boxStatictics = document.querySelector('#box-statistics');
const closeModal = document.querySelector('.modal_close');


// RENDERING THE DATA

document.addEventListener('DOMContentLoaded',()=>{
  show(cutCharacters);
})

showCharacters.addEventListener('click', (e)=> {
  e.preventDefault();
  show(characters);
});


// SHOWING ALL CHARACTERS

function show(characters) { 
  
  contentMain.innerHTML = '';

  characters.forEach(element => {

    const contentCards = document.createElement('div');
    // front and reverse card
       
    const divCard = document.createElement('div'); // front card
    const imag = document.createElement('img');
    const nameCharacters = document.createElement('h2');
        
    contentCards.classList.add('content-front-reverse')
    divCard.classList.add('cards-front');
    imag.classList.add('img');
    nameCharacters.classList.add('text-name-f');
              
    nameCharacters.textContent = element.name;
    imag.src = element.image;
            
    divCard.appendChild(imag);
    divCard.appendChild(nameCharacters);

    const divCard2 = document.createElement('div');  // reverse card
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
    paragraph3.textContent = 'Origin: ' + element.origin.name;
    paragraph4.textContent = 'Location: ' + element.location.name;

    divCard2.appendChild(nameCharacters2);
    divCard2.appendChild(paragraph);
    divCard2.appendChild(paragraph2);
    divCard2.appendChild(paragraph3);
    divCard2.appendChild(paragraph4);

    contentCards.appendChild(divCard);
    contentCards.appendChild(divCard2);
    contentMain.appendChild(contentCards);
    
    contentCards.addEventListener('click',()=>{ 
      contentCards.classList.toggle('active'); // flip effect
    })
  })
}



//  FILTERING CHARACTERS

// Aqui guardamos el valor capturado que el usuaio ingreso o escogio.
let searchValue = '';
let specieValue = '';
let genderValue = '';


// SEARCH

searchInput.addEventListener('keyup',() => {
  searchValue = searchInput.value.toLowerCase().trim();// capturar valor que el ususario ingresa
  applyFilter(); 
});


// SPECIES

selectSpecies.addEventListener('change',(event) => {
  specieValue = event.target.value;
  applyFilter(); 
});

// GENDER

selectGender.addEventListener('change',(event) => {
  genderValue = event.target.value;
  applyFilter(); 
});


// APPLY FILTER

function applyFilter() {

  const filterByName = (searchValue === '' ) ? characters : searchByName(characters,searchValue);
  //si el input esta vacio trae toda la data: y sino ejecuta la funcion searchByName
  const selectBySpecies = (specieValue === '') ? filterByName : filterGeneral(filterByName,'species',specieValue);

  const selectByGender = (genderValue === '') ? selectBySpecies :filterGeneral(selectBySpecies,'gender',genderValue);

  if (selectByGender.length) {
    show(selectByGender); 
  } else {
    notFound();
  }
}

// ALERT NOT FOUND
//funcion declarada la puedo llamar donde quiera
function notFound() {
  contentMain.innerHTML = '';
  const messageError = document.createElement('h3');
  messageError.classList.add('messageError');
  messageError.textContent =`No se encontro resultado para...'${searchInput.value}'`;
  contentMain.appendChild(messageError);
}

// ORDER A-Z / Z-A

selectOrder.addEventListener('change',(e) => {
  const orderValue = e.target.value;

  if (orderValue === 'Ascending') {
    const orderAZ = filterByOrderAZ(characters,orderValue);
    show(orderAZ);
  }
  if (orderValue === 'Descending') {
    const orderZA = filterByOrderZA(characters,orderValue);
    show(orderZA);
  }
});


// STACTICTICS

// evento que muestra la estadistica
openModal.addEventListener('click', (e)=> {
  e.preventDefault();
  modal.classList.add('modal--show');
  showStat(); 
});

closeModal.addEventListener('click', ()=> {
  modal.classList.remove('modal--show');
});


// function estadística
function showStat () { 
  boxStatictics.innerHTML = '';
  // Guardar mi funcion en variables para poder concatenar
  const percenFemale = calculate(filterByGender(characters,'Female'), characters);
  const percenMale = calculate(filterByGender(characters,'Male'),characters);
  const percenUnknown = calculate(filterByGender(characters,'unknown'),characters);
  const percenGenderless = calculate(filterByGender(characters,'Genderless'),characters);

  // Creando mis elementos para mostrar mi pantalla de estadistica
  const boxStatictics2 = document.createElement('div');
  const textStatictics1 = document.createElement('p');
  const textStatictics2 = document.createElement('p');
  const textStatictics3 = document.createElement('p');
  const textStatictics4 = document.createElement('p');
  
  boxStatictics.classList.add('box-statis');
  boxStatictics2.classList.add('contain-text');
  textStatictics1.classList.add('text-box');
  textStatictics2.classList.add('text-box');
  textStatictics3.classList.add('text-box');
  textStatictics4.classList.add('text-box');

  textStatictics1.textContent = `In the series there are: ${percenFemale}% Female Characters`;
  textStatictics2.textContent = `In the series there are: ${percenMale}% Male Characters`;
  textStatictics3.textContent = `In the series there are: ${percenUnknown}% Unknown Characters`;
  textStatictics4.textContent = `In the series there are: ${percenGenderless}% Genderless Characters`;

  boxStatictics2.appendChild(textStatictics1);
  boxStatictics2.appendChild(textStatictics2);
  boxStatictics2.appendChild(textStatictics3);
  boxStatictics2.appendChild(textStatictics4);

  boxStatictics.appendChild(boxStatictics2);
}


 
// GETTING DATA FROM JSON

// fetch("./data/rickandmorty/rickandmorty.json")
//   .then((resp) => resp.json())
//   .then((data) => {
//     show(data);
// })