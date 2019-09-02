const { quickSort, pivot } = require('./quickSort');

test('pivot returns the correct index of the element', () => {
  expect(pivot([4, 8, 2, 1, 5, 7, 6, 3])).toEqual(3);
});

test('quickSort', () => {
  expect(quickSort([1,9,4,8,2,7,5,3,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(quickSort([1,3,2])).toEqual([1,2,3]);
  expect(quickSort([1,3,2,4])).toEqual([1,2,3,4]);
  expect(quickSort([1,10,3,2,4])).toEqual([1,2,3,4,10]);
});