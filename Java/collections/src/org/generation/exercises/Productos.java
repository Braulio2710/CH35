package org.generation.exercises;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Productos {
	public static void main (String[] args) {
		/*
		 * Crear un programa que le permita al usuario agregar un ID del producto y el nombre del producto.
		 * Mostrar la lista de productos.
		 */
		//Inicializar el HashMap
		HashMap<String, String> productos = new HashMap<String, String>();
		//Agregar elementos con su clave y ID, solicititándolos al usuario mediante un Scanner:
		Scanner scr = new Scanner(System.in);
		String nombreProducto = null;
		String idProducto = null;
		System.out.println("Bienvenido, vamos a crear una lista de productos con nombre y ID:");
		do {
			System.out.println("Ingresa el nombre del producto.");
				nombreProducto = scr.nextLine();
			
			System.out.println("Ingresa el ID del producto.");
				idProducto = scr.nextLine();
				if (!nombreProducto.equalsIgnoreCase("Salir") && !idProducto.equalsIgnoreCase("Salir") && !nombreProducto.equalsIgnoreCase("") && !idProducto.equalsIgnoreCase("") ) {
				productos.put(nombreProducto, idProducto);
			
				System.out.println("Presione 'enter' para continuar agregando nuevos productos o ingrese 'Salir' para finalizar.");
				} else {
					System.out.println("Presione 'enter' para continuar agregando nuevos productos o ingrese 'Salir' para finalizar.");
					continue;
				}
			
		} while(!scr.nextLine().equalsIgnoreCase("Salir"));
		
		/*
		 * do {
			System.out.println("Ingresa el nombre del producto.");
			if (!scr.nextLine().equalsIgnoreCase("Salir")) {
			nombreProducto = scr.nextLine();
			} else {
				System.out.println("Finalizado");
				break;
			}
			
			System.out.println("Ingresa el ID del producto.");
			if (!scr.nextLine().equalsIgnoreCase("Salir")) {
				idProducto = scr.nextLine();
				productos.put(nombreProducto, idProducto);
			} else {
				System.out.println("Finalizado");
				break;
			}
			
			System.out.println("Continue ingresando nombre y ID de nuevos productos o ingrese 'Salir' para finalizar.");
			
			
		} while(!nombreProducto.equalsIgnoreCase("Salir") || !idProducto.equalsIgnoreCase("Salir"));
		 */
		
		//Mostrar lista de productos
		System.out.println("Lista de productos creada:");
		for (Map.Entry<String, String> entry: productos.entrySet()) {
			System.out.println("Nombre del producto: " + entry.getKey() + "; ID del producto: " + entry.getValue());
		}
		
		//Cerrar escaner 'scr'
		scr.close();
		
		
		
		
		
	}//main

}
