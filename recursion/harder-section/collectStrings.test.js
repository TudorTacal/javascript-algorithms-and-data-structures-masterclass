const { collectStrings } = require('./collectStrings');

describe('collectStrings', () => {
  it('should return correct values', () => {
    const obj = {
      stuff: "foo",
      data: {
          val: {
              thing: {
                  info: "bar",
                  moreInfo: {
                      evenMoreInfo: {
                          weMadeIt: "baz"
                      }
                  }
              }
          }
      }
    }
    expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
  });
});