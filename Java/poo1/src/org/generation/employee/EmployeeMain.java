package org.generation.employee;

public class EmployeeMain {
	public static void main(String[] args) {
		//Instanciar los objetos
		Employee Daniel = new Employee("Daniel", "Maldonado", 20352, 8596.33d, "Instructor");
		Employee Abigail = new Employee("Abigail", "Martinez", 20352, 19754.20d, "Frontend Dev");
		Employee Arturo = new Employee("Arturo", "Avila", 20352, 17999.62d, "Backend Dev");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		//Invocando métodos definidos poreviamente (trabajar, calcularSalario, capacitarse, infoGral
		Daniel.infoGral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		
		//Utilizar info expecífica de cada objeto mediante sus getters
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto());
		//Utilizar info expecífica de cada objeto mediante sus propiedades
		System.out.println(Abigail.puesto + " gana $" + Abigail.salario + " MXN");
		
		//Actualizando información mediante Setters
		Arturo.setSalario(25000d);
		Arturo.calcularSalario();
	}
}
