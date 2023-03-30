import { filterMovies, filtrarPro, sortData, sortNum} from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

//Funcion describe 
describe('Probar si filterMovies es una función', () => {
  it('filterMovies debería ser una función', () => {
    expect(typeof filterMovies).toBe('function');
  });
  it('Debería retornar "Castle in the Sky" para "1986"', () => {
    expect(filterMovies(data.films,'1986')).toContainEqual(data.films[0]);
  });
  it('Debería retornar "From Up on Poppy Hill" para "2011"', () => {
    expect(filterMovies(data.films,'2011')).toContainEqual(data.films[16]);
  });

});


//Funcion filtrarPro
describe('Probar si filtrarPro es una función', () => {
  it('filtrarPro debería ser una función', () => {
    expect(typeof filtrarPro).toBe('function');
  });

  it('Debe retornar "Castle in the Sky" ${data.films[0].producer} para "Isao Takahata"', () => {
    expect(filtrarPro(data.films,'Isao Takahata')).toContainEqual(data.films[0]);
  });

  it('Debería retornar "Grave of the Fireflies" ${data.films[3].producer} para "Toru Hara"', () => {
    expect(filtrarPro(data.films, 'Toru Hara')).toContainEqual(data.films[3]);
  });

});


//Funcion sortData
describe('Probar que sortData permite ordenar las peliculas alfabeticamente', () => {

  it('sortData es una función', () => {
    expect(typeof sortData).toBe('function');
  });

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


  it('Debería retornar peliculas de A-Z', () => {
    expect(sortData(data.films)).toContainEqual(data.films[0, 16, 3, 12, 2, 1, 9, 4, 6, 14, 5, 8, 10, 13, 11, 15, 18, 17, 19, 7]);
  });

});


//Funcion sortNum

describe('Probar que sortNum permite ordenar las peliculas segun el año', () => {

  it('sortNum debería ser una función', () => {
    expect(typeof sortNum).toBe('function');
  });

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

  it('Debería retornar peliculas ordenadas por año', () => {
    expect(sortNum(data.films, 'año')).toContainEqual(data.films[0, 3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 17, 19]);
  });

  it('Debería retornar peliculas ordenadas por score', () => {
    expect(sortNum(data.films, 'score')).toContainEqual(data.films[13, 9, 6, 16, 12, 11, 17, 7, 14, 8, 19, 1, 5, 0, 15, 2, 3, 10, 4, 18]);
  });

})
