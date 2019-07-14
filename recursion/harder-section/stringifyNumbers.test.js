const { stringifyNumbers } = require('./stringifyNumbers');

describe('stringifyNumbers', () => {
  it('should return correct values', () => {
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }



  expect(stringifyNumbers(obj)).toEqual({
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
    });
  });
});