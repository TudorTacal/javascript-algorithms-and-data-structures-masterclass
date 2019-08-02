const selectionSort = require('./selectionSort').default;

test('selectionSort', () => {
  expect(selectionSort([1,9,4,8,2,7,5,3,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(selectionSort([1,3,2])).toEqual([1,2,3]);
  expect(selectionSort([1,3,2,4])).toEqual([1,2,3,4]);
  expect(selectionSort([50, -2, 0, 1,10,3,2,4, 25, -3])).toEqual([-3, -2, 0, 1,2,3,4,10, 25, 50]);
});