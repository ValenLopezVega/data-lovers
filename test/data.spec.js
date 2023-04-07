import {filter, order, spawnCal} from '../src/data.js';
import {dataMock} from './dataMock.js';

describe('filter', () => {
  it('es un objecto', () => {
    expect(typeof filter).toBe('object');
  });
  describe('filter.typeFilter',() => {
    it('es un funcion', () => {
      expect(typeof filter.typeFilter).toBe('function');
    })
  })
  it('el filtro debe retornar un array con los pokemones de tipo veneno', () => {
    const typeP = "poison";
    const filteredPoke = filter.typeFilter(dataMock.pokemon,typeP);
    expect(filteredPoke[0].type.includes(typeP)).toBe(true)
    expect(filteredPoke[1].type.includes(typeP)).toBe(true)
  });
  describe('filter.typeFilterGeneration',() => {
    it('es una funcion',() => {
      expect(typeof filter.typeFilterGeneration).toBe('function');
    })
  })
  it('el filtro debe retornar un array con los pokemones de generacion kanto', () => {
    const gen = "kanto";
    const filterGen = filter.typeFilterGeneration(dataMock.pokemon,gen);
    expect(filterGen[0].generation.name.includes(gen)).toBe(true) 
    expect(filterGen[1].generation.name.includes(gen)).toBe(true) 
  })

});

describe("order", () => {
  it("es un objecto", () => {
    expect(typeof order).toBe("object");
  });
  describe("order.orderAscending", () => {
    it("es un funcion", () => {
      expect(typeof order.orderAscending).toBe("function");
    });
  });
  it("la funcion debe retornar un array de nombres organizados por orden ascendente", () => {
    const ordenAsc = [
      {
        num: "153",
        name: "bayleef",
        generation: {
          name: "johto",
        },

        type: ["grass"],
        "spawn-chance": null,
      },
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
        num: "004",
        name: "charmander",
        generation: {
          name: "kanto",
        },
        type: ["fire"],
        "spawn-chance": "0.253",
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
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
    ];
    expect(order.orderAscending(dataMock.pokemon)).toEqual(ordenAsc);
  });
  it("la funcion debe retornar un array de elementos iguales", () => {
    const ordenZEntrada = [
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
    ];
    const ordenZSalida = [
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
    ];
    expect(order.orderAscending(ordenZEntrada)).toEqual(ordenZSalida);
  });
  describe("order.orderDescending", () => {
    it("es una funcion", () => {
      expect(typeof order.orderAscending).toBe("function");
    });
    it("la funcion debe retornar un array de nombres organizados por orden descendente", () => {
      const ordenDes = [
        {
          num: "007",
          name: "squirtle",
          generation: {
            name: "kanto",
          },
          type: ["water"],
          "spawn-chance": "0.58",
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
          num: "004",
          name: "charmander",
          generation: {
            name: "kanto",
          },
          type: ["fire"],
          "spawn-chance": "0.253",
        },
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
          num: "153",
          name: "bayleef",
          generation: {
            name: "johto",
          },

          type: ["grass"],
          "spawn-chance": null,
        },
      ];
      expect(order.orderDescending(dataMock.pokemon)).toEqual(ordenDes);
    });
    it("La funcion debe retornar un array de elementos iguales", () => {
      const ordenZEntrada = [
        {
          num: "007",
          name: "squirtle",
          generation: {
            name: "kanto",
          },
          type: ["water"],
          "spawn-chance": "0.58",
        },
        {
          num: "007",
          name: "squirtle",
          generation: {
            name: "kanto",
          },
          type: ["water"],
          "spawn-chance": "0.58",
        },
      ];
      const ordenZSalida = [
        {
          num: "007",
          name: "squirtle",
          generation: {
            name: "kanto",
          },
          type: ["water"],
          "spawn-chance": "0.58",
        },
        {
          num: "007",
          name: "squirtle",
          generation: {
            name: "kanto",
          },
          type: ["water"],
          "spawn-chance": "0.58",
        },
      ];
      expect(order.orderDescending(ordenZEntrada)).toEqual(ordenZSalida);
    });
  });
  describe("order.orderNumber1", () => {
    it("es una funcion", () => {
      expect(typeof order.orderNumber1).toBe("function");
    });
  });
  it("la funcion debe retornar un array de numeros organizados de mayor a menor", () => {
    const orderNum1 = [
      {
        num: "172",
        name: "pichu",
        generation: {
          name: "johto",
        },
        type: ["electric"],
        "spawn-chance": "0",
      },
      {
        num: "153",
        name: "bayleef",
        generation: {
          name: "johto",
        },

        type: ["grass"],
        "spawn-chance": null,
      },
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
      {
        num: "004",
        name: "charmander",
        generation: {
          name: "kanto",
        },
        type: ["fire"],
        "spawn-chance": "0.253",
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
        num: "001",
        name: "bulbasaur",
        generation: {
          name: "kanto",
        },
        type: ["grass", "poison"],
        "spawn-chance": "0.69",
      },
    ];
    expect(order.orderNumber1(dataMock.pokemon)).toEqual(orderNum1);
  });
  it("la funcion debe retornar un array de numeros iguales", () => {
    const ordenEntrada1 = [
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
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        type: ["grass", "poison"],
        "spawn-chance": "0.042",
      },
    ];
    const ordenSalida1 = [
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
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        type: ["grass", "poison"],
        "spawn-chance": "0.042",
      },
    ];
    expect(order.orderNumber1(ordenEntrada1)).toEqual(ordenSalida1);
  });

  describe("order.orderNumber2", () => {
    it("és una funcion", () => {
      expect(typeof order.orderNumber2).toBe("function");
    });
  });
  it("la funcion debe retornar un array de numeros de menor a mayor", () => {
    const order2 = [
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
        num: "004",
        name: "charmander",
        generation: {
          name: "kanto",
        },
        type: ["fire"],
        "spawn-chance": "0.253",
      },
      {
        num: "007",
        name: "squirtle",
        generation: {
          name: "kanto",
        },
        type: ["water"],
        "spawn-chance": "0.58",
      },
      {
        num: "153",
        name: "bayleef",
        generation: {
          name: "johto",
        },

        type: ["grass"],
        "spawn-chance": null,
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
    expect(order.orderNumber2(dataMock.pokemon)).toEqual(order2);
  });
  it("la funcion debe retornar un array numeros iguales", () => {
    const ordenEntrada2 = [
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
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        type: ["grass", "poison"],
        "spawn-chance": "0.042",
      },
    ];
    const ordenSalida2 = [
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
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        type: ["grass", "poison"],
        "spawn-chance": "0.042",
      },
    ];
    expect(order.orderNumber2(ordenEntrada2)).toEqual(ordenSalida2);
  });
});
describe("spawnCal", () => {
  it("es un objeto", () => {
    expect(typeof spawnCal).toBe("object");
  });
  describe("spawnPer", () => {
    it("es una funcion", () => {
      expect(typeof spawnCal.spawnPer).toBe("function");
    });
  });
  it('Debe retorna un porcentaje de aparicion de la posicion [0] que es ("4.32%")', () => {
    const respCal = "4.32%";
    expect(spawnCal.spawnPer(dataMock.pokemon[0]["spawn-chance"])).toBe(
      respCal
    );
  });
});