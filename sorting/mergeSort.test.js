const { mergeSort, merge } = require('./mergeSort');

test('merge', () => {
  expect(merge([1, 10, 50], [1, 2, 4, 99, 100])).toEqual([1, 1, 2, 4, 10, 50, 99, 100]);
  expect(merge([], [1, 3])).toEqual([1, 3]);
  expect(merge([100], [1, 2, 3, 4])).toEqual([1, 2, 3, 4, 100]);
});

test('mergeSort', () => {
  expect(mergeSort([1,9,4,8,2,7,5,3,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(mergeSort([1,3,2])).toEqual([1,2,3]);
  expect(mergeSort([1,3,2,4])).toEqual([1,2,3,4]);
  expect(mergeSort([1,10,3,2,4])).toEqual([1,2,3,4,10]);
});