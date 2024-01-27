//Braulio Santiago Esquivel (3/5)

package mangosNaranjas;

class MangosNaranjas {
	//Declaración de variables
    private int mangos;
    private int naranjas; 
    
    
    //Constructor para objetos mangos y naranjas
    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;  // Inicializar la variable de mangos con el valor proporcionado al constructor
        this.naranjas = naranjas;  // Inicializar la variable de naranjas con el valor proporcionado al constructor
    }
    
    //Función para calcular el Máxico Común Divisor entre la cantidad de mangos y naranjas
    private int calcularMCD(int a, int b) {
        // Método para calcular el MCD utilizando el algoritmo de Euclides
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    public void imprimir() {
        int mcd = calcularMCD(mangos, naranjas);  // Calcular el MCD de mangos y naranjas y guardarlo en int mcd
        int cajas = mcd;  // El número de cajas será el MCD de mangos y naranjas. Se podría dejar directo como int cajas = calcularMCD(mangos, naranjas)

        int mangosPorCaja = mangos / cajas;  // Calcular la cantidad de mangos por caja
        int naranjasPorCaja = naranjas / cajas;  // Calcular la cantidad de naranjas por caja
        
        //Imprimir resultados
        System.out.println("El número de cajas es: " + cajas);  // Imprime el número de cajas
        System.out.println("El número de mangos en una caja es: " + mangosPorCaja);  // Imprime la cantidad de mangos por caja
        System.out.println("El número de naranjas en una caja es: " + naranjasPorCaja);  // Imprime la cantidad de naranjas por caja
    }
}

