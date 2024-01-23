package org.generation.letras;

import java.util.Scanner;

/*
 * Crear un programa que le solicite un mensaje al usuario y cuente cuántas vocales, consonantes, números y símbolos posee dicho mensaje.
 * 	Letras: métodos para interacturar con el usuario
 * 	LetrasMain: instanciar los objetos
 * 	Contador: métodos para contar vocales, consonantes, números y símbolos.
 */

public class Letras {
	//Para que nuestro usuario interectue, definimos un Scanner:
	Scanner scr = new Scanner(System.in);
	
	//Metemos el scanner dentro de un método:
	public String leerEntrada() {
		return scr.nextLine();
	}
	
	//Método para proporcionar una indicación al usuario:
	public void mostrarMensaje (String mensaje) {
		System.out.println(mensaje);
	}
}
