// Funcion filtrar por tipo

export const pokemonData = (data,condition) => {  
  const filterType= data.filter(pokemon => pokemon.type === condition);
  return filterType;
};

//funcion orenar data
export const sortPokemon = (pokemones, order)=>{
  const copia = [...pokemones]
  return copia.sort((a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
};

// funcion calcular el spawn min y max
export const calculateSpawnMinMax = (data) => {
  const spawnChanceArray = data.pokemon
    .map(pokemon => parseFloat(pokemon['spawn-chance']))
    .filter(spawnChance => typeof spawnChance === 'number' && !isNaN(spawnChance));
  const minSpawnChance = Math.min(...spawnChanceArray);
  const maxSpawnChance = Math.max(...spawnChanceArray);

  return {min: minSpawnChance, max: maxSpawnChance};
}
