const isSubSequence = require('./is-sub-sequence').default;

test('isSubSequence', () => {
  expect(isSubSequence('hello', 'hello world')).toEqual(true);
  expect(isSubSequence('sing', 'sting')).toEqual(true);
  expect(isSubSequence('abc', 'abracadabra')).toEqual(true);
  expect(isSubSequence('abc', 'acb')).toEqual(false);
  expect(isSubSequence('bb', 'ahbgdc')).toEqual(false);
});
