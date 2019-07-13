const { capitalizeWords } = require('./capitalizeWords');

describe('capitalizeWords', () => {
  it('should return correct values', () => {
  expect(capitalizeWords( ['i', 'am', 'learning', 'recursion'])).toEqual( ['I', 'AM', 'LEARNING', 'RECURSION']);
  });
});