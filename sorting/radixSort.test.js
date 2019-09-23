const radixSort = require('./radixSort').default;

test('radixSort', () => {
  expect(radixSort([1202,92,41,80,298765,71,5,3,6])).toEqual([3, 5, 6, 41, 71, 80, 92, 1202, 298765]);
  expect(radixSort([1,3,2])).toEqual([1,2,3]);
  expect(radixSort([1,3,2,4])).toEqual([1,2,3,4]);
});