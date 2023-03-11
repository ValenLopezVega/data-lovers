export const filterByDirector = (array, directorSelected) => {
  return array.filter((item) => item.director === directorSelected);
};
export const orderAzByTitle = (array) => {
  return array.sort((a, b) => a.title.localeCompare(b.title));
};
export const orderZaByTitle = (array) => {
  return array.sort((a, b) => b.title.localeCompare(a.title));
};
export const searchByTitle = (array, text) => {
  return array.filter((item) => item.title.toLowerCase().includes(text));
};
<<<<<<< HEAD

=======
>>>>>>> efac756d1297e5a1feaee8c0462c23c72f67280a
