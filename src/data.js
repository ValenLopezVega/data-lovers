// estas funciones son de ejemplo


export const tarjetas = (data) => {
  let tarjetaString = " ";
  for (const pokemon of data.pokemon){
    tarjetaString +=`
    
    <div class = "card"></div>
    <div class= "backTarjeta">Descripcion</div>
    <div class= "frontTarjeta">
    <img class= "imagenPokemon" src = ${pokemon.img}>
    <p> #${pokemon.num} <br> ${pokemon.name.toUpperCase()}</p>
    </div>`
  }

  return tarjetaString;
} 





export const anotherExample = () => {
  return 'OMG';
};
