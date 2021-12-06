const { div } = require('~/helpers');

test('divides 10 by 2 to equal 5', () => {
  expect(div(10, 2)).toBe(5);
});
