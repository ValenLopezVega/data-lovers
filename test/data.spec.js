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
    {title: "Kiki's Delivery Service"},
    {title: "Kiki's Delivery Service"}
  ]

  it('Debe ordenar las películas alfabeticamente', () => {
    const ordenAlfabetico = sortData(datos)

    expect(ordenAlfabetico[0].title).toMatch("Castle in the Sky");
    expect(ordenAlfabetico[1].title).toMatch("Kiki's Delivery Service");
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

  const fechas = {
    "series": [
      {"nombre":"serie1", "fecha": "1991", "score": "30"}, {"nombre":"serie2", "fecha": "2000", "score": "90"}, {"nombre":"serie3", "fecha": "1989", "score": "40"}
    ]
  }

  it('Debe ordenar las películas de menor a mayor año', () => {

    expect(sortNum(fechas.series, 'fecha')).toContainEqual(fechas.series[2, 0, 1]);
    expect(sortNum(fechas.series, 'score')).toContainEqual(fechas.series[0, 2, 1]);

  });
  
  const datos = {
    "pelicula": [
      {"title":"peli1", "score": "10"}, {"title":"peli2", "score": "8"}, {"title":"peli3", "score": "24"}
    ] 
  }
  
  it('Debe ordenar las películas segun el puntaje', () => {

    expect(sortNum(datos.pelicula, 'score')).toContainEqual(datos.pelicula[1, 0, 2]);
  });

  it('Debería retornar peliculas ordenadas por año', () => {
    expect(sortNum(data.films, 'año')).toContainEqual(data.films[0, 3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 17, 19]);
  });

  it('Debería retornar peliculas ordenadas por score', () => {
    expect(sortNum(data.films, 'score')).toContainEqual(data.films[13, 9, 6, 16, 12, 11, 17, 7, 14, 8, 19, 1, 5, 0, 15, 2, 3, 10, 4, 18]);
  });

})
