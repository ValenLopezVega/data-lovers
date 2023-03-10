import { pokemonData, typePokemon } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

//secciones
const homeSecction = document.getElementById("homeSecction");
const pokedexSecction = document.getElementById("pokedexSecction");
const mapSecction = document.getElementById("mapSecction");
const extraSecction = document.getElementById("extraSecction");
//botones de barra menu
const btnHome = document.getElementById("buttonHome");
const btnPokedex = document.getElementById("buttonPokedex");
const btnMap = document.getElementById("buttonMap");
const btnExtra = document.getElementById("buttonExtra");

//botones de tipos
const btnAllTypes = document.getElementById("allTypes");
const btnTypeNormal = document.getElementById('typeNormal');
const btnTypeFighting = document.getElementById('typeFighting');
const btnTypeFlying = document.getElementById('typeFlying');
const btnTypePoison = document.getElementById('typePoison');
const btnTypeGround = document.getElementById('typeGround');
const btnTypeRock = document.getElementById('typeRock');
const btnTypeBug = document.getElementById('typeBug');
const btnTypeGhost = document.getElementById('typeGhost');
const btnTypeSteel = document.getElementById('typeSteel');
const btnTypeFire = document.getElementById('typeFire');
const btnTypeWater   = document.getElementById('typeWater');
const btnTypeGrass   = document.getElementById('typeGrass');
const btnTypeElectric    = document.getElementById('typeElectric');
const btnTypePsychic    = document.getElementById('typePsychic');
const btnTypeIce   = document.getElementById('typeIce');
const btnTypeDragon    = document.getElementById('typeDragon');
const btnTypeDark     = document.getElementById('typeDark');
const btnTypeFairy    = document.getElementById('typeFairy');

function mostrarSeccion(seccion) {
  switch (seccion) {
  case "home":
    homeSecction.style.display = "block";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "pokedex":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "block";
    mapSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "map":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "block";
    extraSecction.style.display = "none";
    break;
  case "extra":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "none";
    extraSecction.style.display = "block";
    break;
  default:
    console.error("Sección no válida");
  }
}

btnHome.addEventListener("click", () => mostrarSeccion("home"));
btnPokedex.addEventListener("click", () => mostrarSeccion("pokedex"));
btnMap.addEventListener("click", () => mostrarSeccion("map"));
btnExtra.addEventListener("click", () => mostrarSeccion("extra"));


console.log(pokemonData);
console.log(data);


// Filtro todos los pokemon
const allType = data.pokemon;
const pokemonDiv = document.getElementById("pokemons");

btnAllTypes.addEventListener("click", function mostrarAll() {
  let contador = 0;
  allType.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//filtro tipo normal
const normalPokemon = typePokemon(data.pokemon, "normal");

btnTypeNormal.addEventListener("click", function mostrarNormal() {
  let contador = 0;
  normalPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//console.log(normalPokemon,'prueba');

//filtro tipo lucha
const fightingPokemon = typePokemon(data.pokemon, "fighting");
btnTypeFighting.addEventListener("click", function mostrarFighting() {
  let contador = 0;
  fightingPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo Volador
const flyingPokemon = typePokemon(data.pokemon, "flying");
btnTypeFlying.addEventListener("click", function mostrarFlying() {
  let contador = 0;
  flyingPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro de tipo Veneno
const poisonPokemon = typePokemon(data.pokemon, "poison");
btnTypePoison.addEventListener("click", function mostrarPoison() {
  let contador = 0;
  poisonPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo tierra
const groundPokemon = typePokemon(data.pokemon, "ground");
btnTypeGround.addEventListener("click", function mostrarGround() {
  let contador = 0;
  groundPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//typeconst groundPokemon = typePokemon(data.pokemon, "ground");
btnTypeGround.addEventListener("click", function mostrarGround() {
  let contador = 0;
  groundPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo Roca
const rockPokemon = typePokemon(data.pokemon, "rock");
btnTypeRock.addEventListener("click", function mostrarRock() {
  let contador = 0;
  rockPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro tipo Bicho
const bugPokemon = typePokemon(data.pokemon, "bug");
btnTypeBug.addEventListener("click", function mostrarBug() {
  let contador = 0;
  bugPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});
 
//Filtro tipo Fantasma
const ghostPokemon = typePokemon(data.pokemon, "ghost");
btnTypeGhost.addEventListener("click", function mostrarGhost() {
  let contador = 0;
  ghostPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro tipo acero
const steelPokemon = typePokemon(data.pokemon, "steel");
btnTypeSteel.addEventListener("click", function mostrarSteel() {
  let contador = 0;
  steelPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro tipo fuego
const firePokemon = typePokemon(data.pokemon, "fire");
btnTypeFire.addEventListener("click", function mostrarFire() {
  let contador = 0;
  firePokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro tipo Agua
const waterPokemon = typePokemon(data.pokemon, "water");
btnTypeWater.addEventListener("click", function mostrarWater() {
  let contador = 0;
  waterPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro tipo plamta
const grassPokemon = typePokemon(data.pokemon, "grass");
btnTypeGrass.addEventListener("click", function mostrarGrass() {
  let contador = 0;
  grassPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

//Filtro tipo Electrico
const electricPokemon = typePokemon(data.pokemon, "electric");
btnTypeElectric.addEventListener("click", function mostrarElectric() {
  let contador = 0;
  electricPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});


//Filtro tipo Psiquico
const psychicPokemon = typePokemon(data.pokemon, "psychic");
btnTypePsychic.addEventListener("click", function mostrarPsychic() {
  let contador = 0;
  psychicPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo Hielo
const icePokemon = typePokemon(data.pokemon, "ice");
btnTypeIce.addEventListener("click", function mostrarIce() {
  let contador = 0;
  icePokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo Dragon
const dragonPokemon = typePokemon(data.pokemon, "dragon");
btnTypeDragon.addEventListener("click", function mostrarDragon() {
  let contador = 0;
  dragonPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo Siniestro
const darkPokemon = typePokemon(data.pokemon, "dark");
btnTypeDark.addEventListener("click", function mostrarDark() {
  let contador = 0;
  darkPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});

// Filtro tipo Hada
const fairyPokemon = typePokemon(data.pokemon, "fairy");
btnTypeFairy.addEventListener("click", function mostrarFairy() {
  let contador = 0;
  fairyPokemon.forEach((pokemon) => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°:</strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>:${pokemon.type}<br>
    </div>`;
    contador++;
    if (contador % 3 === 0) {
      pokemonDiv.innerHTML += "<br>"; // Salto de línea después de 3 elementos
    }
  });
});
