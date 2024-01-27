package mangosNaranjas;

import java.util.Scanner;

public class MangosNaranjasMain {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
			System.out.print("Ingrese el número de mangos: ");  // Solicitar al usuario que ingrese el número de mangos
			int numeroMangos = scanner.nextInt();  // Leer el número de mangos desde la consola

			System.out.print("Ingrese el número de naranjas: ");  // Solicitar al usuario que ingrese el número de naranjas
			int numeroNaranjas = scanner.nextInt();  // Leer el número de naranjas desde la consola

			MangosNaranjas cajas = new MangosNaranjas(numeroMangos, numeroNaranjas);  // Crear un objeto MangosNaranjas con la entrada del usuario
			cajas.imprimir();  // Llamar al método imprimir para mostrar los resultados
		}
    }
}
