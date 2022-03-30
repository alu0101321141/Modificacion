/**
 * coleccion de datos
 */
export class RadomNumberSetCollection<T> implements Iterable<T> {
  /**
   * Conjunto de los numeros
   */
  private numbers:Set<T>;

  /**
   * Constructor de la clase incializa
   */
  constructor() {
    this.numbers = new Set();
  }

  /**
   * Añade numeros.
   * @param newData inserta un nuevo dato
   */
  addData(newData:T) {
    this.numbers.add(newData);
  }

  /**
   * elimina dato
   * @param deleteData dato a eliminar
   */
  removeData(deleteData:T) {
    this.numbers.delete(deleteData);
  }

  /**
   * Coleccion de datos
   * @returns conjunto
   */
  getSet() {
    return this.numbers;
  }

  /**
   * iterador.
   * @returns values
   */
  [Symbol.iterator](): Iterator<T> {
    return this.numbers.values();
  }
}
