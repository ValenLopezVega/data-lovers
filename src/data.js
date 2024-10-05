
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

  const ghibliArray = data['ghibli'];
  const ghibliScores = [];
  ghibliArray.forEach(element => {
    ghibliScores.push(element.rt_score);
  });

  const scores = [];
  for (let i = 0; i < ghibliScores.length; i++){
    scores[ghibliScores[i]] = 1 + (scores[ghibliScores[i]] || 0);
  }
  return scores;
};

