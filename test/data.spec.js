import { pokemonData, sortPokemon, computeStats } from "../src/data.js";

//test tipo
describe('pokemonData', () => {
  const data = [
    {
      id: 1,
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    },
    {
      id: 2,
      name: 'Charmander',
      type: ['Fire'],
    },
    {
      id: 3,
      name: 'Squirtle',
      type: ['Water'],
    },
  ];

  it('Devuelve solo pokemon tipo "Grass" cuando el algumento sea hierba ', () => {
    const GrassResult = [{ id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'] }];
    expect(pokemonData(data, 'Grass')).toEqual(GrassResult);
  });

  it('Devuelve una array vacía cuando se pasa un tipo no válido como argumento', () => {
    const emptyResult = [];
    expect(pokemonData(data, 'Electric')).toEqual(emptyResult);
  });

  it('devuelve solo pokemon tipo "Water" cuando el algumento sea agua', () => {
    const waterResult = [{ id: 3, name: 'Squirtle', type: ['Water'] }];
    expect(pokemonData(data, 'Water')).toEqual(waterResult);
  });
});

//test ordenar
describe('sortPokemon', () => {
  const pokemones = [
    { name: 'Charmander' },
    { name: 'Squirtle' },
    { name: 'Bulbasaur' },
  ];

  it('ordena los pokemones en orden ascendente por nombre', () => {
    const ordenAscendente = 'asc';
    const pokemonesOrdenados = sortPokemon(pokemones, ordenAscendente);
    expect(pokemonesOrdenados).toEqual([
      { name: 'Bulbasaur' },
      { name: 'Charmander' },
      { name: 'Squirtle' },
    ]);
  });

  it('ordena los pokemones en orden descendente por nombre', () => {
    const ordenDescendente = 'desc';
    const pokemonesOrdenados = sortPokemon(pokemones, ordenDescendente);
    expect(pokemonesOrdenados).toEqual([
      { name: 'Squirtle' },
      { name: 'Charmander' },
      { name: 'Bulbasaur' },
    ]);
  });

  it('no modifica el array original de pokemones', () => {
    const copiaDePokemones = [...pokemones];
    const ordenAscendente = 'asc';
    sortPokemon(pokemones, ordenAscendente);
    expect(pokemones).toEqual(copiaDePokemones);
  });
});

//test calcular
describe('computeStats', () => {
  const pokemonData = {
    pokemon: [
      {
        name: 'Bulbasaur',
        size: {
          weight: '6.9 kg'
        }
      },
      {
        name: 'Charmander',
        size: {
          weight: '8.5 kg'
        }
      },
      {
        name: 'Squirtle',
        size: {
          weight: '9.0 kg'
        }
      }
    ]
  }

  it('Deberia calcular el peso promedio, el minimo y el maximo', () => {
    const stats = computeStats(pokemonData)
    expect(stats.averageWeight).toEqual(8.13)
    expect(stats.lightest).toEqual(6.9)
    expect(stats.heaviest).toEqual(9.0)
    expect(stats.lightestPokemon.name).toEqual('Bulbasaur')
    expect(stats.heaviestPokemon.name).toEqual('Squirtle')
    expect(stats.closestPokemon.name).toEqual('Charmander')
  })
})