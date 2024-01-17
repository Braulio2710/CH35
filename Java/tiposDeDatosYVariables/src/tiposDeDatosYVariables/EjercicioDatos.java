package tiposDeDatosYVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
		
	
		System.out.println("Hola, mundo.");
		
		/*Comentarios
		 * multilínea
		 */
		
		//Comentarios de una sola línea
		
		//-- TIPOS DE VARIABLES DE NÚMS. ENTEROS --
		
		byte edad = 27; //núm. entero entre -128 ~ 127 (8 bits).
		System.out.println("Edad del particicpante " + edad);
		
		short usuariosNuevos = 200; //núm. entero entre -32768 ~ 32767 (16 bits).
		System.out.println("Hay " + usuariosNuevos + " usuarios nuevos");
		
		int usuariosTotales = 8752 + usuariosNuevos; //núm. entero entre -2,147,483,647 ~ 2,147,483,647 (32 bits)
		System.out.println("Hay " + usuariosTotales + " usuarios en total");
		
		long usuariosPremium = 9515; //núm. entero entre -9223372036854 ~ 9223372036854.
		System.out.println("Usuarios premium: " + usuariosPremium);
		
		
		//-- TIPOS DE DATOS CON NÚMERO DECIMALES
		
		float altura = 1.75f; //Núms. con hasta 6 decimales. Deben llevar una "f" al final del valor para que no marque error (32 bits)
		System.out.println("Núm. flotante: Altura de usuario = " + altura + "m");
		
		double peso = 70.8; //Nums. con hasta 15 decimales (64 btis)
		System.out.println("Núm. flotante: peso de usuario = " + peso + "kg");
		
		//--Cadena de texto
		String costoBoleto = "500";
		String zonaBoleto = "52";
		System.out.println("Nombre de usuario: "+ costoBoleto);
		
		//--Tipo char
		
		char seccion = 'f';
		System.out.println("Sección: "+seccion);
		
		//--BOOLEANO
		boolean clienteFrecuente = true;
		System.out.println("¿El cliente es un cliente frecuente? " + clienteFrecuente);
		
		
		//--Conversión de tipos
		//Casteo a entero
		int pesoCambio = (int)peso;
		
		//Casteo a entero
		long pesoCambio1 = (long)peso;
		
		System.out.println("double " + peso);
		System.out.println("int "+pesoCambio);
		System.out.println("long "+pesoCambio1);
		
		int costoBoletoCambio = Integer.parseInt(costoBoleto);
		double zonaBoletoCambio = Double.parseDouble(zonaBoleto);
		System.out.println("Zona del usuario según su boleto " + (costoBoletoCambio * zonaBoletoCambio));
		
		
		/* Operadores aritméticos
		 + suma
		 - resta
		 * multiplicación
		 / división
		 % residuo
		 */
		
		/*Operadores de comparación
		 == compara si un objeto es igual a otro
		 != si es diferente a otro
		 < menor que
		 > mayor que
		 <= menor o igual
		 >= mayor o igual
		 */
		
		
		//Ejercicio
		
		int numSalas = 10;
		int asientosPorSala = 500;
		double precioBoleto = 75.5;
		double precioPalomitas = 89.7;
		double precioBebidas = 35.5;
		
		int personasAdentro = 342;
		
		if (personasAdentro >= asientosPorSala) {
			System.out.println("Lo lamento, ya no hay asientos disponibles");
		}
		
		double ventaTotalBoletos = precioBoleto * personasAdentro;
		double ventaTotalPalomitas = precioPalomitas * personasAdentro;
		double ventaTotalBebidas = precioBebidas * personasAdentro;
		
		System.out.println("Total de personas " + personasAdentro);
		System.out.println("Ingresos por venta de boletos $" + ventaTotalBoletos + " MXN");
		System.out.println("Ingresos por venta de palomitas $" + ventaTotalPalomitas + " MXN");
		System.out.println("Ingresos por venta de bebidas $" + ventaTotalBebidas + " MXN");
		
		
		
	}

}
