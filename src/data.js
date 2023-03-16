// estas funciones son de ejemplo


export const pokemonData = (data,condition) => {  
  const filterType= data.filter(pokemon => pokemon.type === condition);
  return filterType;
};


export const sortPokemon = (pokemones, order)=>{
  const copia = [...pokemones]
return copia.sort((a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
};

export const calculateSpawnMinMax = (data) => {
  const spawnChanceArray = data.pokemon
    .map(pokemon => parseFloat(pokemon['spawn-chance']))
    .filter(spawnChance => typeof spawnChance === 'number' && !isNaN(spawnChance));
  const minSpawnChance = Math.min(...spawnChanceArray);
  const maxSpawnChance = Math.max(...spawnChanceArray);

  return {min: minSpawnChance, max: maxSpawnChance};
}
