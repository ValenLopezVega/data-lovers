
export const filterData = (data, condition) => {
  return data.films.filter((film) => film.title.includes(condition));
};

export const sortData = (data, sortBy, sortOrder) => {
  const tempArray = Array.from(data['films']);
  let result = tempArray.sort((a, b) => a.title > b.title ? 1 : -1);
  if(sortOrder === 'asc'){
    return result;
  }else{
    return result.reverse();
  }
};

export const computeStats = (data) => {
  return `${data}`;
};
