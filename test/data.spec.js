import { filter } from '../src/data.js';

const dataPoke = [
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
  },
  {
    num: "172",
    name: "pichu",
    generation: {
      name: "johto",
    },
    type: ["electric"],
    "spawn-chance": "0",
  },
];

describe('filter', () => {
  it('is a object', () => {
    expect(typeof filter).toBe('object');
  });
  describe('filter.typeFilter',() => {
    it('is a function', () => {
      expect(typeof filter.typeFilter).toBe('function');
    })
  })
  it('el filtro debe retornar un array con los pokemones de tipo veneno', () => {
    const type = "poison"
    const filteredPoke = filter.typeFilter(dataPoke,type);
    
    // por cada pokemon en filterdPoke 
    // verificar que su atributo type(array) contenga el string 'poison'
  
    expect(filteredPoke.length).toBe(2)
    expect(filteredPoke[0].type.includes(type)).toBe(true)
    expect(filteredPoke[1].type.includes(type)).toBe(true)

    filteredPoke.forEach(poke => {
      expect(poke.type.includes(type)).toBe(true)
    })  

    // console.log(filteredPoke)
    // console.log(filteredPoke[0])
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
