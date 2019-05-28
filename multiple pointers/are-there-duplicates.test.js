const areThereDuplicates = require('./are-there-duplicates').default;

test('areThereDuplicates', () => {
  expect(areThereDuplicates(1, 2, 3)).toEqual(false);
  expect(areThereDuplicates(1, 2, 2)).toEqual(true);
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true);
});