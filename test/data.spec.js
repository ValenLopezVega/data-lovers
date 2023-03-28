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








