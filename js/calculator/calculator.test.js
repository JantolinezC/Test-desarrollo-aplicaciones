const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 8 * 3 to equal 24', ()=>{
  expect(calculator.multiply(8, 3)).toBe(24);
});

test('divide 80 / 20 to equal 4', ()=>{
  expect(calculator.divide(80, 20)).toBe(4);
});

test('divide by zero should return undefined', () => {
    expect(calculator.divide(10, 0)).toBe('undefined');
});