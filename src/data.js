export const example = () => {
  return 'example';
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
