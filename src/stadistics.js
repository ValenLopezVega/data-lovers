import data from "./data/ghibli/ghibli.js";
const information = () => {
let speciesTotal=[]
const species=data.films.map((item)=>{
  const containerSpecies=item.people.map((i)=>{
    return i.specie
  })
  speciesTotal=[...speciesTotal,...containerSpecies]
  return containerSpecies

})
const countSpecie={}
speciesTotal.map((item)=>{
if(countSpecie[item] ){
  countSpecie[item]++
}else{
  countSpecie[item]=1
  
}
})
return countSpecie 
}
const stadistics = () => {
    let countspecies = information()
const amountSpecies=Object.values(countspecies)
const nameSpecies=Object.keys(countspecies)
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: nameSpecies,
        datasets: [
          {
            label: "# of Characters",
            data: amountSpecies,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          },
        },

      },
    )
  };
  stadistics(); 