package loops;

public class DoWhile {

	public static void main(String[] args) {
		/*
		 * Ciclo DO-WHILE evalúa la expresión en la parte inferior del ciclo.
		 * Por lo tanto, las declaraciones dentro del bloque siempre se ejecutan al menos una vez.
		 */
		
		//Cuenta del 1 al 5
		int cuenta = 1;
		do {
			System.out.println(cuenta);
			cuenta ++;
		} while (cuenta < 0); { //El Output 1 ya que ya se ejecutó al menos una vez
			
		}

	}//metodo

}//clase
