/**
 * Interfaz para hacer una clase revisable
 */
export interface Revisable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

/**
 * Observer interfaz para hacer la clase observable
 */
export interface Observer {
  update(observable: Revisable): void;
}

