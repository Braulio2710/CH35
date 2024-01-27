package codigo5;

import java.util.Scanner;

public class Codigo5 {
	public static void main(String[] args) {//se agreó la public static void main

	    Scanner s = new Scanner(System.in);//Se importa Scanner y se anota System.in
	    System.out.println("Introduzca un número en el rango de –2,147,483,648 a 2,147,483,647... aunque te recomiendo que sea 2710: "); //falta ln y cerrar con comillas dobles, además modifiqué el mensaje mostrado al usuario para que sepa el rango de números admisibles 
	    String ni = s.nextLine();
	    int c = Integer.parseInt(ni);//Se agrega el .parseInt() para convertir el String a int
	    
	    //Declaración de variables para número afortunado y noAfortunado
	    int afo = 0;
	    int noAfo = 0;
	    
	    // Se debe usar la condición ni.length() para verificar la longitud del String no solo ni>0
        for (int i = 0; i < ni.length(); i++) {
            int digito = i; //se almacena el valor de i para cada ciclo en la int digito
	      if ((digito == 2) || (digito == 7) || (digito == 1) || (digito == 0)) {
			afo++;//Si es afortunado el valor de afo incrementa en 1
	      } else {
			noAfo++; //Si no es afortunado el valor de noAfo se incrementa en 1
	    }
	    }
        if (afo > noAfo) {//Si fue afortunado, el valor de afo será mayor al de noAfo, por lo tanto será afortunado
        	System.out.println("El " + c + " es un número afortunado.");//prinln -> println
        } else {
        	System.out.println("El " + c + " no es un número afortunado.");//Si no, será desafortunado
	    
	  }
	  
	}
}//Faltaba una llave