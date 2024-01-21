package org.generation.collections;

import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//************ ARRAYS *************** //
		String[] names = {"Ania", "Eveida", "Fernanda", "Liz", "Braulio", "Cesar", "Dante", "Pedro"};
		//Imprimiendo Arrays
		System.out.println(names);//Esto sólo me imprime"[Ljava.lang.String;@27f674d" en consola
		System.out.println(Arrays.toString(names)); //Así ya nos imprime "[Ania, Eveida, Fernanda, Liz, Cesar, Dante, Pedro]"
		
		int[] edades = {24, 23, 23, 24, 24, 25, 26};
		System.out.println(Arrays.toString(edades));
		
		
		//Acceder a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es "+name1);
		int edad1 = edades[0];
		System.out.println("La edad de " + name1 + " es " + edad1 + " años.");
		
		//Obtener la longitud del array
		int longitudNames = names.length;
		System.out.println("El array names tiene " + longitudNames + " elementos.");
		
		//Obtener el último elemento
		String ultimoElementoNames = names[longitudNames-1];
		System.out.println("El último elemento del Array names es " + ultimoElementoNames);
		
		//Mostrar cada elemento utilizando forEach
		for (String nombre : names) { //nombre es el valor de la variable para iterar, names es el nombre del array
			System.out.println(nombre);
		}
		
		//************ ArrayList ***************//
		//ArrayList es una array que puede cambiar de tamaño, es la clase de Java que representa la estructura de datos de arrays
		//Permite elemento duplicados y recibe varios métodos para su manipulación. 
		
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<>(); //Wrapper class
		ArrayList<Character> characters = new ArrayList<> ();
		
		//Agregar elementos
		films.add("Ready Player One");
		films.add("Maverick");
		films.add("El resplandor");
		films.add("John Wick");
		films.add("Rush Hour 3");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index)
		String film1 = films.get(0);
		System.out.println("La primer película es "+ film1);
		
		
		//Modificar un elemento: name.set(index, newVallue)
		String film2 = films.set(2, "Paul");
		String film2Get = films.get(2);
		System.out.println(film2Get);
		
		//Conocer el tamaño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList es de " + sizeFilms + " elementos");
		
		//Agregrar un elemento y después eliminarlo
		films.add("A man called Otto");
		System.out.println(films);
		
		films.remove(5);
		System.out.println(films);
		
		//Mostrando los elementos en lista
		System.out.println("***Films en lista***");
		for (String film : films) {
			System.out.println(film);
		}
		
		matricula.add(25253);
		characters.add('A');
		System.out.println(matricula);
		System.out.println(characters);
		
	}

}
