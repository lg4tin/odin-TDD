/*eslint-disable*/
const capitalize = require('./capitalize');

test('first letter to be capitalized', () => {
  expect(capitalize('string')).toBe('String');
});

test('first letter to be capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('first letter to be capitalized', () => {
  expect(capitalize('world')).toBe('World');
});

test('first letter to be capitalized', () => {
  expect(capitalize('hey my name is louis fortin')).toBe('Hey my name is louis fortin');
});