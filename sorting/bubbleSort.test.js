const bubbleSort = require('./bubbleSort').default;

test('bubbleSort', () => {
  expect(bubbleSort([1,9,4,8,2,7,5,3,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(bubbleSort([1,3,2])).toEqual([1,2,3]);
  expect(bubbleSort([1,3,2,4])).toEqual([1,2,3,4]);
  expect(bubbleSort([1,10,3,2,4])).toEqual([1,2,3,4,10]);
});