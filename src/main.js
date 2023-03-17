import data from './data/rickandmorty/rickandmorty.js';
import {searchByName, 
  filterBySpecies,
  filterByGender,
  filterByOrderAZ,
  filterByOrderZA
}
  from './data.js';

//guardo la data-objeto en una variable
const characters = data.results; 
const contentMain = document.querySelector('.container-cards');
const searchInput = document.querySelector('#search');
const selectSpecies = document.querySelector('#select-species');
const selectGender = document.querySelector('#select-gender');
const selectOrder = document.getElementById('select-order');


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

    divCard2.classList.add('cards-reverse');
    nameCharacters2.classList.add('text-name-r');
    paragraph.classList.add('text1');
    paragraph2.classList.add('text1');

    nameCharacters2.textContent = element.name;
    paragraph.textContent = element.species;
    paragraph2.textContent = element.gender;

    divCard2.appendChild(nameCharacters2);
    divCard2.appendChild(paragraph);
    divCard2.appendChild(paragraph2);

    contentCards.appendChild(divCard);
    contentCards.appendChild(divCard2);
    contentMain.appendChild(contentCards);

    //evento click en la card (flip)
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


DATA .JS

export const searchByName = (data,name) => {
  // pasamos como parametro la data,y lo que queremos comparar
  return data.filter((characters) => {
    return characters.name.toLowerCase().includes(name.toLowerCase); 
  })
};


export const filterBySpecies = (data,species) => {
  return data.filter((characters) => {
    return characters.species.includes(species);
  })
};


export const filterByGender = (data,gender) => {
  return data.filter((characters) => {
    return characters.gender.includes(gender);
  })
};


export const filterByOrderAZ = (characters) => {
  return characters.sort((a,b) => {
    if (a.name < b.name) {
      return -1;
    }  
  })
};

export const filterByOrderZA = (characters) => {
  return characters.sort((a,b) => {
    if (a.name > b.name) {
      return -1;
    }    
  })
};