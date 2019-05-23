const countUniqueValues = require('./count-unique-values').default;

test('countUniqueValues should return the correct count', () => {
  expect(countUniqueValues([1,1,1,1,2])).toEqual(2);
  expect(countUniqueValues([1,2,3,4,4,5,5,5,7,7,7,9])).toEqual(7);
  expect(countUniqueValues([])).toEqual(0);
  expect(countUniqueValues([-1,-2,0,1])).toEqual(4);
});