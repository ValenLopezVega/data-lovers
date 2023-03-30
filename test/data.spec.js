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
  
});