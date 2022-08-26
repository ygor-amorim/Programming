const booleanToString = require('../boolean_to_string');

boolean = require('../boolean_to_string');

test('Should convert a boolean to a string', () => {
  expect(booleanToString(true)).toMatch('true');
  expect(booleanToString(false)).toMatch('false');
  expect(booleanToString()).toBeNull();
});
