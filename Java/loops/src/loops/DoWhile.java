package loops;
import java.util.Scanner;

public class DoWhile {

	public static void main(String[] args) {
		/*
		 * Ciclo DO-WHILE evalúa la expresión en la parte inferior del ciclo.
		 * Por lo tanto, las declaraciones dentro del bloque siempre se ejecutan al menos una vez.
		 */
		
		//Cuenta del 1 al 5
		int cuenta = 6;
		do {
			System.out.println(cuenta);
			cuenta ++;
		} while (cuenta < 0); { //El Output 1 ya que ya se ejecutó al menos una vez
			
		}
		
		
		
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		System.out.println("Bienvenido al cajero BBVA, elige una de las siguientes opciones:");
		System.out.println("1. Consultar saldo");
		System.out.println("2. Ingresar dinero");
		System.out.println("3. Retirar dinero");
		System.out.println("4. Salir");
		//Scanner
		Scanner scr = new Scanner (System.in);
		//Solicitud de datos
		System.out.println("Ingresando el numero correspondiente: ");
		int opcion ;
		do {
			opcion = scr.nextInt();
			
			switch (opcion) {
			case 1: System.out.println("Elegiste: Consultar saldo.");
				break;
			case 2: System.out.println("Elegiste: Ingresar dinero.");
				break;
			case 3: System.out.println("Elegiste: Retirar dinero.");
				break;
			case 4: System.out.println("Elegiste: Salir.");
			break;
			default:
				System.out.println("Por favor elige una opcion valida del 1 al 5: ");
				break;
			}
		} while (opcion != 4);
			
		scr.close();
		

	}//metodo

}//clase
