import {fibonacci} from './fibonacci';

describe('fibonacci', () => {
  it('test n = 0', () => {
    expect(fibonacci(0)).toEqual([]);
  });

  it('test n = 2', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });

  it('test n = 3', () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });

  it('test n = 5', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it('test n = 8', () => {
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it('test n = 10', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
