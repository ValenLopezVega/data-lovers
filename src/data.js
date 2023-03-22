// estas funciones son de ejemplo
import dataFunction from './data/ghibli/ghibli.js';

export const example = () => {
  return 'example';
};


export const anotherExample = () => {
  return 'OMG';
};






/*const functions = {
  printPoster: ( ) => 
    dataFunction.films.forEach((item) => {
      const post = item.poster;
      const title = item.title;
      const insertPoster = document.getElementById('insertPoster');
      insertPoster.innerHTML += `<div class="imgPoster"> <img src=${post} alt="${title}"></img> <p>${title}</p</div>`
    })
  }*/

  


 
//console.log(functions.printPoster( ));

 export const printPoster= ()=>{
  dataFunction.films.forEach((item) => {
    const post = item.poster;
    const title = item.title;
    const insertPoster = document.getElementById('insertPoster');
    insertPoster.innerHTML += `<div class="imgPoster"> <img src=${post} alt="${title}"></img> <p>${title}</p</div>`;
  })
   
}

  
 
 


