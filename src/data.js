
export const filterData = (data, condition) => {
  return data.films.filter((film) => film.title.includes(condition));
};

export const sortData = (data, sortBy, sortOrder) => {
  const tempArray = Array.from(data['films']);
  const result = tempArray.sort((a, b) => a.title > b.title ? 1 : -1);
  return sortOrder === 'asc' ? result : result.reverse();
};

export const computeStats = (data) => {
  if(data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0){
    throw new TypeError('data is not an object');
  }

  const ghibliArray = data['films'];
  const ghibliProducers = [];
  ghibliArray.forEach(element => {
    ghibliProducers.push(element.producer);
  });

  const producers = [];
  for (let i = 0; i < ghibliProducers.length; i++){
    producers[ghibliProducers[i]] = 1 + (producers[ghibliProducers[i]] || 0);
  }
  return producers;
};

