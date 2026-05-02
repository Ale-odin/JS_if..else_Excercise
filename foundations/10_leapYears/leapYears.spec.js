const leapYears = require('./leapYears')

describe('leapYears', () => {
  test('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
