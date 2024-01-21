package org.generation.collections;

import java.util.HashSet;

public class HashSetCollection {
	public static void main(String[] args) {
		//HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Perry");
		animals.add("Cebra");
		animals.add("Mapache");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Conocer si un elemento se encuentra dentro del Set: contains();
		System.out.println(animals.contains("Capibara"));
		
		//Eliminar un elemento: remove();
		animals.remove("Perry");//Elimino el elemento Perry
		System.out.println(animals);//Imprimo el Set sin el elemento eliminado
		
		/*
		 * La clase HashSet no va a garantizar que los elementos se muestren en el orden en que se escribieron, ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas Hash para almacenar los elementos y mostrarlos al usuario.
		 */
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
		
		
		
		
		
	}

}
