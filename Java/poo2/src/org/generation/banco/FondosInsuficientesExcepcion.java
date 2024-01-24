package org.generation.banco;

//En esta clase se definen métodos que arrojan excepciones, siempre que en la clase Cajero se dispare dicha excepción
/*
* Requerimientos
* 		1. Trabajar bajo el paradigma POO
* 		2. Indicar que la calse es una EXCEPCIÓN
* 		3. Crear variables y métodos para instanciar objetos
* 		4. Encapsular 
*/
public class FondosInsuficientesExcepcion extends Exception {//FondosInsuficientesExcepcion hereda (extends) de la clase Exception
	private static final long serialVersionUID = 1L;//No es necesaria, pero es buena práctica asignarla

	//Atributos
	private double monto;

	//Constructor
	//generamos desde source: Generate constructor using fields...
	public FondosInsuficientesExcepcion(double monto) { 
		this.monto = monto;
	}

	//Generamos Getter y Setter desde source
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
	
	
	
}
