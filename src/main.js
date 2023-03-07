import { renderizarData } from './data.js';
//import ghibli from './data/ghibli/ghibli.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(Object.getOwnPropertyNames(data.films[5]))

//let image = Object.values(data.films[5])
//let linkImage = image[5]

for (let i = 0; i < Object.keys(data.films).length; i++) {
  let img = document.createElement("img");
  img.src = renderizarData(data, i, 5);
  document.body.appendChild(img);
  console.log(renderizarData(data,i,5));
}
/*
let img = document.createElement("img");
img.src = example(data,5);
document.body.appendChild(img);
*/



/*
Copy code// Crea un nuevo elemento de imagen 
var img = document.createElement('img'); 
 
// Establece la ubicación de la imagen 
img.src = 'ruta/a/mi/imagen.jpg'; 
 
// Agrega la imagen al documento 
document.body.appendChild(img); 
También puedes utilizar el atributo innerHTML de un elemento existente para insertar la imagen en la página. Por ejemplo:

Copy code// Selecciona el elemento donde deseas insertar la imagen 
var container = document.getElementById('mi-container'); 
 
// Inserta la imagen en el elemento 
container.innerHTML = '<img src="ruta/a/mi/imagen.jpg">'; 
*/