export const filtro = {
  porNombrePokemon: (listaPokemones, nombreBuscar) => {
    const busca = nombreBuscar.toLowerCase();
    const dataFiltrada = listaPokemones.filter((pokemon) => pokemon.name.startsWith(busca))
    return  dataFiltrada;
  },
  elPrimeroPorNombre: (listaPokemones, nombreBuscar) => {
    const busca = nombreBuscar.trim();
    const dataFiltrada = listaPokemones.filter((pokemon) => pokemon.name === busca)
    return  dataFiltrada[0];
  } 
};

export const anotherExample = () => {
  return 'OMG';
};

export const cartillas = (data) => {
  let cartillaString = "";
  for (const pokemon of data.pokemon) {
    cartillaString += `
    <article>
    <h3>${pokemon.name}</h3>
    <p>
    ${pokemon.about}
    </p>
    <img src=${pokemon.img}>
    </article>`;
  }
  return cartillaString;
};


export const buscarPorNombre = (data, nombreBuscar) => {
  const busca = nombreBuscar.trim();
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.name.startsWith(busca))
  return { pokemon: dataFiltrada }
};
