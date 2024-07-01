import foo from "./foo.js";

describe("foo", function () {
  it("should return 2", function () {
    expect(foo()).toEqual(2);
  });
});
