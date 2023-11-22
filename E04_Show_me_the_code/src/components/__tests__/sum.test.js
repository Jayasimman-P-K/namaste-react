const sum = (a, b) => a + b;

test("this is my first testing code", () => {
  const result = sum(5, 4);

  // Assertion
  expect(result).toBe(9);
});
