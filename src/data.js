
export function filterMovies(peliculas, years) {
  const newArray = peliculas.filter(año => año.release_date === years);
  return newArray;
}

export function sortData(peliculas,type){
  peliculas.sort(function(a,b){
    if(a.title < b.title){ return -1; }
    if(a.title > b.title){ return 1; }
    return 0;
  }); 
  return peliculas;
}

export function filtrarPro(peliculas,type){
  return peliculas.filter(elemento => elemento.producer === type);
}

