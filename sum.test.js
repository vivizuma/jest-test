const sum = require("./sum");
const multiply = require("./multiply");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("multiply 2 and 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
