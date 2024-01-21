package org.generation.exercises;

import java.util.ArrayList;
import java.util.Scanner;

/*
Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
* -- Requerimientos:
* 	> Utiliar ArrayList para guardar a los estudiantes
* 	> Scanner para interactuar con el usuario y permitir agregar estudiantes
* 	> Loop para permitir que se agreguen n cantidad de estudiantes (do-while)
* 	> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, != (≠), switch; son posibles opciones)
* 	> Mostrar lista de estudiantes con un (for-each)
* 	> 
 */

public class SistemaEscolar {
	public static void main(String[] args) {
		//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String> ();
		
		//Scanner para interactuar con el usuario y permitir agregar estudiantes
		Scanner scr = new Scanner(System.in);
		
		//Loop para permitir agregar estudiantes
		String nombreEstudiante;//Inicializado de manera global
		do {
			System.out.println("Ingresa el nombre del estudante. Esbribe 'Salir' para finalizar:");
			nombreEstudiante = scr.nextLine();//Invocado de manera local
			estudiantes.add(nombreEstudiante); //Se guarda el valor en el array estudiantes
		} while(!nombreEstudiante.equalsIgnoreCase("Salir"));//Siempre que NO (!) se escriba "Salir" el loop se sigue ejecutando
		
		//Mostrar lista de estudiantes:
		System.out.println("** Lista de estudiantes:");
		for (String estudiante : estudiantes) {
			//Si no quiero que se muestre la palabra 'Salir' voy a  agregar una condicional sobre la variable que guarda a los elementos que iteran sobre el ArrayList
			if(!estudiante.equalsIgnoreCase("Salir")) {
			System.out.println(estudiante);
			//if(!nombreEstudiante.equals("Salir")) {
			//estudiantes.add(nombreEstudiante);
			}
		}
		System.out.println(estudiantes);
		
		scr.close();
		
		/*
		 * Modificar nuestro programa para que permita salir con la palabra 'Salir' o 'Salir'
		 * Agregar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove);
		 */
		
		
		
	}

}
