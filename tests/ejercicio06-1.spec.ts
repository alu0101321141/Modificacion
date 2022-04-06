import "mocha";
import {expect} from 'chai';
import {Revista} from '../src/modificacion6-04-2022/ejercicio1-claseRevista';
import {UsuarioRevistaSubscriptor} from '../src/modificacion6-04-2022/ejercicio1-claseUsuario';

describe("Revista y usuarioSubscriptor fuction test", () => {
  it("prueba de existencia", () => {
    const Revista1 = new Revista(101, "Encuentro");
    const Paco = new UsuarioRevistaSubscriptor(1, "Paco");
    const Carmela = new UsuarioRevistaSubscriptor(2, "Carmela");
    expect(Revista1).not.to.be.null;
    expect(Paco).not.to.be.null;
    expect(Carmela).not.to.be.null;
  });
  it("pruebas getters", () => {
    const Revista1 = new Revista(101, "Encuentro");
    const Paco = new UsuarioRevistaSubscriptor(1, "Paco");
    expect(Revista1.getId()).to.eq(101);
    expect(Revista1.getName()).to.eq("Encuentro");
    expect(Revista1.getObservers()).to.eql([]);
    expect(Paco.getId()).to.eq(1);
    expect(Paco.getName()).to.eq("Paco");
  });
  it("Pruebas de funcionamiento subcripción", () => {
    const Revista1 = new Revista(101, "Encuentro");
    const Paco = new UsuarioRevistaSubscriptor(1, "Paco");
    const Carmela = new UsuarioRevistaSubscriptor(2, "Carmela");
    Revista1.subscribe(Paco);
    Revista1.subscribe(Carmela);
    expect(Revista1.getObservers()).to.eql([Paco, Carmela]);
  });
  it("Pruebas de funcionamiento unsubscribe", () => {
    const Revista1 = new Revista(101, "Encuentro");
    const Paco = new UsuarioRevistaSubscriptor(1, "Paco");
    const Carmela = new UsuarioRevistaSubscriptor(2, "Carmela");
    Revista1.subscribe(Paco);
    Revista1.subscribe(Carmela);
    Revista1.unsubscribe(Paco);
    Revista1.unsubscribe(Carmela);
    expect(Revista1.getObservers()).to.eql([]);
  });
  it("Pruebas Para los posibles errores. ", () => {
    const Revista1 = new Revista(101, "Encuentro");
    const Paco = new UsuarioRevistaSubscriptor(1, "Paco");
    const Carmela = new UsuarioRevistaSubscriptor(2, "Carmela");
    try {
      Revista1.subscribe(Paco);
      Revista1.subscribe(Paco);
    } catch (error) {
      console.log('Paco ya es subscriptor');
    }
    expect(Revista1.getObservers()).to.eql([Paco]);
    try {
      Revista1.unsubscribe(Carmela);
    } catch (error) {
      console.log('No existe el subscriptor');
    }
    expect(Revista1.getObservers()).to.eql([Paco]);
  });
  it("Pruebas el notify. ", () => {
    const Revista1 = new Revista(101, "Encuentro");
    const Paco = new UsuarioRevistaSubscriptor(1, "Paco");
    const Carmela = new UsuarioRevistaSubscriptor(2, "Carmela");
    Revista1.subscribe(Paco);
    Revista1.subscribe(Carmela);
    expect(Revista1.notificaciónDeLanzamiento()).to.eq("Notificado");
    expect(Paco.getFlag()).to.be.true;
    expect(Carmela.getFlag()).to.be.true;
  });
});
