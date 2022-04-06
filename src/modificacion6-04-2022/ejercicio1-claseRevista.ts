import { Revisable, Observer } from './ejercicio1-interfaces';
/**
 * enum para definir los eventos
 */
export enum RevistaEventType { 'NO_EVENT', 'NOTIFICACION' };
/**
 * Clase revista
 */
export class Revista implements Revisable {
  /**
   * Observadores de la revista
   */
  private observers: Observer[] = [];

  /**
   * evento que realiza la revista
   */
  private eventType: RevistaEventType = RevistaEventType.NO_EVENT;

  /**
   * constructor de la clase
   * @param id Id de la revista
   * @param name nombre de la revista
   */
  constructor(private id: number, private name: string) {
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
   * @returns nombre de la revista
   */
  getName() {
    return this.name;
  }

  /**
   * getter
   * @returns subscriptores
   */
  getObservers() {
    return this.observers;
  }

  /**
   * getter
   * @returns evento
   */
  getEventType() {
    return this.eventType;
  }

  /**
   * añade subscriptores a la clase
   * @param observer subscriptor
   */
  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('El cliente ya está suscrito');
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * quita un subscriptor
   * @param observer subscriptor
   */
  unsubscribe(observer: Observer) {
    const indice = this.observers.indexOf(observer);
    if (indice === -1) {
      throw new Error('El usuario no existe');
    } else {
      this.observers.splice(indice, 1);
    }
  }

  /**
   * notifica a los usuarios el evento
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  /**
   * notifica el evento de lanazamiento de un nuevo tomo
   */
  notificaciónDeLanzamiento() {
    this.eventType = RevistaEventType.NOTIFICACION;
    this.notify();
    return "Notificado";
  }
}
