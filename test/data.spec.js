import { filterByProducer, orderAlphabetical_AZ,orderAlphabetical_ZA } from '../src/data.js';

const moviesToFilter = [{
  "title": "The Secret World of Arrietty",
  "director": "Hiromasa Yonebayashi",
  "producer": "Toshio Suzuki",

}, {
  "title": "The Wind Rises",
  "director": "Hayao Miyazaki",
  "producer": "Toshio Suzuki",
}, {
  "title": "The Tale of the Princess Kaguya",
  "director": "Isao Takahata",
  "producer": "Yoshiaki Nishimura",
}];

const salidaByProducer = [{
  "title": "The Tale of the Princess Kaguya",
  "director": "Isao Takahata",
  "producer": "Yoshiaki Nishimura",

}];

const entradaOrder= [{"title": "The Secret World of Arrietty"},{"title": "The Wind Rises"},{"title": "The Tale of the Princess Kaguya"}];
const salidaOrderAscendente = [{"title": "The Secret World of Arrietty"},{"title": "The Tale of the Princess Kaguya"},{"title": "The Wind Rises"}];
const salidaOrderDescendente = [{"title": "The Wind Rises"},{"title": "The Tale of the Princess Kaguya"},{"title": "The Secret World of Arrietty"}];
const entradaOrder2=[{"title": "123argaret"},{"title": "123artha"},{"title": "67aria"}];
const salidaOrderAscendente2=[{"title": "123argaret"},{"title": "123artha"},{"title": "67aria"}];
const salidaOrderDescendente2=[{"title": "67aria"},{"title": "123artha"},{"title": "123argaret"}];
//test de filtro
describe('testeando la funcion filterByProducer', () => {
  
  it('filterByProducer es una funcion', () => {
    expect(typeof filterByProducer).toBe('function')
  });
  /*it('type return filterByProducer ', () => {
    expect(typeof moviesToFilter).toBe('Array')
  });*/
  it('Filtrar peliculas del productor Toshio Suzuki ', () => {
    expect(filterByProducer(moviesToFilter, 'Yoshiaki Nishimura')).toEqual(salidaByProducer);
  });

})

// test de orden alfabético A-Z
describe('testeando funcion orderAlphabetical_AZ',()=>{

  it('orderAlphabetical_AZ debería ser una función',()=>{
    expect(typeof orderAlphabetical_AZ).toBe('function');
  });
  
  it('entradaOrderAscendente deberia de ordenar de la A-Z',()=>{
    expect(orderAlphabetical_AZ(entradaOrder)).toEqual(salidaOrderAscendente);
  });
  
  it('entradaOrderAscendente deberia de ordenar de la A-Z-2',()=>{
    expect(orderAlphabetical_AZ(entradaOrder2)).toEqual(salidaOrderAscendente2);
  });
  
})
//test de orden alfabético Z-A
describe('testeando funcion orderAlphabetical_ZA',()=>{

  it('orderAlphabetical_ZA debería ser una función',()=>{
    expect(typeof orderAlphabetical_ZA).toBe('function');
  });
  
  it('entradaOrderAscendente deberia de ordenar de la Z-A',()=>{
    expect(orderAlphabetical_ZA(entradaOrder)).toEqual(salidaOrderDescendente);
  });
  it('entradaOrderAscendente deberia de ordenar de la Z-A-2',()=>{
    expect(orderAlphabetical_ZA(entradaOrder2)).toEqual(salidaOrderDescendente2);
  });
  
})



/*
describe('filterByProducer', () => {
  it('is a function', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('returns movie', () => {
    expect(filterByProducer('Isao Takahata')).toBe('Castle in the Sky');
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
