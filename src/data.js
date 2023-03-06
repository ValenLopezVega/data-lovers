// estas funciones son de ejemplo
export const imagenes = (data) => {
  let imagenString = "";
  for (const imagen of data.results) {
    imagenString += `
    <div class="personaje">
      <div class="personajesImagenes">
        <img class="imagenPokemon" src=${imagen.image} >
        <p>${imagen.name}</p> 
    </div> 
    </div>`;
  }
  return imagenString;
};
export const anotherExample = () => {
  return 'OMG';
};


