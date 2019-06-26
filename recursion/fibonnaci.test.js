const { fibonnaci } = require('./fibonnaci');

describe('fibonnaci', () => {
  test('should return the correct output', () => {
    expect(fibonnaci(4)).toEqual(3);
    expect(fibonnaci(10)).toEqual(55);
    expect(fibonnaci(28)).toEqual(317811);
    expect(fibonnaci(35)).toEqual(9227465);
  });
});
