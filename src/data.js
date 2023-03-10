// estas funciones son de ejemplo

export const pokemonData = (data,condition) => {  
  const filterType= data.filter(pokemon => pokemon.type === condition);
  return filterType;

  
};

export const typePokemon = (data, type) => {
  const typePokemon = data.filter(pokemon => pokemon.type.includes(type));
  console.log(typePokemon);
  return typePokemon;
};

