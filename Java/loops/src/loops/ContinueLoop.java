package loops;

public class ContinueLoop {

	public static void main(String[] args) {
		/*
		 * Instrucción de salto:
		 * continue-- Interrumpe la iteración del bucle, si procece una condición específica y continúa con la siguiente.
		 */
		
		//Con continue, ejecutando la sentencia condicional, pero cumpliendo la condición del bucle for.
		for (int cliente = 1; cliente <= 20; cliente++) {
			if (cliente == 5) {
				System.out.println("Cliente número " + cliente + " ¡ganaste!");
				continue;
			}
			
			System.out.println("Eres el cliente número " + cliente);
			
			}

	}

}
