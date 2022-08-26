/* eslint-disable no-undef */
const banjo = require('../banjo');

test('Should return a string containing `plays banjo` or `does not play banjo`', () => {
  expect(banjo('Rodrigo')).toMatch('plays banjo');
  expect(banjo('rodrigo')).toMatch('plays banjo');
  expect(banjo('Julia')).toMatch('does not play banjo');
  expect(banjo('julia')).toMatch('does not play banjo');
  expect(banjo('Ana')).not.toMatch('plays banjo');
  expect(banjo('ana')).not.toMatch('plays banjo');
});
