// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/ghibli/ghibli.js";

const listFilms = document.querySelector("#cards-model");
const buttonDirectors = document.querySelector("#buttons-directors");

//muestra la lista de peliculas en el html
function filmsHTML() {
  data.films.forEach((film) => {
    const { poster, title } = film;
    const createCard = document.createElement("article");
    createCard.classList.add("cards-data");
    createCard.innerHTML = `
    <figure class="fig-cards">
      <div>
        <img
          class="img-cards"
          src="${poster}"
          alt="imagen"
        />
        <p class="films-name">"${title}"</p>
      </div>
    </figure>`;

    listFilms.appendChild(createCard);
  });
}
filmsHTML();
function directorsHTML() {
  data.films.forEach((directors) => {
    const { director } = directors;
    const createButton = document.createElement("option");
    createButton.classList.add("button-data");
    createButton.value = director;
    createButton.innerHTML = director;

    buttonDirectors.appendChild(createButton);
  });
}
directorsHTML();
