package org.generation.banco;

/*
 * En Cajero se instancia el objeto de tipo CuentaBancaria y se invocan los métodos definidos
 * Aquí sí se pueden establecer los try-catch de la excepción que se definió en el método retirar
 * Los resultados se muestran en consola
 */
public class Cajero {
	public static void main(String[] args) {
		CuentaBancaria cuentaBraulio = new CuentaBancaria (4152);//Cuenta bancaria con su idCuenta. PENDIENTE MEJORAR para que sea ingresado por el usuario con un scanner
		
		//Simulamos que tenemos un scanner y el cliente introduce el monto
		System.out.println("Depositando $500 MXN");
		cuentaBraulio.depositar(500);
		
		//Revisar si se actualiza el saldo (debe haber $500)
		System.out.println("El nuevo saldo es de: " + cuentaBraulio.getSaldo());
		
		//Retirar dinero
		try {
			//Simulando ingreso de monto con scanner
			System.out.println("Retirando $300 MXN");
			cuentaBraulio.retirar(300);
			System.out.println("El nuevo saldo es de: " + cuentaBraulio.getSaldo());//deben quedar $200
			
			System.out.println("Retirando $200 MXN");
			cuentaBraulio.retirar(200);
			System.out.println("El nuevo saldo es de: " + cuentaBraulio.getSaldo());//output $0
			
			System.out.println("Retirando $200 MXN");
			cuentaBraulio.retirar(200);
			System.out.println("El nuevo saldo es de: " + cuentaBraulio.getSaldo());//output: excepción
		} catch (FondosInsuficientesExcepcion e) {
			System.out.println("\u001B[31mLo siento, te falta(n): $\u001B[31m" + e.getMonto()+"MXN");
			e.printStackTrace(); //Método de excepciones que imrime el seguimiento del flujo de la excepcion
		}
	}
}

/*
 * Atajos para System.out.println();
 * syso ctrl+space
 * sysout ctrl+space
 */