import { pokemonData, sortPokemon, calculateSpawnMinMax } from "../src/data.js";

//test tipo
describe("pokemonData", () => {
  it("is a function", () => {
    expect(typeof pokemonData).toBe("function");
  });

  it("returns an array of filtered pokemons", () => {
    const data = [
      { name: "Bulbasaur", type: "Grass" },
      { name: "Charmander", type: "Fire" },
      { name: "Squirtle", type: "Water" },
      { name: "Pikachu", type: "electric" },
    ];
    const condition = "Fire";

    expect(pokemonData(data, condition)).toEqual([
      { name: "Charmander", type: "Fire" },
    ]);
  });

  it('returns true for {name: "Bulbasaur", type: "Grass"}', () => {
    const pokemon = { name: "Bulbasaur", type: "Grass" };
    expect(pokemonData([pokemon], "Grass")).toContainEqual(pokemon);
  });
});

//test por filtro ordenar
describe("sortPokemon", () => {
  const copia = [{ name: "zubat" }, { name: "abra" }];

  it("is a function", () => {
    expect(typeof sortPokemon).toBe("function");
  });

  it("returns true for Asc", () => {
    expect(sortPokemon(copia, "asc")[0].name).toBe("abra");
  });

  it("returns true for Desc", () => {
    expect(sortPokemon(copia, "desc")[0].name).toBe("zubat");
  });
});

//test calculateSpawnMinMax
const spawnChanceArray = data.pokemon;
const minSpawnChance = Math.min(...spawnChanceArray);
const maxSpawnChance = Math.max(...spawnChanceArray);

describe("calculateSpawnMinMax", () => {
  it("is a function", () => {
    expect(typeof calculateSpawnMinMax).toBe("function");
  });

  it("returns `minSpawnChance`", () => {
    expect(Math.min(...spawnChanceArray)).toBe(minSpawnChance);
  });

  it("returns `MaxSpawnChance`", () => {
    expect(Math.max(...spawnChanceArray)).toBe(maxSpawnChance);
  });
});

/*
export const calculateSpawnMinMax = (data) => {
  const spawnChanceArray = data.pokemon
    .map(pokemon => parseFloat(pokemon['spawn-chance']))
    .filter(spawnChance => typeof spawnChance === 'number' && !isNaN(spawnChance));
  const minSpawnChance = Math.min(...spawnChanceArray);
  const maxSpawnChance = Math.max(...spawnChanceArray);

  return {min: minSpawnChance, max: maxSpawnChance};
}
*/

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
