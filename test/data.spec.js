<<<<<<< HEAD
import { filterMovies, filtrarPro, sortData, sortNum} from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

//Funcion describe 
describe('Probar si filterMovies es una función', () => {
  it('filterMovies es una función', () => {
    expect(typeof filterMovies).toBe('function');
  });

  it('Debe filtrar la película según el año seleccionado', () => {
    expect(filterMovies(data.films,'1986')).toContainEqual(data.films[0]);
  });
});

//Funcion filtrarPro
describe('Probar si filtrarPro es una función', () => {
  it('filtrarPro es una función', () => {
    expect(typeof filtrarPro).toBe('function');
  });

  it('Debe filtrar la película según el productor seleccionado', () => {
    expect(filtrarPro(data.films,'Isao Takahata')).toContainEqual(data.films[0]);
  });
});

//Funcion sortData
describe('Probar que sortData permite ordenar las peliculas alfabeticamente', () => {
  const datos = [
    {title: "My Neighbor Totoro"},
    {title: "Castle in the Sky"},
    {title: "Kiki's Delivery Service"}
  ]

  it('Debe ordenar las películas alfabeticamente', () => {
    const ordenAlfabetico = sortData(datos)

    expect(ordenAlfabetico[0].title).toMatch("Castle in the Sky");
    expect(ordenAlfabetico[1].title).toMatch("Kiki's Delivery Service");
    expect(ordenAlfabetico[2].title).toMatch("My Neighbor Totoro");
  });

  it('sortData es una función', () => {
    expect(typeof sortData).toBe('function');
  });

});

//Funcion sortNum

describe('Probar que sortNum permite ordenar las peliculas segun el año', () => {
  const fechas = [
    {release_date: "1994"},
    {release_date: "1989"},
    {release_date: "1991"}
  ]
  it('Debe ordenar las películas segun el año', () => {
    const ordenfechas = sortNum(fechas)

    expect(ordenfechas[0].release_date).toMatch("1989");
    expect(ordenfechas[1].release_date).toMatch("1991");
    expect(ordenfechas[2].release_date).toMatch("1994")
  });

  it('sortNum es una función', () => {
    expect(typeof sortNum).toBe('function');
  });

  const puntaje = [
    {rt_score: "89"},
    {rt_score: "83"},
    {rt_score: "41"}
  ]
  it('Debe ordenar las películas segun el puntaje', () => {
    const ordenpuntaje = sortNum(puntaje)

    expect(ordenpuntaje[0].rt_score).toMatch("41");
    expect(ordenpuntaje[1].rt_score).toMatch("83");
    expect(ordenpuntaje[2].rt_score).toMatch("89")
  });

})








=======
import { filterMovies, filtrarPro, sortData, sortNum } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.json';

describe('filterMovies', () => {
  it('Debería ser una función', () => {
    expect(typeof filterMovies ).toBe('function');
  });

  it('Debería retornar "Castle in the Sky" para "1986"', () => {
    expect(filterMovies(data.films,'1986')).toContainEqual(data.films[0]);
  });

  it('Debería retornar "From Up on Poppy Hill" para "2011"', () => {
    expect(filterMovies(data.films,'2011')).toContainEqual(data.films[16]);
  });

});

describe('filtrarPro', () => {
  it('Debería ser una función', () => {
    expect(typeof filtrarPro).toBe('function');
  });

  it('Debería retornar ${data.films[16].release_date} para "1986"', () => {
    expect(filtrarPro(data.films, 'Toru Hara')).toContainEqual(data.films[3]);
  });
});

describe('sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Debería retornar peliculas de A-Z', () => {
    expect(sortData(data.films)).toContainEqual(data.films[0, 16, 3, 12, 2, 1, 9, 4, 6, 14, 5, 8, 10, 13, 11, 15, 18, 17, 19, 7]);
  });
});

describe('sortNum', () => {
  it('Debería ser una función', () => {
    expect(typeof sortNum).toBe('function');
  });

  it('Debería retornar peliculas ordenadas por año', () => {
    expect(sortNum(data.films, 'año')).toContainEqual(data.films[0, 3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 17, 19]);
  });

  it('Debería retornar peliculas ordenadas por score', () => {
    expect(sortNum(data.films, 'score')).toContainEqual(data.films[13, 9, 6, 16, 12, 11, 17, 7, 14, 8, 19, 1, 5, 0, 15, 2, 3, 10, 4, 18]);
  });
}); lo
>>>>>>> c40ebb08bc150ef95f8e80b61e64575aafb7cda4
