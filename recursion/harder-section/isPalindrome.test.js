const { isPalindrome } = require('./isPalindrome');

describe('isPalindrome', () => {
  it('should return correct values', () => {
    expect(isPalindrome('awesome')).toEqual(false);
    expect(isPalindrome('rithmschool')).toEqual(false);
    expect(isPalindrome('tacocat')).toEqual(true);
    expect(isPalindrome('amanaplanacanalpanama')).toEqual(true);
    expect(isPalindrome('amanaplanacanalpandemonium')).toEqual(false);
  });
});