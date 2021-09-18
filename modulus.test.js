import { modulus } from "./modulus";

describe("The modulus function", () => {
  it("finds the modulus", () => {
    expect(modulus(5, 2)).toEqual(1);
  });
});
