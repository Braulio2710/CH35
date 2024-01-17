package loops;

public class ForLoop {

	public static void main(String[] args) {
		/* 
		 * El ciclo FOR nos proporciona una forma compacta de iterar sobre valores.
		 * for (inicialización de variables; condición; contador
		 * 
		 * (incremento/decremento){
		 * bloque de código
		 * }
		 */
		
		//for con variable local
		for (int numero = -1; numero <= 10; numero++) {
			System.out.println("Número es igual a " + numero);
		}
		
		//for con variable global
		int contador = 1;
		for (contador = 1; contador <=5; contador++) {
			System.out.println("La cuenta es: " + contador);
		}
		
		//bucles anidados (esto es: un bucle dentro de otro bucle)
		//Ejemplo: imprimir un triángulo con asteríscos:
		int filas = 5;
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j <= i; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
		
	}//método

}//clase
