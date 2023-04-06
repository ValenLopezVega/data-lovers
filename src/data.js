// estas funciones son de ejemplo
import dataFunction from './data/ghibli/ghibli.js';

//CONSTANTE QUE GUARDA EL ARREGLO DE FILMS(PELICULAS)

const allDataFunction = dataFunction.films;
console.log(allDataFunction);

//FUNCION QUE PERMITE FILTRAR POR PRODUCTOR

export function filterByProducer(films, option) {
  return films.filter((item) => item.producer === option)
}



//FUNCION QUE PERMITE ORDERNAR ALFABETICAMENTE DE LA A -Z
export function orderAlphabetical_AZ(prueba) {
  return prueba.sort((a, b) => {

    if (a.title < b.title) {
      return -1;
    }

  })
}
//FUNCION QUE PERMITE ORDERNAR ALFABETICAMENTE DE LA Z -A
export function orderAlphabetical_ZA(prueba1) {
  return prueba1.sort((a, b) => {
    if (a.title > b.title) {
      return -1
    }
  })
}

//Funcion que filtra top 10 de mejores peliculas



export function topMovies(allDataFunction) {

  const score = allDataFunction.sort((item1, item2) => item2.rt_score - item1.rt_score);
  const mayorScore = score.slice(0, 10);
  return mayorScore;

}


//Estadisticas de datos curiosos

export function genderStadisctic(arrayFilms) {

  const dataPeople = {
    female: [],
    male: [],
    other: []
  };

  arrayFilms.forEach((item) =>
    item.people.forEach((index) => {
       
      if (index.gender === 'Female') {
        dataPeople.female.push(index.gender)
      }
      if (index.gender === 'Male') {
        dataPeople.male.push(index.gender)
      }
      if (index.gender !== 'Male' && index.gender !== 'Female') {
        dataPeople.other.push(index.gender)
      }
    })
  )
  const a = dataPeople.female;
  const b = dataPeople.male;
  const c = dataPeople.other;

  const sum = a.length + b.length + c.length;
  const femalePorcent = Math.round((a.length * 100) / sum);
  const malePorcent = Math.round((b.length * 100) / sum);
  const otherPorcent = Math.round((c.length * 100) / sum);
  const allGender = {
    female: femalePorcent,
    male: malePorcent,
    other: otherPorcent
  }
  return allGender

}


console.log('funcion', genderStadisctic(allDataFunction))

//estadistica  Dato curioso especie
export function specieStadistic(arrayFilms) {
  const species = {
    human: [],
    semiHuman: [],
    animals: [],
    noHuman: []
  }
  //función filtra por especie 
  arrayFilms.forEach((item) => {
    item.people.forEach((index) => {
      if (index.specie === 'Human') {
        species.human.push(index.specie)
      }
      else if (index.specie === 'Cat' || index.specie === 'Raccoon Dog' || index.specie === 'Red elk' || index.specie === 'Wolf' || index.specie === 'Bird' || index.specie === 'Dog') {
        species.animals.push(index.specie)
      }
      else if (index.specie === 'Witch' || index.specie === 'Wizard' || index.specie === 'Witch/Human' || index.specie === 'Human/Scarecrow' || index.specie === 'Arch-mage/Human' || index.specie === 'Fish/Human' || index.specie === 'Borrower') {
        species.semiHuman.push(index.specie)
      }
      else {
        species.noHuman.push(index.specie)
      }

    })
  })


  const sumSpecies = species.human.length + species.animals.length + species.semiHuman.length + species.noHuman.length;
  const humanPOrcent = Math.round((species.human.length * 100) / sumSpecies)
  const animalsPorcent = Math.round((species.animals.length * 100) / sumSpecies)
  const semiHumanPorcent = Math.round((species.semiHuman.length * 100) / sumSpecies)
  const noHumanPorcent = Math.round((species.noHuman.length * 100) / sumSpecies)
  const sumOthers = semiHumanPorcent + animalsPorcent + noHumanPorcent

  //para que se guarda en un objeto?
  const allSpecies = {
    human: humanPOrcent,
    semiHuman: semiHumanPorcent,
    animals: animalsPorcent,
    noHuman: noHumanPorcent,
    sumaOthers: sumOthers
  }
  return allSpecies
}