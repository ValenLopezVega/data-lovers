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

// funcion calcular el peso min y max y el promedi
export const computeStats = (data) => {
  const pokemonArray = data.pokemon;
  const weightArray = pokemonArray.map(pokemon => parseFloat(pokemon.size.weight.split(' ')[0]));
  const averageWeight = calculateAverage(weightArray);
  const lightest = Math.min(...weightArray);
  const heaviest = Math.max(...weightArray);

  const pokemonWeights = pokemonArray.map(pokemon => {
    return {
      ...pokemon,
      weight: parseFloat(pokemon.size.weight.split(' ')[0])
    };
  });

  const lightestPokemon = pokemonWeights.find(pokemon => pokemon.weight === lightest);
  const heaviestPokemon = pokemonWeights.find(pokemon => pokemon.weight === heaviest);

  console.log(`El pokemon más liviano es ${lightestPokemon.name} con un peso de ${lightestPokemon.weight}`);
  console.log(`El pokemon más pesado es ${heaviestPokemon.name} con un peso de ${heaviestPokemon.weight}`);

  const closestPokemon = pokemonWeights.sort((a, b) => Math.abs(a.weight - averageWeight) - Math.abs(b.weight - averageWeight))[0];
  

  console.log(`El pokemon con el peso más cercano al promedio (${averageWeight}) es ${closestPokemon.name} con un peso de ${closestPokemon.weight}`);

  return {
    averageWeight,
    lightest,
    heaviest,
    lightestPokemon,
    heaviestPokemon,
    closestPokemon
  };
};

function calculateAverage(numbers) {
  const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const count = numbers.length;
  const average = total / count;
  
  return average;
}
