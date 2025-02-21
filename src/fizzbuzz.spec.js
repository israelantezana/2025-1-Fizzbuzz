import fizzbuzz from "./fizzbuzz.js";

describe("Fizzzbuzz", () => {
  it("deberia generar el 1 ya que el numero no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia generar el mismo numero si el numero no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
});
