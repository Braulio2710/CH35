package ecommerce;

import java.util.Scanner;

public class FunciónDescuento {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner (System.in);
		System.out.println("Ingrese el costo del producto: ");
		double precioProducto = scanner.nextDouble();
		
		double porcentajeDescuento = 15; //obtener el porcentaje de descuento
		double descuento = calcularDescuento (precioProducto, porcentajeDescuento);
		
		double porcentajeImpuesto = 3; //obtener el porcentaje de impuesto
		double impuesto = calcularImpuesto (precioProducto, porcentajeImpuesto);
		
		double total = calcularTotal (precioProducto, descuento, impuesto);//calcular el total
		
		//double total1 = redondear(total,2);
		
		System.out.println("Precio del producto:  $"+precioProducto);
		System.out.println("Descuento aplicado al producto: $"+descuento);
		System.out.println("Impuesto aplicado al producto: $"+impuesto);
		System.out.println("Costo total del producto: $"+total);
		
		
		
	}
	
	static double calcularDescuento (double precio, double porcentajeDescuento) { //función para calcular el descuento
	return (precio * porcentajeDescuento / 100);
	}
	
	static double calcularImpuesto (double precio, double porcentajeImpuesto) { //función para calcular el impuesto
		return (precio * porcentajeImpuesto / 100);
	}
	
	static double calcularTotal (double precioProducto, double descuento, double impuesto) { //función para calcular el descuento
		return (precioProducto - descuento + impuesto );
	}
	
	static double redondear (double valor, int decimales) {//función para redondear
		double factor =Math.hypot(10, 2);
		return Math.round(valor*factor) / factor;
	}
	
}

/*La refactorización es restrucuturar código que ya existe sin alterar su comportamiento.
 * Tiene como objetivo mejorar la legibilidad, mantenibilidad y optimización del código*/
