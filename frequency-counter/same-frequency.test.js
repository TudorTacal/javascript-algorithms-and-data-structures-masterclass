const sameFrequency = require('./same-frequency').default;

test('sameFrequency', () => {
  expect(sameFrequency(182, 281)).toEqual(true);
  expect(sameFrequency(34, 14)).toEqual(false);
  expect(sameFrequency(3589578, 5879385)).toEqual(true);
  expect(sameFrequency(22, 222)).toEqual(false);
});