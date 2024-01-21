package ecommerce;

import java.util.ArrayList;
import java.util.List;

public class Ecommerce {

	static class Producto { // Esta es una clase para representar un producto
		String nombre;
		double precio;

		Producto(String nombre, double precio) {
			this.nombre = nombre;
			this.precio = precio;
		}// Función Producto
	}// static class Producto

	static class CarritoCompra {
		List<Producto> productos = new ArrayList<>();

		void agregarProducto(Producto barbie) {
			productos.add(barbie);
		}// agregarProducto

		double calcularTotal1() {
			double total = 0;
			for (Producto barbie : productos) {
				total += barbie.precio;
			} // for
			return total;
		}// Calcular total

	}// static class CarritoCompra

	public static void main(String[] args) {
		Producto muneca1 = new Producto("Chelsea", 98.70);
		Producto muneca2 = new Producto("Skipper", 85.40);

		CarritoCompra carrito = new CarritoCompra();

		carrito.agregarProducto(muneca1);
		carrito.agregarProducto(muneca2);

		double totalCarrito = carrito.calcularTotal1();

		System.out.println("Total del carrito: $" + totalCarrito);

	}// main

}// public class Ecommerce
