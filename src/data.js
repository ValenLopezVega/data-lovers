export const ordenar= (dataArray,selectedTitle) => {
  if(selectedTitle==="title-az"){
    const sortDataByTitleAz = dataArray.sort(function(a,b) {
      if(a.title > b.title){
        return 1;
      } 
      if (a.title < b.title){
        return -1;
      } 
      return 0;
    });
    return sortDataByTitleAz
  }
  if(selectedTitle==="title-za"){
    const sortDataByTitleZa = dataArray.sort(function(a,b) {
      if(a.title < b.title){
        return 1;
      } 
      if (a.title > b.title){
        return -1;
      } 
      return 0;
    });
    return sortDataByTitleZa
  }
}

export const filtrar= (dataArray,selectedDirector) => {
  for(let i=0;i<dataArray.length;i++){
    const directorName = dataArray[i].director
    if(selectedDirector===directorName){
      const filteredMovies = dataArray.filter(element => element.director === directorName);
      return filteredMovies
    }
  }
}