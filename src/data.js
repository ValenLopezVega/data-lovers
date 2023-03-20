// estas funciones son de ejemplo
//aquí estará el objeto

export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};

export function sortData(peliculas,type){
  peliculas.sort(function(a,b){
    if(a.title < b.title){ return -1; }
    if(a.title > b.title){ return 1; }
    return 0;
  }); 
  // procesamiento para ordenar la data
  // retornar las peliculas ordenadas
  return peliculas;
}

export function filtrarPro(peliculas,type){
  return peliculas.filter(elemento => elemento.producer === type);
}

