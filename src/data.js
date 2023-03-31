// estas funciones son de ejemplo
import dataFunction from './data/ghibli/ghibli.js';
const allDataFunction = dataFunction.films;
console.log(allDataFunction);
/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/






export function filterByProducer(films,option){

  return films.filter((item)=>item.producer===option)
 
}

 
export function orderAlphabetical_AZ (prueba){
  return prueba.sort((item1, item2)=>{
    if(item1.title>item2.title){
      return 1
    }
    else {
      return -1
    }
  })
}

export function orderAlphabetical_ZA (prueba1){
  return prueba1.sort((item1, item2)=>{
    if(item1.title<item2.title){
      return 1
    }
    else {
      return -1
    }
  })
}
 

 