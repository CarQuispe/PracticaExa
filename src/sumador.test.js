import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
describe("multiplicar", ()=>{
  it ("deberia multiplicar dos numeros",()=>{
    expect(sumar.multiplicar(4,6)) .toBe(24);
  });
});
