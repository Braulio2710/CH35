package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {
	public static void main(String[] args) { //SORRY :C JAJA
		
	
	//Invocamos el método de tipo static mediante su clase y no mediante la instancia de un objeto
	int suma1 = Suma.sumar(8, 5);
	double suma2 = Suma.sumar(4.3, 6.26);
	
	
	//*********BigDecimal***********
	//Para imprimir BigDecimal, debemos guardar los valores de los parámetros en objetos de tipo BigDecimal y asignarlos como argumentos de String de cada nueva instancia
	BigDecimal num1 = new BigDecimal ("4.3");//Primer objeto instanciado
	BigDecimal num2 = new BigDecimal ("6.26");//Segundo objeto instanciado
	
	//Mando a llamar los objetos instanciados de Bigecimal como los parámetros de método
	BigDecimal suma3 = Suma.sumar(num1, num2);
	
	
	//Imprimir en consola:
	System.out.println("La suma de enteros me da " + suma1);
	System.out.println("La suma de decimales me da "+ suma2);//nos da 10.559999999999999
	System.out.println("El resultado exacto de la suma con decimales es: " + suma3);//Ahora sí no da 10.56
	
	
	}
}
