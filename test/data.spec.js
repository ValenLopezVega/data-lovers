import { filterData, sortData, computeStats } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `example`', () => {
    const result = filterData(data, 'castle');
    expect(result.length).toBe(2);
  });

  it('throw an exception when data is null', () => {
    expect(() => filterData(null, 'castle')).toThrow(TypeError);
    expect(() => filterData('', 'castle')).toThrow(TypeError);
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns the second movie order ascendent', () => {
    const result = sortData(data, 'title', 'asc')
    expect(result[1].title).toBe('from up on poppy hill');
  });

  it('returns the first movie order descendent', () => {
    const result = sortData(data, 'title', 'desc')
    expect(result[0].title).toBe('whisper of the heart');
  });

  it('throw an exception when data is null', () => {
    expect(() => sortData(null, 'title', 'asc')).toThrow(TypeError);
    expect(() => filterData('', 'title', 'desc')).toThrow(TypeError);
  });
});


describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('returns object length', () => {
    const result = computeStats(data);
    expect(Object.keys(result).length).toBe(5);
  });

  it('returns object length', () => {
    const result = computeStats(data);
    expect(Object.keys(result).length).toBe(5);
  });

  it('throw an exception when data is null', () => {
    expect(() => computeStats(null)).toThrow(TypeError);
    expect(() => computeStats('')).toThrow(TypeError);
  });

});
