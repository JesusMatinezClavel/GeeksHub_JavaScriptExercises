///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////                           EJERCICIOS III                          /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////                           CONDICIONALES                          //////////////////////////////////////////////////////////

// 1. Pedir dos números y decir si son múltiplos o no.

// let num1 = (Math.random() * 10).toFixed(0)

// let num2 = (Math.random() * 10).toFixed(0)

// const ejercicio = (a,b) => {
//     a%b == 0 
//         ? console.log(a + " es multiplo de " + b) 
//         : console.log(a + " no es multiplo de "+ b)
//     b%a == 0 
//         ? console.log(b + " es multiplo de " + a)
//         : console.log(b + " no es multiplo de " + a)
// }

// ejercicio(num1,num2)


// console.log("hola")

// 2. Pedir dos números y decir cual es el mayor.

// let num1 = (Math.random() * 10).toFixed(0)

// let num2 = (Math.random() * 10).toFixed(0)

// const ejercicio = (a,b) => {
//     a>b ? console.log(a + " es mayor que " + b) : console.log(b + " es mayor que " + a)
// }

// ejercicio(num1,num2)

// 3. Pedir un número y decir si es un número negativo, si es positivo o cero.

// let num1 = parseInt(prompt("dime un numero"))

// const ejercicio = (a) => {
//     switch (true) {
//         case (a < 0): console.log(a + " es negativo")
//             break;
//         case (a === 0): console.log(a + " es igual a 0")
//             break;
//         case (a > 0): console.log(a + " es positivo")
//             break;
//         default: null
//             break;
//     }
// }

// ejercicio(num1)

// 4. Pedir un string y determinar si tiene cinco caracteres o más.


// const ejercicio = () => {
//     palabra = prompt("dime una palabra")
//     list = Array.from(palabra)
//     letras = list.length
//     console.log(letras)
// }

// ejercicio()



// 5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres
// números y determinar si el promedio es mayor que cinco.

// let num1
// let num2
// let num3

// const ejercicio = () => {
//     do {
//          num1 = Math.abs(parseInt(prompt("dime un numero entre el 1 y el 10")).toFixed(0))
//          num1<10 || num1!==0
//             ? a = num1
//             : prompt("sigue intenandolo 1")
//     } while (num1 > 10 || num1 == 0)
//     do {
//          num2 = Math.abs(parseInt(prompt("dime un numero entre el 1 y el 10")).toFixed(0))
//          num2<10 || num2!==0
//          ? b = num2
//          : prompt("sigue intenandolo 2")
//     } while (num2 > 10 || num2 == 0)
//     do {
//          num3 = Math.abs(parseInt(prompt("dime un numero entre el 1 y el 10")).toFixed(0))
//          num3<10 || num3!==0
//          ? c = num3
//          : prompt("sigue intenandolo 3")
//     } while (num3 > 10 || num3 == 0)
//     res = a + b + c
//     console.log(`${a}`, `${b}`, `${c}` + " resultado " + res)
//     res > 5 ? console.log("es mayor que 5") : console.log("no es mayor que 5")
// }

// ejercicio()


// 6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let palabra = "palabra"

// const ejercicio = () => {
//     // palabra = prompt("dime una palabra")
//     palabra === palabra.toLowerCase()
//         ? console.log("si")
//         : console.log("no")
// }

// ejercicio()



// 7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además
// el número.

// const ejercicio = ()=>{
//     num = parseInt((Math.random()*19)+1)
//     console.log(num)
//     num%2===0 ? console.log("es par") : console.log("es impar")
// }

// ejercicio()

// 8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha
// aprobado o no.

// const ejercicio = () => {
//     nota1 = parseInt(Math.random() * 10)
//     nota2 = parseInt(Math.random() * 10)
//     nota3 = parseInt(Math.random() * 10)
//     media = (nota1 + nota2 + nota3) / 2
//     console.log(media)
//     media < 5 ? console.log("has suspendido") : console.log("has aprobado")
// }

// ejercicio()


// 9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
// descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
// El usuario introduce marca y modelo y el programa saca el descuento correspondiente por
// pantalla.

// const ejercicio = () => {
//     marcaIn = prompt("dime la marca de tu coche").toLowerCase()
//     modeloIn = prompt("dime el modelo de tu coche").toLowerCase()
//     // coche = [marcaIn, modeloIn]
//     let coche = {
//         marca: marcaIn,
//         modelo: modeloIn
//     }
//     if (coche.marca == "ford") {
//         switch (coche.modelo) {
//             case "focus":
//             console.log("desc10%")
//                 break;
//             case "fiesta":
//             console.log("desc5%")
//                 break;
//             default:
//                 break;
//         }
//     } else {
//         console.log("no tienes descuento, sorry")
//     }
// }

// ejercicio()

// 10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
// código responda cuántos días tiene ese mes.

// const ejercicio = () => {
//     mes = parseInt(prompt("dime el numero de mes"))
//     switch (mes) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("tiene 31 días")
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("tiene 30 días")
//             break;
//         case 2:
//             console.log("tiene 28 o 29 días")
//             break;
//         default:
//             break;
//     }
// }

// ejercicio()


// 11. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y
// realice las siguientes operaciones:

// a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un
//     vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el
//     mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
//     condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un
//     vehículo pequeño”.
// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o
//     igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje
//     “El grosor para esta rueda es inferior al recomendado”




// const ejercicio = () => {
//     diam = parseFloat(prompt("dime el diámetro de tu rueda")).toFixed(1)
//     grosor = parseFloat(prompt("dime el grosor de tu rueda")).toFixed(1)
//     switch (true) {
//         case (diam > 1.4):
//             console.log("la rueda es para un vehículo grande")
//             grosor < 0.4 ? console.log("el grosor de la rueda no es el recomendado") : null
//             break;
//         case (diam <= 1.4 && diam > 0.8):
//             console.log("la rueda es para un vehículo mediano")
//             grosor < 0.25 ? console.log("el grosor de la rueda no es el recomendad") : null
//             break;
//         default:
//             console.log("la rueda es para un vehículo pequeño")
//             break;
//     }
// }

// ejercicio()

// 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
// los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
// por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
// pagar, teniendo en cuenta las siguientes
// consideraciones: si el vehículo es “coche”, el precio por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.


// const ejercicio = () => {
//     vehiculo = prompt("dime que tipo de vehículo tienes").toLowerCase()
//     kmHechos = parseFloat(prompt("dime cuantos kilómetros has hehco")).toFixed(2)
//     switch (vehiculo) {
//         case "moto":
//             console.log("tienes que pagar " + (kmHechos * 0.2).toFixed(2) + "€")
//             break;
//         case "coche":
//             console.log("tienes que pagar " + (kmHechos * 0.1).toFixed(2) + "€")
//             break;
//         case "autobus":
//             console.log("tienes que pagar " + (kmHechos * 0.5).toFixed(2) + "€")
//             break;
//         default:
//             break;
//     }
// }

// ejercicio()








///////////////////////////////////////////////////////////                                BUCLES                             //////////////////////////////////////////////////////////



// 1. Escribir un script que pida un valor entero y muestre en pantalla una lista de números
// desde el 0 al valor tecleado. Los números se separarán por comas.

// const ejercicio = () => {
//     num = parseInt(prompt("dime un numero"))
//     for (i = 0; i <= 5; i++) {
//         console.log(i + ",")
//     }
// }

// ejercicio()


// 2. Hacer un programa que cuente de N en N hasta un número M proporcionado por el
// usuario. El usuario también ha de proporcionar N.



// const ejercicio = () => {
//     dimeN = parseInt(prompt("dime cada cuanto quieres que se haga el salto"))
//     dimeM = parseInt(prompt("dime hasta cuando quieres que se haga el salto"))
//     for (i = dimeN; i <= dimeM; i+=i) {
//         console.log(i)
//     }
// }

// ejercicio()



// 3. Genera una lista con todos los números pares positivos por debajo del número tecleado
// por el usuario.

// const ejercicio = () => {
//     let num = parseInt(prompt("dime hasta cuando quieres que se haga el salto de par en par"))
//     for (i = 0; i < num; i++) {
//         i % 2 == 0 ? console.log(i) : null
//     }
// }

// ejercicio()


// 4. Escribe la tabla de multiplicar de un número introducido por el usuario.

// const ejercicio = () => {
//     num = 4
//     for(i=0;i<10;i++){
//         console.log(num + " x " + i + " = " + (num*i))
//     }
// }

// ejercicio()

// 5. Formar un triángulo de este estilo
// *
// **
// ***
// ****

const ejercicio = () => {
    fila = ""
    for (i = 0; i < 5; i++) {
        i < 5
            ? fila = console.log("*")
            : fila = console.log(" ")
        fila = ""
    }
}

ejercicio()

// 6. Con la cantidad de líneas que indique el usuario.





// 7. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por
// el usuario.





// 8. Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa
// deberá calcular la media aritmética (la suma de todos ellos dividido por la cantidad de
// números).




// 8. Saca por consola los números primos del 0 al número que introduzca un usuario por
// prompt.





// 9. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0.
// Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta
// atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa
// determine qué número es el mayor y cuente desde el mayor hasta el menor.





// 10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el
// resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga
// todos los resultados.



















