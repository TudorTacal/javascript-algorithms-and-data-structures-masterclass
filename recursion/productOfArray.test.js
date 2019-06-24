const { productOfArray } = require('./productOfArray');

describe('productOfArray', () => {
  test('should return the correct output', () => {
    expect(productOfArray([1, 2, 3])).toEqual(6);
    expect(productOfArray([1, 2, 3, 10])).toEqual(60);
  });
});
