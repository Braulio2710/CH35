package org.generation.letras;

public class LetrasMain {
	public static void main(String[] args) {
		//Instanciar objetos (Letras y Contador) a raíz de las clases
		Letras letras = new Letras();
		letras.mostrarMensaje("Hola, escribe un texto y te mostraré el número de vocales, consonantes, número y símbolos que contiene.");
		String palabra = letras.leerEntrada();//Aquí se guarda el texto intriducido en una variable de tipo String
			
		//Invocar los métodos que me permiten contar los caracteres
		Contador contador = new Contador();
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocal(es).");
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " número(s).");
		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay " + totalConsonantes + " consonante(s).");
		int totalSimbolos = contador.contarSimbolos(palabra);
		System.out.println("Hay " + totalSimbolos + " símbolo(s).");
		
	}
}
