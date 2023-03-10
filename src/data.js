// estas funciones son de ejemplo

export const pokemonData = (data, type) => {
  const typePokemon = data.filter(pokemon => pokemon.type.includes(type));
  console.log(pokemonData);
  return pokemonData;
};


export const anotherExample = () => {
  return 'OMG';
};

