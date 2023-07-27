// FILTER BY NAME

export const searchByName = (data,name) => {//primer parametro(data) segundo (valor del usuario)para poder compararlo.
  return data.filter((characters) => {
    return characters.name.toLowerCase().includes(name.toLowerCase());
    // comparamos si el valor q el usuario ingresa esta incluido en la lista de la data,entonces lo va a filtrar
  })
};

// FILTER GENERAL 

export const filterGeneral = (data,propiedad,option) => {
  // el primer parametro (data)tiene recorrer (propiedad)referente al valor que voy a comparar(option)al valor que el usuario.
  return data.filter((characters) => {
    return characters[propiedad].includes(option);
    // estoy comparando el valor del usuario con la data
  })
};


// ORDER AZ - ZA

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


// CALCULATE PERCENTAJE

export const calculate = (param,data) => {
  const percentage = param.length / data.length * 100;
  return percentage.toFixed(2); // cortar números decimales.
}


//FILTER BY GENDER

export const filterByGender = (data,gender) => {
  return data.filter((characters) => {
    return characters.gender.includes(gender);
  })
};



