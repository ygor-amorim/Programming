/* eslint-disable no-undef */
const sum = require('../sum');

test('Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
