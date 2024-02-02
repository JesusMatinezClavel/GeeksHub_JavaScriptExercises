
// // Reto 01
// // 1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
// // dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
// // funciona.


// var num1 = 5
// var num2 = 5

// num1==num2
//     ? console.log("iguales")
//     : num1>num2
//         ? console.log("1 mayor")
//         : console.log("2 mayor")


// // Reto 02
// // 2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
// // por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.


// var nombre="Chuso"



// // Reto 03
// // 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
// (recuerda usar prompt).

// var nombre=prompt("introduce tu nombre")

// console.log(nombre)


// Reto04
// 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
// (recuerda pasar de String a double con parseDouble). Usa la constante PI.

// const pi=3.14

// var radio = parseInt(prompt("dime un radio7"))

// var area = pi*radio**2

// console.log(area)


// Reto 05
// 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
// debemos indicarlo.

// var numero=parseInt(prompt("introduce un número"))

// if (numero%2==04) {
//     console.log("es divisible entre 2")
// }
// else {
//     console.log("no es divisible entre 2")
// }


// Reto 06
// 6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
// calcule el precio final con IVA. El IVA será una constante que sera del 21%

// var numero=parseFloat(prompt("introduce un número"))
// const IVA=0.21

// precio = numero*(numero*IVA)

// console.log(precio)


// Reto 07
// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

// let num = 100

// while (num > 0) {
//     console.log(num)
//     num -= 1;
// }


// 8. Haz el mismo ejercicio anterior con un bucle for.

// let num = 100

// for (num;num>0;num--){
//     console.log(num)
// }


// 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
// que desees.


// let num = 10


// for (num;num>0;num--){
//     if ((num%2==0)||(num%3==0)){
//     console.log(num)}}


// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
// pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
// mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

// let ventasIn = parseInt(prompt("dime cuantas ventas has tenido"))

// var suma=0


// for (ventasIn;ventasIn>0;ventasIn--){
//     valorVentas = parseInt(prompt("dime el precio"))
//     if (!isNaN(valorVentas)){
//         suma += valorVentas
//     }
// }
// console.log(suma)

let edad = 16;
let mayorEdad;


mayorEdad = (edad >= 18)
    ? console.log("si")
    : (edad=16)
         ? console.log("16si")
         : console.log("nop")



// 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
// o no. Usa un switch para ello.

// 12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
// condición de salida (3 intentos y si acierta sale, aunque le queden intentos).


// 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
// aritmético (String), según este último se realizará la operación correspondiente. Al final
// mostrará el resultado en un cuadro de diálogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.