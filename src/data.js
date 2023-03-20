

export const example = () => {
  return 'array de Score';
};

export function filterMovies(peliculas, years) {
  var newArray = peliculas.filter(function (año) {
    return año.release_date == years;
  });
    return newArray;
};

