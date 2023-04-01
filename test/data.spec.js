import { filterMovies, filtrarPro, sortData , sortNum } from '../src/data.js';
import { datatitle } from './mockData.js';

describe('Probar si filterMovies es una función', () => {
  it('filterMovies debería ser una función', () => {
    expect(typeof filterMovies ).toBe('function');
  });

  it('Debería retornar "Castle in the Sky" para "1986"', () => {
    expect(filterMovies(datatitle.films,"1986")).toContainEqual(datatitle.films[0]);
  });

  it('Debería retornar "From Up on Poppy Hill" para "2011"', () => {
    expect(filterMovies(datatitle.films,'1988')).toContainEqual(datatitle.films[1]);
  });

});

describe('Probar si filtrarPro es una función', () => {
  it('filtrarPro debería ser una función', () => {
    expect(typeof filtrarPro).toBe('function');
  });

  it('Debe retornar "Castle in the Sky" para "Isao Takahata"', () => {
    expect(filtrarPro(datatitle.films, 'Isao Takahata')).toContainEqual(datatitle.films[0]);
  });

  it('Debería retornar "My Neighbor Totoro" para "Hayao Miyazaki"', () => {
    expect(filtrarPro(datatitle.films, 'Hayao Miyazaki')).toContainEqual(datatitle.films[1]);
  });
});

describe('Probar que sortData permite ordenar las películas alfabéticamente', () => {

  it('sortData es una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Debe ordenar las películas alfabéticamente', () => {
    const ordenAlfabetico = sortData(datatitle.films)

    expect(ordenAlfabetico[0].title).toMatch("Castle in the Sky");
    expect(ordenAlfabetico[1].title).toMatch("Kiki's Delivery Service");
    expect(ordenAlfabetico[2].title).toMatch("My Neighbor Totoro");
    expect(ordenAlfabetico[3].title).toMatch("My Neighbor Totoro");
  });

  it('Debería retornar igual cuando los títulos se repitan', () => {
    expect(sortData(datatitle.films)).toEqual(datatitle.films);
  });

  describe('Probar que sortNum permite ordenar las películas según el año', () => {
    it('sortNum debería ser una función', () => {
      expect(typeof sortNum).toBe('function');
    });

    it('Debe ordenar las películas de menor a mayor año y puntaje', () => {
      expect(sortNum(datatitle.films, 'año')).toContainEqual(datatitle.films[0,1,2,3]);

      expect(sortNum(datatitle.films, 'score')).toContainEqual(datatitle.films[1,2,0,3]);
    });

    it ('Debería ordenar por puntaje', () => {
      expect(sortNum(datatitle.films, 'puntaje')).toEqual(datatitle.films);
    })

    it ('Debería ordenar por año', () => {
      expect(sortNum(datatitle.films, 'año')).toEqual(datatitle.films);
    })
  })
})