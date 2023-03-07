


export const renderizarData = (x,y,z) => {
  let image = Object.values(x.films[y])
  let linkImage = image[z]
  return linkImage;
};

//x = data 
//y = i objeto de films (index de cada película)
//z = 5 propiedad de la pelicula (index de cada propiedad de la película escogida)