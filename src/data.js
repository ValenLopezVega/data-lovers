export function typeFilter (arrData,n) {
  const typeFilterData = arrData.filter((elem) => elem.type.includes(n));
  
  return typeFilterData;
}
  
export const typeFilterGeneration = (arrData, n) => {
  const typeFilterDataGeneration = arrData.filter((elem) => elem.generation.name.includes(n));
  return  typeFilterDataGeneration;
}
 export function orderAscending (arr) {
  const orderAs = arr.sort((a,b) =>{
    if (a.name > b.name) {
      return 1
    } else if (b.name > a.name){
      return -1;
    } else {
      return 0;
    }
  })
  return orderAs;

 }
 export function orderDescending(arr) {
  const orderDes = arr.sort((a,b) =>{
    if (a.name > b.name) {
      return -1;
    }else if (b.name > a.name){
      return 1;
    } else {
      return 0;
    }
  })
  return orderDes;
 }