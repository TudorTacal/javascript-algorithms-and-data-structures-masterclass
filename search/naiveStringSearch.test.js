const naiveStringSearch = require('./naiveStringSearch').default;

test('naiveStringSearch should return the correct index value', () => {
  expect(naiveStringSearch('hello', 'l')).toEqual(2);
  expect(naiveStringSearch('wowomgzomg', 'omg')).toEqual(2);
});