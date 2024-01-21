package controlFlujo;
import java.util.Scanner;

public class FlujoControl {

	public static void main(String[] args) { //Debe coincidir la clase con el nombre del documento / proyecto
		//Recuerda que para que algo se ejecute, siempre debe ir en el método principal.
		
		//1. Definir una variable de tipo string
		/* String viaje = "16-01-2024";//valor nulo para tener un espacio en memoria asignado y sólo remplazarlo después con el dato.
		
		//2.Validar si podemos viajar en cierta fecha
		if (viaje != null) {
			System.out.println("Ya no tenemos fechas disponibles, disculpa.");
		} else {
			System.out.println("Puede reservar un viaje");
		} */
		
		
		/*
		//Validación de contraseña
		Scanner scanner1 = new Scanner (System.in); //el scanner puede llamarse como queramos, en este caso "sacanner1"
		
		//Solicitar la primer contraseña
		System.out.print("Ingrese la contraseña: ");
		String contraseña1 = scanner1.nextLine();
		
		//Solicitar la segunda contraseña
		System.out.print("Confirma la contraseña: ");
		String contraseña2 = scanner1.nextLine();
		
		//Verificar si las contraseñas son iguales
		if (contraseña1.equals(contraseña2)) {
			System.out.println("Las contraseñas coinciden, acceso permitido.");
		} else {
			System.out.println("Las contraseñas no coinciden. acceso denegado.");
		}
		
		//Cierre del scanner
		scanner1.close();
		*/
		
		////////////////////////////////////////////////////////////////////////////
		//Switch para seleccionar comida de la dulcería del cine
		/*
		//1. Declaración de variables
		Scanner scrCine = new Scanner (System.in);
		int menu = 1;
		
		//2. Creaer un menú
		
		System.out.println("Bienvenido, ¿qué deseas ordenar?");
		System.out.println("1. Palomitas");
		System.out.println("2. Nachos");
		System.out.println("3. Refresco");
		System.out.println("4. Hotdog");
		//System.out.println("5. Pagar");
		//System.out.println("No contamos con eso en nuestro menú, por favor, seleccione una de la opciones mostradas.");
		
		
		
		switch (menu) {
		case 1:
			System.out.println("Se ha agregado un paquete de palomitas a la cuenta.");
			//Aquí agregamos break para que no se ejecute el resto de la secuencia
			break;
		case 2:
			System.out.println("Se ha agregado un paquete de nachos a la cuenta.");			break;
		case 3:
			System.out.println("Se ha agregado un refresco a la cuenta.");			break;
		case 4:
			System.out.println("Se ha agregado un hotdog a la cuenta.");			break;
		case 5:
			System.out.println("Proceda a pagar.");			break;
		default:
			System.out.println("No contamos con eso en nuestro menú, por favor, seleccione una de la opciones mostradas.");
			break;
		}//Switch
		*/
		/*
		//Ejercicio 1:
		Scanner scanner = new Scanner(System.in);

        System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
        System.out.println("1. Palomitas");
        System.out.println("2. Refresco");
        System.out.println("3. Nachos");
        System.out.println("4. Hot-dog");
        System.out.println("5. Pagar");

        System.out.println("Ingrese una opcion de 1 al 5: ");	
        int menu = scanner.nextInt();
        
        
        switch (menu) {
            case 1:
                System.out.println("Usted ha agregado Palomitas a su cuenta");
                // Aquí se agregó una opción y mensaje.
                break;
            case 2:
                System.out.println("Usted ha agregado Refresco a su cuenta");
                break;
            case 3:
                System.out.println("Usted ha agregado Nachos a su cuenta");
                break;
            case 4:
                System.out.println("Usted ha agregado Hot-dog a su cuenta");
                break;
            case 5:
                System.out.println("Usted ha seleccionado pagar su cuenta");
                break;
            default:
                System.out.println("Por el momento no contamos con esa opción en nuestro menú, lo invitamos a seleccionar una opción válida");
                break;
        }

        // Close the Scanner to avoid resource leak
        scanner.close();
		*/
        
        //Ejercicio 2:
        Scanner scanner = new Scanner(System.in);
		
		System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
        System.out.println("1. Palomitas");
        System.out.println("2. Refresco");
        System.out.println("3. Nachos");
        System.out.println("4. Hot-dog");
        System.out.println("5. Pagar");
        System.out.println("Ingrese las opciones entre 1 y 5 que desea ordenar separadas por enter o espacio, al finalizar digite '5': ");	
        

        int total = 0;
        String orderList = "";

        while (true) {
            int menu = scanner.nextInt();

            if (menu >= 1 && menu <= 5) {
                switch (menu) {
                    case 1:
                        orderList += "Palomitas, ";
                        total += 50; // Adjust the price accordingly
                        break;
                    case 2:
                        orderList += "Refresco, ";
                        total += 50; // Adjust the price accordingly
                        break;
                    case 3:
                        orderList += "Nachos, ";
                        total += 50; // Adjust the price accordingly
                        break;
                    case 4:
                        orderList += "Hot-dog, ";
                        total += 45; // Adjust the price accordingly
                        break;
                    case 5:
                        System.out.println("Usted ha seleccionado pagar su combo");
                        break;
                }

                if (menu == 5) {
                    break; // Exit the loop when the user chooses to pay
                }
            } else {
                System.out.println("Por favor, seleccione una opción válida (1-5).");
            }
        }

        System.out.println("Usted ha ordenado: " + orderList.substring(0, orderList.length() - 2)); // Remove the trailing comma
        System.out.println("El total a pagar es: $" + total);

        // Close the Scanner to avoid resource leak
        scanner.close();
        
        
        

	} //main

}//class
