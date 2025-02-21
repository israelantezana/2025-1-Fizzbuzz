import fizzbuzz from "./fizzbuzz.js";

describe("Fizzzbuzz", () => {
  it("deberia generar el 1 ya que el numero no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia generar el mismo numero si el numero no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
  it("deberia generar fizz si el numero ingresado es 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("deberia generar fizz si el numero es multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  it("deberia generar fizz si el numero ingresado es 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("deberia generar fizz si el numero es multiplo de 5", () => {
    expect(fizzbuzz(50)).toEqual("Buzz");
  });
});
