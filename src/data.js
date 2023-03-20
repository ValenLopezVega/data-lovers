// Funcion filtrar por tipo

export const pokemonData = (data, tipo) => {
  const filterType = data.filter((pokemon) => pokemon.type.includes(tipo));
  return filterType;
};


//funcion orenar data
export const sortPokemon = (pokemones, order) => {
  const copia = [...pokemones];
  return copia.sort((a, b) =>
    order === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
};

// funcion calcular el spawn min y max
export const computeStats = (data) => {
  console.log(data.pokemon[0].size.weight)
  const pokemonArray = data.pokemon;
 const weightArray = pokemonArray.map(pokemon => pokemon.size.weight.split(' ')[0])
  //.filter(weight => typeof weight === 'number' && !isNaN(weight))
  console.log(weightArray)
const averageWeight = calculateAverage(weightArray)
return pokemonArray.filter(pokemon => pokemon.size.weight === averageWeight)
};


function calculateAverage(numbers) {
  const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const count = numbers.length;
  const average = total / count;
  return average;
}