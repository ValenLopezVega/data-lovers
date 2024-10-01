import { filterData, sortData } from './data.js';
import data from './data/ghibli/ghibli.js';

const printAllMovies = (movies) => {
  //Limpiar la pantalla de las peliculas
  document.getElementById('content').innerHTML = '';
  //Recorrer las peliculas y agregarlas al div content
  movies.forEach(movie => {
    document.getElementById('content').innerHTML += `<img src="${movie.poster}" alt="${movie.title}" class="poster" width="30%">`;
  });
}

const searchFilm = () => {
  const searchTerm = document.getElementById('film-title').value;
  const filteredData = filterData(data, searchTerm.toLowerCase());
  printAllMovies(filteredData);
}

const sortFilms = (order) => {
  const sortedData = sortData(data, 'title', order);
  printAllMovies(sortedData);
}

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
  searchFilm();
})

const ascBtn = document.getElementById('sort-asc');
ascBtn.addEventListener('click', () => {
  sortFilms('asc');
})

const descBtn = document.getElementById('sort-desc');
descBtn.addEventListener('click', () => {
  sortFilms('desc');
})

printAllMovies(data.films);
