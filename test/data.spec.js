import { searchByName,filterBySpecies, filterByGender, filterByOrderAZ, filterByOrderZA, calculate} from '../src/data.js';
//import rickandmorty from '../src/data/rickandmorty/rickandmorty.js';

//Función que filtra por nombre
describe('searchByName', () => {
  it('Debería ser una función', () => {
    expect(typeof searchByName).toBe('function');
  });

  it ('debería devolver un array vacío si el resultado no coincide', () => {
    const characters = [
      { name: 'Rick Sanchez', species: 'Human' },
      { name: 'Morty Smith', species: 'Human' }
    ];

    const results = searchByName(characters,'Beth');
    expect (results).toEqual([]);
  });

  it ('debería devolver el personaje que el usuario está buscando', () => {
    const characters = [
      { name: 'Rick Sanchez', species: 'Human'},
      { name: 'Morty Smith', species: 'Human' }
    ];

    const results = searchByName(characters,'rick');
    expect (results).toEqual([{ name: 'Rick Sanchez', species: 'Human' }]);
  });

  it ('debería poder buscar sin importar si el usuario ingresa mayúsculas o minúsculas', () => {
    const characters = [
      { name: 'Rick Sanchez', species: 'Human'},
      { name: 'Morty Smith', species: 'Human' }
    ];

    const results = searchByName(characters,'RICK');
    expect (results).toEqual([{ name: 'Rick Sanchez', species: 'Human' }]);
  });
});


//Función que filtra por especie
describe('filterBySpecies', () => {
  it('Debería ser una función', () => {
    expect(typeof filterBySpecies).toBe('function');
  });

  it ('debería devolver todos los robots cuando el usuario seleccione la opción robots', () => {
    const characters = [
      { name: 'Rick Sanchez', species: 'Human'},
      { name: 'Morty Smith', species: 'Human' },
      {name: 'Conroy', species: "Robot"},
    ];

    const results = filterBySpecies(characters,'Robot');
    expect (results).toEqual([{name: 'Conroy', species: "Robot"}]);
  });
});

//Función que filtra por género
describe('filterByGender', () => {
  it('Debería ser una función', () => {
    expect(typeof filterByGender).toBe('function');
  });

  it ('debería devolver todos los personajes femeninos cuando el usuario seleccione la opción femenino', () => {
    const characters = [
      { name: 'Rick Sanchez', gender: 'Male'},
      { name: 'Morty Smith', gender: 'Male' },
      { name: 'Creepy Little Girl', gender: 'Female'},
      { name: 'Cynthia', gender: 'Female'}
    ];

    const results = filterByGender(characters,'Female');
    expect (results).toEqual([ {name: 'Creepy Little Girl', gender: 'Female'},{name: 'Cynthia', gender: 'Female'}]);
  });
});

// Función que ordena de la A a la Z

describe('filterByOrderAZ', () => {
  it('Debería ser una función', () => {
    expect(typeof filterByOrderAZ).toBe('function');
  });

  it ('debería devolver todos los personajes ordenados alfabéticamente de formas ascendente', () => {
    const characters = [
      { name: 'Rick Sanchez', gender: 'Male'},
      { name: 'Morty Smith', gender: 'Male' },
      { name: 'Creepy Little Girl', gender: 'Female'},
      { name: 'Cynthia', gender: 'Female'}
    ];

    const results = filterByOrderAZ(characters);
    expect (results).toEqual([ {name: 'Creepy Little Girl', gender: 'Female'},{name: 'Cynthia', gender: 'Female'},{ name: 'Morty Smith', gender: 'Male' },{ name: 'Rick Sanchez', gender: 'Male'} ]);
  });
});

// Función que ordena de la Z a la A

describe('filterByOrderZA', () => {
  it('Debería ser una función', () => {
    expect(typeof filterByOrderZA).toBe('function');
  });

  it ('debería devolver todos los personajes ordenados alfabéticamente de formas ascendente', () => {
    const characters = [
      { name: 'Rick Sanchez', gender: 'Male'},
      { name: 'Morty Smith', gender: 'Male' },
      { name: 'Creepy Little Girl', gender: 'Female'},
      { name: 'Cynthia', gender: 'Female'}
    ];

    const results = filterByOrderZA(characters);
    expect (results).toEqual([ { name: 'Rick Sanchez', gender: 'Male'}, { name: 'Morty Smith', gender: 'Male' }, {name: 'Cynthia', gender: 'Female'}, {name: 'Creepy Little Girl', gender: 'Female'}]);
  });
});

//Función que calcula el porcentaje

describe('calculate', () => {
  it('Debería ser una función', () => {
    expect(typeof calculate).toBe('function');
  });
  it ('debería calcular el porcentaje de mujeres con respecto a la data', () => {
    const charactersFemale =   [{ name: 'Creepy Little Girl', gender: 'Female'},
      { name: 'Cynthia', gender: 'Female'}
    ];

    const characters = [
      { name: 'Rick Sanchez', gender: 'Male'},
      { name: 'Morty Smith', gender: 'Male' },
      { name: 'Creepy Little Girl', gender: 'Female'},
      { name: 'Cynthia', gender: 'Female'}
    ];
   
    const results = calculate(charactersFemale,characters);
    expect (results).toEqual('50.00');
  });
});