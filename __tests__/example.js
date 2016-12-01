/* eslint-env node, jest */
const sum = require('../src/example');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
