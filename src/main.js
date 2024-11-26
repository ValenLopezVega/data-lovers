import { computeStats, filterData, sortData } from './data.js';
import data from './data/ghibli/ghibli.js';

const cleanScreen = () => {
  document.getElementById('content').innerHTML = '';
}

const printAllMovies = (movies) => {
  //Limpiar la pantalla de las peliculas
  cleanScreen();
  //Recorrer las peliculas y agregarlas al div content
  movies.forEach(movie => {
    document.getElementById('content').innerHTML += `<img src="${movie.poster}" alt="${movie.title}" class="poster">`;
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

const printStats = () => {
  const computedStats = computeStats(data);

  cleanScreen();

  const tbl = document.createElement('table');
  const tblHead = document.createElement('thead');

  const headRow = document.createElement('tr');

  const headerCell1 = document.createElement('th');
  const headerText1 = document.createTextNode('Producers');
  headerCell1.appendChild(headerText1);
  headRow.appendChild(headerCell1);

  const headerCell2 = document.createElement('th');
  const headerText2 = document.createTextNode('Movies');
  headerCell2.appendChild(headerText2);
  headRow.appendChild(headerCell2);

  tblHead.appendChild(headRow);
  tbl.appendChild(tblHead);

  const tblBody = document.createElement('tbody');

  Object.entries(computedStats).forEach(([producer, count]) => {
    const row = document.createElement('tr');

    const cell1 = document.createElement('td');
    const cell1Text = document.createTextNode(producer);
    cell1.appendChild(cell1Text);
    row.appendChild(cell1);

    const cell2 = document.createElement('td');
    const cell2Text = document.createTextNode(count);
    cell2.appendChild(cell2Text);
    row.appendChild(cell2);

    tblBody.appendChild(row);
  });


  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.getElementById('content').appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute('border', '2');

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

const statsBtn = document.getElementById('stats-btn');
statsBtn.addEventListener('click', () => {
  printStats();
})

printAllMovies(data.films);
