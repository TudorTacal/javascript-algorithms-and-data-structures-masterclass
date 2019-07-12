const { capitalizeFirst } = require('./capitalizeFirst');

describe('capitalizeFirst', () => {
  it('should return correct values', () => {
  expect(capitalizeFirst(['car','taco','banana'])).toEqual(['Car','Taco','Banana']);
  });
});