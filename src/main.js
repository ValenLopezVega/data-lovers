import { filterData, sortData, computeStats } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(data);

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

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
  searchFilm();
})

printAllMovies(data.films);
