// estas funciones son de ejemplo
import dataFunction from './data/ghibli/ghibli.js';

//CONSTANTE QUE GUARDA EL ARREGLO DE FILMS(PELICULAS)

const allDataFunction = dataFunction.films;
console.log(allDataFunction);

//FUNCION QUE PERMITE FILTRAR POR PRODUCTOR

export function filterByProducer(films, option) {
  return films.filter((item) => item.producer === option)
}



//FUNCION QUE PERMITE ORDERNAR ALFABETICAMENTE DE LA A -Z
export function orderAlphabetical_AZ(prueba) {
  return prueba.sort((a, b) => {
 
    if (a.title<b.title) {
      return -1;
    }
    if (a.title>b.title) {
      return 1;
    }
    return 0;
    
  })
}
//FUNCION QUE PERMITE ORDERNAR ALFABETICAMENTE DE LA Z -A
export function orderAlphabetical_ZA(prueba1) {
  return prueba1.sort((a, b) => {
    if (a.title > b.title) {
      return -1
    }
    if (a.title<b.title) {
      return 1;
    }
    return 0;
  })
}

//Funcion que filtra top 10 de mejores peliculas

export const topMovies={
  orderbyScore: function(score){ return score.sort((item1,item2)=> item2.rt_score-item1.rt_score) },
  mayorScore: function(top){return top.slice(0,10)}
}
