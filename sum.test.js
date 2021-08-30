const sum = require("./sum");

describe("The sum function", () => {
  it("adds two numbers", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});
