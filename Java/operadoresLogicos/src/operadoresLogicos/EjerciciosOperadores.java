package operadoresLogicos;

import java.util.Scanner;

public class EjerciciosOperadores {

	public static void main(String[] args) {
		
		
		/* OPERADORES LÓGICOS
		 && Operador And
		 || Operador or
		 !  Operador not		 
		 */
		
		//&& AND
		System.out.println("&& AND");
		int edad = 5;
		boolean esInfante = true;
		boolean constoInfante = edad <= 12 && esInfante;
		System.out.println("¿Es infante? " + constoInfante);
		
		
		String cliente = "Cliente00";
		String credenciales = "000";
		boolean credencialCorrecta = cliente.equalsIgnoreCase("Cliente00") && credenciales.equalsIgnoreCase("000");
		System.out.println("¿Las credenciales son correcetas? " + credencialCorrecta);
		
		
		// || OR
		System.out.println("|| OR");
		double constoPasaje = 380.5;
		int edad1 = 58;
		boolean inapam = false;
		boolean descuentoAdultoMayor = edad1 >= 60 || inapam;
		System.out.println("¿Tiene derecho a descuento? " + descuentoAdultoMayor);
		
		// ! NOT
		System.out.println("! NOT");
		boolean asientosDisponibles = true;
		boolean asientosDescuento = true;
		boolean tristeza = !(asientosDisponibles && asientosDescuento);
		System.out.println("¿Existe tristeza? " + tristeza);
		
		
		//Ejercicio:
		
		//Variables conocidas
		System.out.println("=Ejercicio=");
		int costoBoletoBus = 350;
		int asientosBus = 62;
		int asientosInapam = 4;
		int asientosEstudiante = 6;
		double porcentajeDescInapam = 0.35;
		double porcentajeDescEstudiante = 0.30;
		
		int asientosNormDisp = asientosBus - (asientosInapam + asientosEstudiante);
		
		//Entrada de datos
		/*
        Scanner scanner = new Scanner(System.in);
        System.out.print("Número total de boletos normales por comprar: ");
        if (scanner.nextInt() > boletosNormDisp) {
        	System.out.print("El número máximo de boletos normales es: " + boletosNormDisp + ". Ingrese un valor igual o menor este número");
        } else {
        	int numBoletos = scanner.nextInt();
        };

        System.out.print("¿Cuántos adultos mayores? ");
        int numAdultosMayores = scanner.nextInt();

        System.out.print("¿Cuántos estudiantes? ");
        int numEstudiantes = scanner.nextInt();

		*/
		int boletosNorm = 5;
		int boletosInapam = 1;
		int boletosEstud = 1;
		
		if (boletosNorm <= asientosNormDisp && boletosInapam <= asientosInapam && boletosEstud <= asientosEstudiante) {
			double total = boletosNorm * costoBoletoBus + boletosInapam * costoBoletoBus * (1 - porcentajeDescInapam) + boletosEstud * (1 - porcentajeDescEstudiante );
			System.out.println("El costo total por " + boletosNorm + " boleto(s) normal(es), " + boletosInapam + " boleto(s) de INAPAM y " + boletosEstud + " boleto(s) de estudiante es: $" + total);
		} else {System.out.println("Cantidad de boletos excedido");
		};
		
	}

}
