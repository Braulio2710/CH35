//Braulio Santiago Esquivel (3/5)

package codigo6;
import java.util.Scanner;//Se importa el escaner

public class codigo6 {

    public static void main(String[] args) {
        int[] n = new int[20];//Se agrega new antes de int[20]
        
        //Función para generar 20 numeros aleaotios, cada uno de estos numeros de multiplica por 381 y se le suma 20.
        for (int i = 0; i < 20; i++) {
            n[i] = (int) (Math.random() * 381) + 20;//el resultado de cada operación se va añadiendo a un nuevo elemento en el array n
            System.out.print(n[i] + " ");//Se imprimen en la misma linea
        }

        System.out.println("\n¿Qué números quiere resaltar? ");//decía printl en lugar de println
        System.out.print("(1: los múltiplos de 5 o 2:los múltiplos de 7): ");//Se modifica el texto para que sea más entendible para el usuario

        Scanner scanner = new Scanner(System.in);//Se agrega un escáner para que el usuario pueda decidir qué numeros desea resaltar
        int opcion = scanner.nextInt();//Se guarda el número introducido por el usuario en la int opcion

        int multiplo = (opcion == 1) ? 5 : 7; //Este código se traduce como: si (opcion == 1) = true entonces múltiplo vale 5, de lo contrario vale 7 por lo tanto aunque el usuario ingrese un 2 o cualquier otro número se tomará multiplo=7

        for (int e : n) {//e itera en cada elemento del array n
            if (e % multiplo == 0) {//Si el valor que tomó e es multiplo del valor que almacena multiplo, entonces se imprime nuevamente el array pero con este valor etre corchetes para destacarlo
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " ");//de lo contrario lo impreme sin destacarlo
            }
        }
    }
}