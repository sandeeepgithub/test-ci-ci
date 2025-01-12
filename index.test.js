const init = require('./index');

describe('Init function', () => {
  it('should return the correct value', () => {
    expect(init(1)).toBe(1);
    expect(init(2)).toBe(2);
    expect(init('test')).toBe('test');
    expect(init(true)).toBe(true);
    expect(init(null)).toBe(null);
  });
});
