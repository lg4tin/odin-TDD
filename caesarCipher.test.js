/*eslint-disable*/

const caesarCipher = require('./caesarCipher');

test('make each character one up in the alphabet', () => {
  expect(caesarCipher.shiftChars('string', 1)).toBe('tusjoh');
});

test('make each character one up in the alphabet', () => {
  expect(caesarCipher.shiftChars('h,i', 2)).toBe('j,k');
});

test('make each character one up in the alphabet', () => {
  expect(caesarCipher.shiftChars('z', 2)).toBe('b');
});

test('make each character one up in the alphabet', () => {
  expect(caesarCipher.shiftChars('zebra', 4)).toBe('difve');
});

test('make each character one up in the alphabet', () => {
  expect(caesarCipher.shiftChars('zz-top', 5)).toBe('ee-ytu');
});