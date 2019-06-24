const { recursiveRange } = require('./recursiveRange');

describe('recursiveRange', () => {
  test('should return the correct output', () => {
    expect(recursiveRange(6)).toEqual(21);
    expect(recursiveRange(10)).toEqual(55);
  });
});
