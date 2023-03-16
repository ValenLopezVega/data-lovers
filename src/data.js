// estas funciones son de ejemplo



export const pokemonData = (data,condition) => {  
  const filterType= data.filter(pokemon => pokemon.type === condition);
  return filterType;
};

/*export const filterByLetter = (data, letter, sortOrder) => {
  const filterData = data.filter(pokemon => pokemon.name.charAt(0).toLowerCase() === letter.toLowerCase());
  return filterData;
}*/

export const sortPokemon = (pokemones, order)=>{
  const copia = [...pokemones]
return copia.sort((a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
};