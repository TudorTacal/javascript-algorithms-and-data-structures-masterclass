const insertionSort = require('./insertionSort').default;

test('insertionSort', () => {
  expect(insertionSort([1,9,4,8,2,7,5,3,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(insertionSort([1,3,2])).toEqual([1,2,3]);
  expect(insertionSort([1,3,2,4])).toEqual([1,2,3,4]);
  expect(insertionSort([1,10,3,2,4])).toEqual([1,2,3,4,10]);
});