const findLongestSubstring = require('./findLongestSubstring').default;

test('findLongestSubstring', () => {
  expect(findLongestSubstring('')).toEqual(0);
  expect(findLongestSubstring('rithmschool')).toEqual(7);
  expect(findLongestSubstring('thisisawesome')).toEqual(6);
  expect(findLongestSubstring('thecatinthehat')).toEqual(7);
  expect(findLongestSubstring('bbbbb')).toEqual(1);
  expect(findLongestSubstring('longestsubstring')).toEqual(8);
  expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
});