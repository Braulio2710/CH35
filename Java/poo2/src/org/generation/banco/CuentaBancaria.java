package org.generation.banco;

/*
 * En esta clase se definen los métodos para disparar las excepciones, es decir, el try-catch. Se ejecuta el try-catch
 * Se definen otros métodos como: depositar dinero, retirar dinero, etc.
 * 	Requerimientos:
 * 		- Trabajar bajo POO
 * 		- Encapsular (modificdores, getters y setters)
 * 		- Crear variables y métodos para instanciar objetos
 */

public class CuentaBancaria {
	private double saldo;
	//Podemos agregar más variables como: nombre del cliente, RFC, etc...
	private int idCuenta;
	
	//Constructor que recibe solamente el atributo número
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	//Método para depositar dinero
	public void depositar (double monto) {
		saldo += monto; //+= es lo mismo que: saldo = saldo + monto
	}
	
	/*Método para retirar dinero
	 * Verificar si el monto a retirar es menor o igual al saldo actual
	 * 	Se puede retirar el monto solicitado
	 * 	No se puede retirar y calculamos cuánto dinero falta para completar la operación
	 */
	public void retirar (double monto) throws FondosInsuficientesExcepcion {
		if (monto <= saldo) {
			saldo -= monto;
		} else {
			double faltante = monto - saldo;
			//Crear la instancia de la clase FondosInsuficientesExcepcion con las palabras reservadas throw new e- Y le pasamos el parámetro correspondiente a la variable que dispara la excepción
			throw new FondosInsuficientesExcepcion(faltante);//Esto nos marca un error porque queremos instanciar de manera local y no lo encuentra, para ello necesitamos "heredarlo" como parte del encabezado del método con la palabra reservada throws y el nombre de la excepción.
		}
	}
	
	//Getters y Setters
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	
}
