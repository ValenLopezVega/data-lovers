import { sortData, filtrar, filtrar1 } from "../src/data.js";
describe("sortData", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof sortData).toBe("function");
  });
  it("Deberia retorna el array ordenado de A-Z", () => {
    const ordenadoAZ = [
      { name: "bulbasaur" },
      { name: "bulbasaur" },
      { name: "ivysaur" },
      { name: "venusaur" },
      { name: "charmander" },
    ];
    const Result = [
      { name: "bulbasaur" },
      { name: "bulbasaur" },
      { name: "charmander" },
      { name: "ivysaur" },
      { name: "venusaur" },
    ];
    expect(sortData(ordenadoAZ)).toStrictEqual(Result);
  });
});

describe("sortData", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof sortData).toBe("function");
  });
  // it("Deberia retorna el array ordenado de Z-A", () => {
  //   const ordenadoZA = [
  //     { name: "bulbasaur" },
  //     { name: "ivysaur" },
  //     { name: "venusaur" },
  //     { name: "charmander" },
  //   ];
  //   const Result =  [
  //     { name: "venusaur" },
  //     { name: "ivysaur" },
  //     { name: "charmander" },
  //     { name: "bulbasaur" },
  //   ];
  //   expect(sortData(ordenadoZA)).toBe(Result, "name");
  // });
});

describe("filtrar", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof filtrar).toBe("function");
  });
  it("Deberia retorna el array filtrado por tipo", () => {
    const tiposdePokemones = [
      { type: "grass" },
      { type: "fire" },
      { type: "ice" },
      { type: "normal" },
    ]
    const Result2 = [{type: "grass"}];
    expect(filtrar(tiposdePokemones, "grass")).toEqual(Result2);
  });
});
describe("filtrar1", () => {
  it("Deberia ser una funcion que busque por nombre de pokemon", () => {
    expect(typeof filtrar1).toBe("function");
  })
  it('Deberia retornar el pokemon buscado por el usuario', () => {
    const pokemonPorNombre = [
      {name: "bulbasaur"} 
    ]
    expect(filtrar1( pokemonPorNombre, "bulbasaur")).toEqual(pokemonPorNombre);     
  });
});
   