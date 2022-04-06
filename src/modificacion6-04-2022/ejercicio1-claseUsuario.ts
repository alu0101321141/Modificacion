import {Revisable, Observer} from './ejercicio1-interfaces';
import {Revista, RevistaEventType} from './ejercicio1-claseRevista';

/**
 * clase usuario observador de la revista
 */
export class UsuarioRevistaSubscriptor implements Observer {
  flag:boolean;
  /**
   * constructor
   * @param id identificador usuario
   * @param name nombre del usuario
   */
  constructor(private id: number, private name: string) {
    this.flag = false;
  }

  /**
   * getter
   * @returns id
   */
  getId() {
    return this.id;
  }
  /**
   * getter
   * @returns nombre
   */
  getName() {
    return this.name;
  }

  /**
   * getter
   * @returns valor de la flag
   */
  getFlag() {
    return this.flag;
  }

  /**
   * Actualizacion del estado.
   * @param Revisable revisa el evento ocrrido
   */
  update(Revisable: Revisable) {
    if (Revisable instanceof Revista) {
      switch (Revisable.getEventType()) {
        case RevistaEventType.NOTIFICACION:
          console.log(`Yo soy el subscriptor ${this.name} ` +
                      `y he observado que la revista ${Revisable.getName()} ` +
                      `ha sacado un nuevo articulo`);
          this.flag = true;
          break;
      }
    }
  }
}
