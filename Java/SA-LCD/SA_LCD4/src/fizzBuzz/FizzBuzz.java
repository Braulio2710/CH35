package fizzBuzz;

public class FizzBuzz {
	//FUnción para generar número del 0 al 100 y evaluarl si son múltiplos de 3 && 5, de 3, de 5 o de nunguno.
	public void numeros() {
		//Generar 100 numeros del 1 al 100
		for (int i = 0; i <= 100; i++) {
			//Comprobar si el número es multiplo de 3 y de 5
			if (i % 3 == 0 && i % 5 == 0) {
				System.out.println("FizzBuzz");
			}
			//Comporbar si es múltipo sólo de 3
			else if (i % 3 == 0) {
				System.out.println("Fizz");
			}
			//Compribar si es múltiplo sólo de 5
			else if (i % 5 == 0) {
				System.out.println("Buzz");
			}
			//Si no es multipo ni de 3 ni de 5
			else {
				System.out.println(i); //Se imprimirá el número i como tal en lugar de los String FizzBuzz, Fizz o Buzz
			}
		}
	}
}
