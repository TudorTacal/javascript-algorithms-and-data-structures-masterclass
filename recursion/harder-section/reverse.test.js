const { reverse } = require('./reverse');

describe('reverse', () => {
  it('should return correct values', () => {
    expect(reverse('awesome')).toEqual('emosewa');
    expect(reverse('rithmschool')).toEqual('loohcsmhtir');
  });
});