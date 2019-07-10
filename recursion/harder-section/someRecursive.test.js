const { someRecursive } = require('./someRecursive');

describe('someRecursive', () => {
  it('should return correct values', () => {
    const isOdd = val => val % 2 !== 0;

    expect(someRecursive([1,2,3,4], isOdd)).toEqual(true);
    expect(someRecursive([4,6,8,9], isOdd)).toEqual(true);
    expect(someRecursive([4,6,8], isOdd)).toEqual(false);
    expect(someRecursive([4,6,8], val => val > 10)).toEqual(false);
  });
});