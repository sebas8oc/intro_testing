const { sum, multiply, divide } = require('./02-math');

describe('test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
});

test('multiply should be 4', () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test('divide should for 0', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});
