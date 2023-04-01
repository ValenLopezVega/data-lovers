export function filterMovies(peliculas, years) {
  return peliculas.filter(año => año.release_date === years);
}
export function filtrarPro(peliculas,type){
  return peliculas.filter(elemento => elemento.producer === type);
}

export function sortData(peliculas){
  peliculas.sort(function(a,b){
    if(a.title < b.title){ return -1; }
    if(a.title > b.title){ return 1; }
    return 0;
  }); 
  return peliculas;
}
export function sortNum(peliculas, type){
  peliculas.sort(function (a,b) {
    if (type === "año"){
      return a.release_date - b.release_date;
    } else if (type === "puntaje"){
      return a.rt_score - b.rt_score;
    }})
  return peliculas;
} 