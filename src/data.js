export const searchByName = (data,name) => {
  return data.filter((characters) => {
    return characters.name.toLowerCase().includes(name.toLowerCase());
  })
};



export const filterBySpecies = (data,species) => {
  return data.filter((characters) => {
    return characters.species.includes(species);
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

//calcular

export const calculate = (param,data) => {
  const percentage = param.length / data.length * 100
  return percentage.toFixed(2)
}


// Método fetch para traer la data desde json

fetch("./data/rickandmorty/rickandmorty.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
});
