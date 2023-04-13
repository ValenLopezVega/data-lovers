export const filtro = {
  porNombrePokemon: (listaPokemones, nombreBuscar) => {
    const busca = nombreBuscar.toLowerCase();
    const dataFiltrada = listaPokemones.filter((pokemon) => pokemon.name.startsWith(busca))
    return  dataFiltrada;
  },
  porRegion: (listaPokemones, regionBuscar) => {
    const busca = regionBuscar.toLowerCase();
    const dataFiltrada = listaPokemones.filter((pokemon) => pokemon.generation.name.startsWith(busca))
    return  dataFiltrada;
  },
};

export const ordenar = {
  ascendente:(listaPokemones) => { 
    // use slice() para ordenar una copia y no el array original
    return listaPokemones.slice().sort( compararNombresAscendente );
  },
  descendente:(listaPokemones) => { 
    // use slice() para ordenar una copia y no el array original
    return listaPokemones.slice().sort( compararNombresDescendente );
  }
}

//te devuelve un string que contiene la estructura html , la cual se forma apartir
// de la lista recibida por parametro
export const cartillasHtml = (listaPokemons) => {
  let cartillaString = ""; 
  listaPokemons.forEach ((pokemon)=>{
    cartillaString = cartillaString + `
    <article class = "cartillaSeccUno">
    <h3>${pokemon.name}</h3> 
    <p>${pokemon.about}</p>
    <img class= "pokecart" src=${pokemon.img}>
    <a href="pokemon.html?nombre=${pokemon.name}" target="_blank" >see more</a>
    </article>`;
  });
  return cartillaString;
}

function compararNombresAscendente( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

function compararNombresDescendente( a, b ) {
  if (  b.name < a.name){
    return -1;
  }
  if ( b.name > a.name ){
    return 1;
  }
  return 0;
}

