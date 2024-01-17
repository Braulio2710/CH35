package loops;
import java.util.Scanner;

public class WhileLoop {

	public static void main(String[] args) {
		/*
		 * El ciclo WHILE ejecuta un bloque de código mientras se siga cumpliendo una condicón dada
		 * 
		 * while(expresión){
		 * bloque de código por ejecutar
		 * (contador/iterador)
		 * }
		 */
		
		int cuenta = 0;
		while (cuenta < 5) {
			cuenta ++;
			System.out.println("La cuenta es de: " + cuenta);
		}
		
		/*Crear un programa que solicite al usuario un número. Dicho número será tomado como el número final de una cuenta. Dicha cuenta inicia en 1. Debe mostrar en consola la cuenta del 1 hasta el número proporcionado.
		1. Importar un scanner e implementarlo
		2. Un mensaje para darle contexto al usuario
		3. Almacenar el número del usuario en una variable.
		4. Guardar en variable el número que iniciar la cuenta (1)
		5. Implementar un ciclo While
		6. Mostrar por consola el resultado.		
		*/
		
		//1.
		Scanner sc = new Scanner(System.in);
		//2.
		System.out.println("Escribe un número: ");
		//3.
		int numFinal = sc.nextInt();
		//4.
		int numInicial = 1;
		//5.
		while (numInicial <= numFinal) {
			System.out.println("La cuenta va en: " + numInicial);
			numInicial++;
		}
		sc.close();
		
		
	}//metodo

}//clase
