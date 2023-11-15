/*eslint-disable*/

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.divide(60, 2)).toBe(30);
});

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});