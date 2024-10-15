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

const printStats = () => {
  const computedStats = computeStats(data);
  console.log(computedStats);

  cleanScreen();

  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 5; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");

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
