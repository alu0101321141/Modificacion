import "mocha";
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicio1';

describe("RadomNumber fuction test", () => {
  it("prueba de existencia", () => {
    const generadorNumeros = RandomNumber.getRadomNumberInstance();
    expect(generadorNumeros).not.to.be.null;
  });
  it("Pruebas de funcionamiento", () => {
    const generadorNumeros = RandomNumber.getRadomNumberInstance();
    expect(generadorNumeros.getRandomFloatRange01()).to.be.within(0, 1);
    expect(generadorNumeros.getRandomBetwenTwoNum(2, 5)).to.be.within(2, 5);
    expect(generadorNumeros.getRandomIntBetwenTwoNum(1, 10)).to.be.within(1, 10);
  });
});
