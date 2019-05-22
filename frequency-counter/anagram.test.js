const anagram = require('./anagram').default;

test('anagram should return correct value', () => {
  expect(anagram('anagram', 'nagaram')).toEqual(true);
  expect(anagram('aaz', 'zza')).toEqual(false);
  expect(anagram('car', 'cara')).toEqual(false);
  expect(anagram('', '')).toEqual(true);
});