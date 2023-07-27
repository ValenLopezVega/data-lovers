export const searchByName = (data,name) => {
  return data.filter((characters) => {
    return characters.name.toLowerCase().includes(name.toLowerCase());
  })
};

export const filterGeneral = (data,propiedad,option) => {
  return data.filter((characters) => {
    return characters[propiedad].includes(option);
  })
};

export const filterByGender = (data,gender) => {
  return data.filter((characters) => {
    return characters.gender.includes(gender);
  })
};


export const filterByOrderAZ = (characters) => {
  return characters.sort((a,b) => {
    if (a.name < b.name) {
      return -1;
    } 
  })
};

export const filterByOrderZA = (characters) => {
  return characters.sort((a,b) => {
    if (a.name > b.name) {
      return -1;

    }
  })
}

export const calculate = (param,data) => {
  const percentage = param.length / data.length * 100

  return percentage.toFixed(2)
}

