package org.generation.exceptions;

public class Division {
	//Método par dividir
	public static int dividir(int num1, int num2) {
		return num1 / num2;
	}
	
	public static void main (String[] args) {
		/*
		 * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código, es el equivalente a los "errores".
		 * Utiliza una estrucutra de control try-catch que permite manejar las excepciones.
		 * - try: envuelve el código que puede generar una excepción y lo evalúa
		 * - catch: contiene el código que se ejecuta cuando se lanza a excepción
		 * 
		 * 		Sintaxis
		 * 			try {
		 * 				//Código de excepción
		 * 			} catch (ExceptionName e){
		 * 				//Bloque de excepción
		 * 			}
		 * 
		 * - finally: siempre se ejecuta, y se utiliza pra mostrar un mensaje en caso de ser invocado. Podemos prescindir de finally
		 */
		
		//Excepción que se arroja si un número se divide entre 0
		//DOCUMENTACIÓN sobre exepciones: https://www.geeksforgeeks.org/exceptions-in-java/
		try {
			int resultado = dividir(10, 5);
			System.out.println("El resultado de la división es: " + resultado);
		} catch (ArithmeticException e) {
			System.out.println("\u001B[31mError, no puedes dividir entre 0\u001B[31m");//La noación \u001B[31m es para poner colores en la salida del texto, (métodos ANSI)
		} finally {
			System.out.println("\u001B[32mPrograma finalizado\u001B[32m");//Se ejecute el try o el catch, el finally se ejecutará
		}
	}
}
