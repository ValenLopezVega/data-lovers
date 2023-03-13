// estas funciones son de ejemplo

export const pokemonData = (data,condition) => {  
  const filterType= data.filter(pokemon => pokemon.type === condition);
  return filterType;
};
