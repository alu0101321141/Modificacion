/**
 * Clase privatada
 */
export class RandomNumber {
  /**
   * Instancia
   */
  private static IntanceRandomNumber: RandomNumber;

  /**
   * constructor privado
   */
  private constructor() {
  }

  /**
   * obtiene la instancia de la clase
   * @returns Objeto
   */
  public static getRadomNumberInstance():RandomNumber {
    if (!RandomNumber.IntanceRandomNumber) {
      RandomNumber.IntanceRandomNumber = new RandomNumber();
    }
    return RandomNumber.IntanceRandomNumber;
  }

  /**
   * calcula numero aleatorio [0,1]
   * @returns numero aleatorio entre 0 y 1.
   */
  getRandomFloatRange01() {
    return Math.random();
  }

  /**
   * calcular FLOTANTE  aleatorio entre dos numeros
   * @param min Numero minimo a calcular el aleatorio
   * @param max numero máximo a calcular el aleatrio
   * @returns bnumero flotante akeatorio
   */
  getRandomBetwenTwoNum(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  /**
   * numero ENTERO aleatorio entre dos numeros
   * @param min Numero minimo a calcular el aleatorio
   * @param max numero máximo a calcular el aleatorio
   * @returns numero entero aleatorio
   */
  getRandomIntBetwenTwoNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
