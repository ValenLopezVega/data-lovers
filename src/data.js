export function typeFilter (arrData,n) {
  const typeFilterData = arrData.filter((elem) => elem.type.includes(n));
  
  return typeFilterData;
}
  
export const typeFilterGeneration = (arrData, n) => {
  const typeFilterDataGeneration = arrData.filter((elem) => elem.generation.name.includes(n));
  return  typeFilterDataGeneration;
}
