// estas funciones son de ejemplo

fetch("data/ghibli/ghibli.json")
.then (response => response.json())
.then(data => {
    myJson(data.films)})

let arrayMovie = JSON.parse(myJson);
console.log(arrayMovie);


const movieArray = json.films;
console.log(movieArray)

let filterMovie = arrayMovie.filter(movie => movie.release_date === release_date);
console.log(filterMovie);

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
