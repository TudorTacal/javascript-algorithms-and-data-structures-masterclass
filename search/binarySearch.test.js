const binarySearch = require('./binarySearch').default;

test('binarySearch should return the correct index value', () => {
  expect(binarySearch([1,2,3,4,5], 2)).toEqual(1);
  expect(binarySearch([1,2,3,4,5], 5)).toEqual(4);
});