import data from "./data/ghibli/ghibli.js";
const informacion = () => {
let speciesTotal=[]
const species=data.films.map((item)=>{
  const contenedorSpecies=item.people.map((i)=>{
    return i.specie
  })
  speciesTotal=[...speciesTotal,...contenedorSpecies]
  return contenedorSpecies

})
const contarSpecie={}
speciesTotal.map((item)=>{
if(contarSpecie[item] ){
  contarSpecie[item]++
}else{
  contarSpecie[item]=1
  
}
})
return contarSpecie 
}
const stadistics = () => {
    let contarspecies = informacion()
const cantidadSpecies=Object.values(contarspecies)
const nameSpecies=Object.keys(contarspecies)
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: nameSpecies,
        datasets: [
          {
            label: "# of Characters",
            data: cantidadSpecies,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };
  stadistics();

