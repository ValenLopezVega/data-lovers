import { pokemonData, sortPokemon, computeStats } from "./data.js";
// import data Pokemon
import data from "./data/pokemon/pokemon.js";

//secciones
const homeSecction = document.getElementById("homeSecction");
const pokedexSecction = document.getElementById("pokedexSecction");
const extraSecction = document.getElementById("extraSecction");
const pokemonDiv = document.getElementById("pokemons");
//botones de barra menu
const btnHome = document.getElementById("buttonHome");
const btnPokedex = document.getElementById("buttonPokedex");
const btnExtra = document.getElementById("buttonExtra");

//botones de tipos
const btnAllTypes = document.getElementById("allTypes");
const btnTypeNormal = document.getElementById("typeNormal");
const btnTypeFighting = document.getElementById("typeFighting");
const btnTypeFlying = document.getElementById("typeFlying");
const btnTypePoison = document.getElementById("typePoison");
const btnTypeGround = document.getElementById("typeGround");
const btnTypeRock = document.getElementById("typeRock");
const btnTypeBug = document.getElementById("typeBug");
const btnTypeGhost = document.getElementById("typeGhost");
const btnTypeSteel = document.getElementById("typeSteel");
const btnTypeFire = document.getElementById("typeFire");
const btnTypeWater = document.getElementById("typeWater");
const btnTypeGrass = document.getElementById("typeGrass");
const btnTypeElectric = document.getElementById("typeElectric");
const btnTypePsychic = document.getElementById("typePsychic");
const btnTypeIce = document.getElementById("typeIce");
const btnTypeDragon = document.getElementById("typeDragon");
const btnTypeDark = document.getElementById("typeDark");
const btnTypeFairy = document.getElementById("typeFairy");

//Ocultar secciones
function mostrarSeccion(seccion) {
  switch (seccion) {
  case "home":
    homeSecction.style.display = "block";
    pokedexSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "pokedex":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "block";
    extraSecction.style.display = "none";
    break;
  case "extra":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    extraSecction.style.display = "block";
    break;
  default:
    console.error("Sección no válida");
  }
}

btnHome.addEventListener("click", () => mostrarSeccion("home"));
btnPokedex.addEventListener("click", () => mostrarSeccion("pokedex"));
btnExtra.addEventListener("click", () => mostrarSeccion("extra"));

//const pokemonFiltro =  pokemonData(data);
// Función para filtrar Pokémon por tipo
function filtrarPorTipo(tipo) {
  return pokemonData(data.pokemon, tipo);
}

// Función para mostrar los Pokémon en el contenedor
function mostrarPokemon(pokemones) {
  pokemones.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>#${pokemon.num}</strong><br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>: ${pokemon.type}<br>
      <strong>Resistant</strong>: ${pokemon.resistant.join(", ")}<br>
      <strong>Weaknesses</strong>: ${pokemon.weaknesses.join(", ")}<br>
    </div>`;
  });
}

//seccion ordenar por abecedario
const orderSelect = document.getElementById("order-select");

orderSelect.addEventListener("change", function () {
  const selectedOption = orderSelect.value;

  if (selectedOption === "asc") {
    // Ordenar y mostrar en orden ascendente
    pokemonDiv.innerHTML = "";
    const pokemonOrdenados = sortPokemon(data.pokemon, "asc");
    mostrarPokemon(pokemonOrdenados);
  } else if (selectedOption === "desc") {
    // Ordenar y mostrar en orden descendente
    pokemonDiv.innerHTML = "";
    const pokemonOrdenados = sortPokemon(data.pokemon, "desc");
    mostrarPokemon(pokemonOrdenados);
  }
});

// Mostrar todos los Pokémon en pokedex
btnPokedex.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(data.pokemon);
});

//Mostrar todos en bóton pokebola
btnAllTypes.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(data.pokemon);
});

// Mostrar Pokémon de tipo Normal
btnTypeNormal.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("normal"));
});

// Mostrar Pokémon de tipo Lucha
btnTypeFighting.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("fighting"));
});

// Mostrar Pokémon de tipo Volador
btnTypeFlying.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("flying"));
});

// Mostrar Pokémon de tipo Veneno
btnTypePoison.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("poison"));
});

// Mostrar Pokémon de tipo Tierra
btnTypeGround.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("ground"));
});

// Mostrar Pokémon de tipo Roca
btnTypeRock.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("rock"));
});

// Mostrar Pokémon de tipo bicho
btnTypeBug.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("bug"));
});

// Mostrar Pokémon de tipo Acero
btnTypeSteel.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("steel"));
});

// Mostrar Pokémon de tipo fuego
btnTypeFire.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("fire"));
});

// Mostrar Pokémon de tipo Agua
btnTypeWater.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("water"));
});

// Mostrar Pokémon de tipo Planta
btnTypeGrass.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("grass"));
});

// Mostrar Pokémon de tipo Fantasma
btnTypeGhost.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("ghost"));
});

// Mostrar Pokémon de tipo eletrico
btnTypeElectric.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("electric"));
});

// Mostrar Pokémon de tipo Psiquico
btnTypePsychic.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("psychic"));
});

// Mostrar Pokémon de tipo Hielo
btnTypeIce.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("ice"));
});

// Mostrar Pokémon de tipo Dragon
btnTypeDragon.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("dragon"));
});

// Mostrar Pokémon de tipo Siniestro
btnTypeDark.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("dark"));
});

// Mostrar Pokémon de tipo Hada
btnTypeFairy.addEventListener("click", function () {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("fairy"));
});


// Mostrar pokemon por peso 

const mostrarPokeAverage = document.getElementById("mostrarPokePeso");

function mostrarPokemonPorPeso(pokemon, title) {
  return `
    <div>
      <h3>${title}</h3>
      <div id = pokePeso>
      <img src="${pokemon.img}"><br>
      <strong>#${pokemon.num}</strong><br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>: ${pokemon.type}<br>
      <strong>Peso</strong>: ${pokemon.size.weight}<br><br>
      </div>
    </div>
  `;
} 

function mostrarAverage(pokemones) {
  const averagePokemon = computeStats(pokemones);
  console.log(averagePokemon);

  const pokemonesPorPeso = [mostrarPokemonPorPeso(averagePokemon.lightestPokemon, "Curiosidad #1: El pokemon más liviano es GASTLY si, los fantasmas tambien pesan"),  mostrarPokemonPorPeso(averagePokemon.heaviestPokemon, "Curiosidad #2: El pokemon más pesado es SNORLAX puedes dormir junto a él, pero ten cuidado podría aplastarte"), mostrarPokemonPorPeso(averagePokemon.closestPokemon, "Curiosidad #3: El Pokemon más cercano al peso promedio es BLISSEY, cuando estes triste se acercará a ti para hacerte reír")  ];

  let peso = "";
  for (let i = 0; i <  pokemonesPorPeso.length; i++) {
    peso  +=  pokemonesPorPeso[i];
  }
  mostrarPokeAverage.innerHTML = peso ;
}

btnExtra.addEventListener("click", function () {
  mostrarAverage(data);
});

//poke peso
/*const mostrarPokeAverage = document.getElementById("mostrarPokePeso");

function mostrarAverage(pokemones) {
  const averagePokemon = computeStats(pokemones);
  console.log(averagePokemon);

  const lightestPokemon = averagePokemon.lightestPokemon;
  const heaviestPokemon = averagePokemon.heaviestPokemon;
  const closestPokemon = averagePokemon.closestPokemon;

  const lightestHTML = `
    <div>
      <h3>Pokemon con peso más liviano</h3>
      <div id = pokePeso>
      <img src="${lightestPokemon.img}"><br>
      <strong>#${lightestPokemon.num}</strong><br> 
      <strong>${lightestPokemon.name.charAt(0).toUpperCase() + lightestPokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>: ${lightestPokemon.type}<br>
      <strong>Peso</strong>: ${lightestPokemon.size.weight}<br><br>
      </div>
    </div>
  `;

  const heaviestHTML = `
    <div>
      <h3>Pokemon con peso más pesado</h3>
      <div id = pokePeso>
      <img src="${heaviestPokemon.img}"><br>
      <strong>#${heaviestPokemon.num}</strong><br> 
      <strong>${heaviestPokemon.name.charAt(0).toUpperCase() + heaviestPokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>: ${heaviestPokemon.type}<br>
      <strong>Peso</strong>: ${heaviestPokemon.size.weight}<br><br>
      </div>
    </div>
  `;

  const closestHTML = `
    <div>
      <h3>Pokemon más cercano al peso promedio</h3>
      <div id = pokePeso>
      <img src="${closestPokemon.img}"><br>
      <strong>#${closestPokemon.num}</strong><br> 
      <strong>${closestPokemon.name.charAt(0).toUpperCase() + closestPokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>: ${closestPokemon.type}<br>
      <strong>Peso</strong>: ${closestPokemon.size.weight}<br><br>
      </div>
    </div>
  `;

  mostrarPokeAverage.innerHTML = lightestHTML + heaviestHTML + closestHTML;
}

btnExtra.addEventListener("click", function () {
  mostrarAverage(data);
});
*/

