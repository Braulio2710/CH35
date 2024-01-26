package org.generation.employee;

public class EmployeeMain {
	public static void main(String[] args) {
		//Instanciar los objetos
		Employee Rocio = new Employee("Rocio Hernández", 42013, 12000d ,"Desarrollador Frontend");
		Employee Rene = new Employee("René Gómez", 97565, 15499d , "Desarrollador Backend");
		Employee Diego = new Employee("Diego González", 0054, 25120.52d , "Desarrollador móvil");
		
		//Invocando métodos definidos poreviamente (trabajar, calcularSalario, capacitarse, infoGral
		Rocio.trabajar();
		Rene.capacitarse();
		Diego.calcularSalario();
		Rene.infoGral();
	
		
		//Utilizar info expecífica de cada objeto mediante sus getters
		System.out.println(Rocio.getNombreCompleto() + " ocupa el puesto de " + Rocio.getPuesto());
		//Utilizar info expecífica de cada objeto mediante sus propiedades
		//System.out.println(Diego.Puesto() + " gana $" + Diego.salario + " MXN");
		
		//Actualizando información mediante Setters
		//Arturo.setSalario(25000d);
		//Arturo.calcularSalario();
	}
}
