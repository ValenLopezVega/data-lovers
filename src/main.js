import {
  filterByDirector,
  filterByProducer,
  orderAzByTitle,
  orderZaByTitle,
  searchByTitle,
  filterByYear,
} from "./data.js";

import data from "./data/ghibli/ghibli.js";
const listFilms = document.querySelector("#cards-model");
const buttonDirectors = document.querySelector("#buttons-directors");
const buttonProducers = document.querySelector("#buttons-producers");
const buttonOrder = document.querySelector("#buttons-order");
const buttonRelease = document.querySelector("#buttons-release");
const buttonSearch = document.querySelector("#buttons-search");
let dataFilms = data.films;

const renderizarFilms = () => {
  listFilms.innerHTML = "";
  dataFilms.forEach((film) => {
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
};

renderizarFilms();

buttonDirectors.addEventListener("change", (e) => {
  const directorSelected = e.target.value;
  if (directorSelected === "") {
    dataFilms = data.films;
    renderizarFilms();
  } else {
    const dataFilter = filterByDirector(data.films, directorSelected);
    dataFilms = [...dataFilter];
    renderizarFilms();
  }
});

const directorsHTML = () => {
  const dataFilms = data.films.map((film) => {
    return film.director;
  });

  const filmsDirectorsUnique = dataFilms.filter((film, posicion) => {
    return dataFilms.indexOf(film) === posicion;
  });

  filmsDirectorsUnique.forEach((director) => {
    const createButton = document.createElement("option");
    createButton.classList.add("button-data");
    createButton.value = director;
    createButton.innerHTML = director;

    buttonDirectors.appendChild(createButton);
  });
};

directorsHTML();

buttonProducers.addEventListener("change", (e) => {
  const producerSelected = e.target.value;
  if (producerSelected === "") {
    dataFilms = data.films;
    renderizarFilms();
  } else {
    const dataFilter = filterByProducer(data.films, producerSelected);
    dataFilms = [...dataFilter];
    renderizarFilms();
  }
});

const producersHTML = () => {
  const dataFilms = data.films.map((film) => {
    return film.producer;
  });

  const filmsProducersUnique = dataFilms.filter((film, posicion) => {
    return dataFilms.indexOf(film) === posicion;
  });

  filmsProducersUnique.forEach((producer) => {
    const createButton = document.createElement("option");
    createButton.classList.add("button-data");
    createButton.value = producer;
    createButton.innerHTML = producer;

    buttonProducers.appendChild(createButton);
  });
};

producersHTML();

buttonOrder.addEventListener("change", (e) => {
  const orderSelection = e.target.value;
  if (orderSelection === "a-z") {
    const dataFilter = orderAzByTitle(dataFilms);
    dataFilms = [...dataFilter];
  } else {
    const dataFilter = orderZaByTitle(dataFilms);
    dataFilms = [...dataFilter];
  }
  renderizarFilms();
});

buttonSearch.addEventListener("search", (e) => {
  const keyValue = e.target.value.toLowerCase();
  if (keyValue === "") {
    dataFilms = data.films;

    renderizarFilms();
  } else {
    const dataFilter = searchByTitle(data.films, keyValue);
    dataFilms = [...dataFilter];
    renderizarFilms();
  }
});

buttonRelease.addEventListener("change", (e) => {
  const release_dateSelected = e.target.value;
  if (release_dateSelected === "") {
    dataFilms = data.films;
    renderizarFilms();
  } else {
    const dataFilter = filterByYear(data.films, release_dateSelected);
    dataFilms = [...dataFilter];
    renderizarFilms();
  }
});

const releaseHTML = () => {
  const dataFilms = data.films.map((film) => {
    return film.release_date;
  });

  const filmsReleaseUnique = dataFilms.filter((film, posicion) => {
    return dataFilms.indexOf(film) === posicion;
  });

  filmsReleaseUnique.forEach((release_date) => {
    const createButton = document.createElement("option");
    createButton.classList.add("button-data");
    createButton.value = release_date;
    createButton.innerHTML = release_date;

    buttonRelease.appendChild(createButton);
  });
};
releaseHTML();
