
export function typeFilter (arrData,n) {
  const typeFilterData = arrData.filter((elem) => elem.type.includes(n));
  return typeFilterData;
}

export const anotherExample = () => {
  return 'OMG';
}
