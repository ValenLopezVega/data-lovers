import { filtro,cartillasHtml, ordenar } from "../src/data.js";
 
const listaDePokemonTest =  [
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {  "num": "generation i",   "name": "kanto"  }
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {  "num": "generation i",  "name": "kanto"  }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {   "num": "generation i",  "name": "kanto" }
  },
  {
    "num": "005",
    "name": "charmeleon",
    "generation": {  "num": "generation i",  "name": "kanto" }
  },
  {
    "num": "196",
    "name": "espeon",
    "generation": {"num": "generation ii", "name": "johto" }
  },
  {
    "num": "197",
    "name": "umbreon",
    "generation": { "num": "generation ii", "name": "johto"}
  }
];

describe('filtro', () => {

  it("debería ser un objeto", () => {
    expect(typeof filtro).toBe("object");
  });

  describe("filtro.porNombrePokemon", () => {
    
    it("debería ser una función", () => {
      expect(typeof filtro.porNombrePokemon).toBe("function");
    });

    it("Ubicar un pokemon en especifico", () => {
      const respuesta = [
        {
          "num": "002",
          "name": "ivysaur",
          "generation": {   "num": "generation i",  "name": "kanto" }
        }
      ];
      expect(filtro.porNombrePokemon(listaDePokemonTest, "ivysaur")).toStrictEqual(respuesta);
    });

    it("Ubicar un grupo de pokemones que tenga similitud con el nombre ingresado", () => {
      const respuesta = [
        {
          "num": "004",
          "name": "charmander",
          "generation": {  "num": "generation i",  "name": "kanto"  }
        },
        {
          "num": "005",
          "name": "charmeleon",
          "generation": {  "num": "generation i",  "name": "kanto" }
        }
      ];
      expect(filtro.porNombrePokemon(listaDePokemonTest, "char")).toStrictEqual(respuesta);
    });

    it("Devolver vacio si no hay coincidencias", () => {
      const respuestaEsperada = [];
      const respuesta = filtro.porNombrePokemon(listaDePokemonTest, "Evee");
      expect(respuesta).toStrictEqual(respuestaEsperada);
    });
  });

  describe("filtro.porRegion", () => {
    
    it("debería ser una función", () => {
      expect(typeof filtro.porRegion).toBe("function");
    });

    it("Ubicar pokemones de una region en especifico", () => {
      const respuesta = [
        {
          "num": "001",
          "name": "bulbasaur",
          "generation": {  "num": "generation i",   "name": "kanto"  }
        },
        {
          "num": "004",
          "name": "charmander",
          "generation": {  "num": "generation i",  "name": "kanto"  }
        },
        {
          "num": "002",
          "name": "ivysaur",
          "generation": {   "num": "generation i",  "name": "kanto" }
        },
        {
          "num": "005",
          "name": "charmeleon",
          "generation": {  "num": "generation i",  "name": "kanto" }
        }
      ];
      expect(filtro.porRegion(listaDePokemonTest, "kanto")).toStrictEqual(respuesta);
    });

    it("devolver vacio si no hay coincidencias", () => {
      const respuesta = []
      expect(filtro.porRegion(listaDePokemonTest, "Paldea")).toStrictEqual(respuesta);
    });
  });
});

// que la lista llegue vacia
// que la lista llegue con las mismas iniciales
// que seleccione la opción de la A - Z

describe('ordenar', () => {

  it("debería ser un objeto", () => {
    expect(typeof ordenar).toBe("object");
  });

  describe("ordenar.ascendente", () => {
   
    it("debería ser una función", () => {
      expect(typeof ordenar.ascendente).toBe("function");
    });
    
    it("debería devolver un arreglo de pokemones ordenados alfabéticamente por nombre siendo primero bulbasaur", () => {
      const respuesta = [
        {
          "num": "001",
          "name": "bulbasaur",
          "generation": {  "num": "generation i",   "name": "kanto"  }
        },
        {
          "num": "004",
          "name": "charmander",
          "generation": {  "num": "generation i",  "name": "kanto"  }
        },
        {
          "num": "005",
          "name": "charmeleon",
          "generation": {  "num": "generation i",  "name": "kanto" }
        },
        {
          "num": "196",
          "name": "espeon",
          "generation": {"num": "generation ii", "name": "johto" }
        },
        {
          "num": "002",
          "name": "ivysaur",
          "generation": {   "num": "generation i",  "name": "kanto" }
        },
        {
          "num": "197",
          "name": "umbreon",
          "generation": { "num": "generation ii", "name": "johto"}
        }
      ];
      expect(ordenar.ascendente(listaDePokemonTest)).toStrictEqual(respuesta);
    });

  });

  describe("ordenar.descendente", () => {
    
    it("debería ser una función", () => {
      expect(typeof ordenar.descendente).toBe("function");
    });
 
    it("debería devolver un arreglo de pokemones ordenados alfabéticamente por nombre siendo primero ivysaur", () => {
      const respuesta = [
        {
          "num": "197",
          "name": "umbreon",
          "generation": { "num": "generation ii", "name": "johto"}
        },
        {
          "num": "002",
          "name": "ivysaur",
          "generation": {   "num": "generation i",  "name": "kanto" }
        },
        {
          "num": "196",
          "name": "espeon",
          "generation": {"num": "generation ii", "name": "johto" }
        },
        {
          "num": "005",
          "name": "charmeleon",
          "generation": {  "num": "generation i",  "name": "kanto" }
        },
        {
          "num": "004",
          "name": "charmander",
          "generation": {  "num": "generation i",  "name": "kanto"  }
        },
        {
          "num": "001",
          "name": "bulbasaur",
          "generation": {  "num": "generation i",   "name": "kanto"  }
        }
      ];

      expect(ordenar.descendente(listaDePokemonTest)).toStrictEqual(respuesta);
    });

  });

});

//cartillasHtml
describe('cartillasHtml', () => {

  it("debería ser una funcion", () => {
    expect(typeof cartillasHtml).toBe("function");
  });

  it("debería retornar la lista en plantilla HTML", () => {
    const respuesta = `
    <article class = "cartillaSeccUno">
      <h3>bulbasaur</h3>
      <p>undefined</p>
      <img src=undefined>
      <a href="pokemon.html?nombre=bulbasaur" target="_blank" >ver mas</a>
    </article>
    <article class = "cartillaSeccUno">
      <h3>charmander</h3>
      <p>undefined</p>
      <img src=undefined>
      <a href="pokemon.html?nombre=charmander" target="_blank" >ver mas</a>
    </article>
    <article class = "cartillaSeccUno">
      <h3>ivysaur</h3>
      <p>undefined</p>
      <img src=undefined>
      <a href="pokemon.html?nombre=ivysaur" target="_blank" >ver mas</a>
    </article>
    <article class = "cartillaSeccUno">
      <h3>charmeleon</h3>
      <p>undefined</p>
      <img src=undefined>
      <a href="pokemon.html?nombre=charmeleon" target="_blank" >ver mas</a>
    </article>
    <article class = "cartillaSeccUno">
      <h3>espeon</h3>
      <p>undefined</p>
      <img src=undefined>
      <a href="pokemon.html?nombre=espeon" target="_blank" >ver mas</a>
    </article>
    <article class = "cartillaSeccUno">
      <h3>umbreon</h3>
      <p>undefined</p>
      <img src=undefined>
      <a href="pokemon.html?nombre=umbreon" target="_blank" >ver mas</a>
    </article>`
    expect(cartillasHtml(listaDePokemonTest)).toBe(respuesta);
  });

});
