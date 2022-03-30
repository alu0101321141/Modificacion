import "mocha";
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicio1';
import {RadomNumberSetCollection} from '../src/ejercicio2';

describe("RadomNumber fuction test", () => {
  it("prueba de existencia", () => {
    const generadorNumeros = RandomNumber.getRadomNumberInstance();
    const coleccion = new RadomNumberSetCollection<Number>();
    expect(generadorNumeros).not.to.be.null;
    expect(coleccion).not.to.be.null;
  });
  it("Pruebas de funcionamiento", () => {
    const generadorNumeros = RandomNumber.getRadomNumberInstance();
    const coleccion = new RadomNumberSetCollection<Number>();
    const emptySet = new Set();
    coleccion.addData(generadorNumeros.getRandomFloatRange01());
    coleccion.addData(generadorNumeros.getRandomFloatRange01());
    coleccion.addData(generadorNumeros.getRandomFloatRange01());
    expect(coleccion.getSet()).not.be.null;
    [...coleccion].forEach((data) =>
      coleccion.removeData(data));
    expect(coleccion.getSet()).to.eql(emptySet);
  });
});
