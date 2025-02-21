import fizzbuzz from "./fizzbuzz.js";

describe("Fizzzbuzz", () => {
  it("deberia generar el mismo numero si el numero no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
});
