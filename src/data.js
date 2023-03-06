export const filterByDirector = (array, directorSelected) => {
  return array.filter((item) => item.director === directorSelected);
};
export const filterByProducer = (array, producerSelected) => {
    return array.filter((item) => item.producer === producerSelected);
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

export const filterByYear = (array, release_dateSelected) => {
    return array.filter((item) => item.release_date === release_dateSelected);
  };
  
