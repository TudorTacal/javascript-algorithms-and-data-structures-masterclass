const solution = require('./company-revenues-pairing').default;

describe('solution', () => {
  it.each([
    {
      input: [10, -10, -1, -1, 1, 10],
      output: 1,
    },
    // {
    //   input: [-1, -1, -1, 1, 1, 1, 1],
    //   output: 3,
    // },
    // {
    //   input: [5, -2, -3, 1],
    //   output: 0,
    // },
  ])('should return the correct result', ({ input, output }) => {
    expect(solution(input)).toEqual(output);
  });
});
