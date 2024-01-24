package org.generation.iterable;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;


public class IterableMain {
	public static void main(String[] args) {
		//Podemos iterar sobre una colección de 3 maneras:
		//1. Iteración mediante un ciclo for-each
		System.out.println("*****Método for-each*****");
		List<String> nombres = new ArrayList<String>(); //List es una interface, contiene varias clases, por ejemplo, ArrayList e LinkedList. Si yo pusiera ArrayList al incio de la línea, y decido cambiar de Array a Linked, tendría que cambiar también el inicio de la línea, si uso List no necesito modificarla al inicio porque List ya contiene a Arrray y Linked lists
		
		nombres.addAll(Arrays.asList("Braulio", "Fernanda", "Rodrigo", "Ruben", "Marco", "Rey"));
		
		for (String nombre : nombres) {
			System.out.println(nombre);
		}
		
		//2. Iterar mediante Iterator.
		System.out.println("*****Método iterator*****");
		List<String> apellidos = new ArrayList<String>();
		apellidos.addAll(Arrays.asList("Aleman", "Garcia", "Martinez", "Cardoso", "Razo", "Ceja"));
		
		//Utilizar un nuevo Iterador y le vamos a pasar el método iterator() a neustro ArrayList
		Iterator<String> iterador = apellidos.iterator();
		
		//Utilizando while, devuelve verdadero si la iteracipon tiene más elementos, si no, se termina el ciclo
		while(iterador.hasNext()) {
			String elemento = iterador.next();
			System.out.println(elemento);
		}
		
		//3.Mediante forEach que toma una expresión Java Lambda como parámetro
		System.out.println("*****Método Lambda*****");
		List<String> animales = new ArrayList<String>();
		animales.addAll(Arrays.asList("Cuyo", "Hámster", "Gorrión", "Tordo", "Buteo Jamaicensis", "Parabuteo Unicinctus"));
		animales.forEach((animal) -> {
			System.out.println(animal);
		});
	}
}
