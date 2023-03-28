import { filter } from '../src/data.js';


describe('filter', () => {
  it('is a object', () => {
    expect(typeof filter).toBe('object');
  });
  describe('filter.typeFilter',() => {
    it('is a function', () => {
      expect(typeof filter.typeFilter).toBe('function');
    })
  })
  //it('returns `example`', () => {
  //expect(example()).toBe('example');
  //});
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
