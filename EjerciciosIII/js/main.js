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

let palabra = "palabra"

const ejercicio = () => {
    // palabra = prompt("dime una palabra")
    palabra === palabra.toLowerCase()
        ? console.log("si")
        : console.log("no")
}

ejercicio()



// 7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además
// el número.



// 8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha
// aprobado o no.



// 9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
// descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
// El usuario introduce marca y modelo y el programa saca el descuento correspondiente por
// pantalla.



// 10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
// código responda cuántos días tiene ese mes.



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



// 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
// los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
// por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
// pagar, teniendo en cuenta las siguientes
// consideraciones: si el vehículo es “coche”, el precio por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.