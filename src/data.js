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


