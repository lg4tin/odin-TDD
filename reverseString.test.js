/*eslint-disable*/

const reverseString = require('./reverseString');

test('reverses a string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('reverses a string', () => {
  expect(reverseString('hannah')).toBe('hannah');
});

test('reverses a string', () => {
  expect(reverseString('hey')).toBe('yeh');
});

test('reverses a string', () => {
  expect(reverseString('my name is lou')).toBe('uol si eman ym');
});