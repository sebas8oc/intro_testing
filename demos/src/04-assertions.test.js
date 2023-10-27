// matchers
test('test obj', () => {
  const data = { name: 'nico', lastname: 'molina' };
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});
