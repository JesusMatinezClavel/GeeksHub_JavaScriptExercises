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

// const ejercicio = () => {
//     let fila = ""
//     for (i = 0; i < 5; i++) {
//         for (x = 4; x >= 0; x--) {
//             i >= x ? fila += "*" : fila += " "
//         }
//         console.log(fila)
//         fila = ""
//     }
// }

// ejercicio()

// 6. Con la cantidad de líneas que indique el usuario.

// const ejercicio = () => {
//     num = parseInt(prompt("dime la altura que quieres"))
//     let fila = ""
//     for (i = 0; i < num; i++) {
//         for (x = num - 1; x >= 0; x--) {
//             i >= x ? fila += "*" : fila += " "
//         }
//         console.log(fila)
//         fila = ""
//     }
// }

// ejercicio()



// 7. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por
// el usuario.


// const ejercicio = () => {
//     num = parseInt(prompt("dime la altura que quieres"))
//     res = 0
//     for (i = 0; i <= num; i++) {
//         res += i
//         console.log(i, res)
//     }
//     console.log("la suma es " + res)
// }

// ejercicio()



// 8. Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa
// deberá calcular la media aritmética (la suma de todos ellos dividido por la cantidad de
// números).



// const ejercicio = () => {
//     list = []
//     res=0
//     for (i=1;i<=4;i++){
//         // num = parseInt(prompt("dime un numero"))
//         num = parseInt((Math.random()*10).toFixed(0))
//         list.push(num)
//     }
//     console.log(list)
//     for(i=0;i<4;i++){
//         res += list[i]
//         console.log(res)
//     }
//     media = res/4
//     console.log(media)
// }

// ejercicio()

// 8. Saca por consola los números primos del 0 al número que introduzca un usuario por
// prompt.


// const ejercicio = () => {
//     num = parseInt(prompt("dime un numero"))
//     for (i = 0; i <= num; i++) {
//         i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0
//             ? console.log(i)
//             : null
//     }
// }

// ejercicio()



// 9. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0.
// Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta
// atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa
// determine qué número es el mayor y cuente desde el mayor hasta el menor.



// Primera versión
// const ejercicio = () => {
//     num = 50
//     for (i=num;i>=0,i--){
//         console.log(i)
//     }
// }



// Segunda versión
// const ejercicio = () => {
//     num1 = parseInt(prompt("dime un numero"))
//     num2 = parseInt(prompt("dime un numero mas bajo"))
//     for (i = num1; i >= num2; i--) {
//         console.log(i)
//     }
// }



// Tercera versión
// const ejercicio = () => {
//     // num1 = parseInt(prompt("dime un numero"))
//     // num2 = parseInt(prompt("dime otro numero"))
//     num1 = 50
//     num2 = 80
//     if (num1 < num2) {
//         for (i = num2; i >= num1; i--) {
//             console.log(i)
//         }
//     } else {
//         for (i = num1; i >= num2; i--) {
//             console.log(i)
//         }
//     }
// }

// ejercicio()

// 10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el
// resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga
// todos los resultados.


// const ejercicio = () => {

//     lista = []
//     listaMult = []
//     for (i = 0; i < 5; i++) {
//         // num = parseInt(prompt("dime un numero"))
//         num = parseInt((Math.random() * 10).toFixed(0))
//         lista.push(num)
//     }
//     console.log(lista)
//     lista.foreach(item,index)=> {
//         listaMult.push(lista[i]*3)
//     }
//     console.log("x3".padStart(10))
//     console.log(listaMult)
// }


// ejercicio()




///////////////////////////////////////////////////////////                              FUNCIONES                            //////////////////////////////////////////////////////////





// 1. Crea una función que convierta grados celsius a grados fahrenheit.

// const ejercicio = () => {
//     let Celsius = 36
//     let Farenh
//     celToFar = (Celsius * 9 / 5) + 32
//     farToCel = (Farenh - 160) / 9
//     return celToFar
// }

// console.log(ejercicio())





// 2. Crea una función que determine si un número es par o impar.

// num = Math.floor(Math.random()*10)
// const ejercicio = (a) => { 
//     console.log(a)
//     a%2===0
//         ? console.log("es par")
//         : console.log("es impar")
// }

// ejercicio(num)

// 3. Crea una función que determine si un número es primo o no.

// num = Math.floor(Math.random() * 10)
// const ejercicio = (a) => {
//     console.log(a)
//     a === 2 || a === 3 || a === 5
//         ? console.log("es primo")
//         : a % 2 === 0 || a % 3 === 0 || a % 5 === 0
//             ? console.log("no es primo")
//             : console.log("es primo")
// }

// ejercicio(num)


// 4. Crea una función que reciba un número de dni como parámetro, y devuelva la letra del
// mismo. Si el dni tiene algún error debe comunicarlo. Recuerda que el array de letras de DNI
// es [TRWAGMYFPDXBNJZSQVHLCKE].

// let dniLetters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
// const ejercicio = () => {
//     num = 29216960
//     res = num % 23
//     console.log("tu letra del dni es " + dniLetters[res])
// }


// ejercicio()



// 5. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva
// incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.


// const ejercicio = () => {
//     precio = parseFloat(prompt("dime el precio"))
//     iva = (parseInt(prompt("dime el iva"))) / 100
//     iva === 0
//         ? iva = 0.21
//         : precioFinal = (precio * iva) + precio
//     return precioFinal
// }

// console.log(ejercicio())


// 6. Crea una función que determine si una letra es una vocal o una consonante.

// const ejercicio = () => {
//     word = "murcielago"
//     wordList = Array.from(word)
//     console.log(wordList)
//     wordList.forEach((item, index) => {
//         switch (true) {
//             case item === "a":
//                 console.log("hay una a en el indice " + index)
//                 break;
//             case item === "e":
//                 console.log("hay una e en el indice " + index)
//                 break;
//             case item === "i":
//                 console.log("hay una i en el indice " + index)
//                 break;
//             case item === "o":
//                 console.log("hay una o en el indice " + index)
//                 break;
//             case item === "u":
//                 console.log("hay una u en el indice " + index)
//                 break;
//             default:
//                 break;
//         }
//     });
// }
// console.log(ejercicio())


// 7. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O
// en 0.

// const ejercicio = () => {
//     frase = "dame algo de dinero, please"
//     fraseList = Array.from(frase)
//     fraseList = fraseList.map((item) => {
//         switch (true) {
//             case (item === "a"):
//                 return "4"
//                 break;
//             case (item === "e"):
//                 return "3"
//                 break;
//             case (item === "i"):
//                 return "1"
//                 break;
//             case (item === "o"):
//                 return "0"
//                 break;
//             default:
//                 return item
//                 break;
//         }
//     });
//     console.log(fraseList)
//     fraseChange = fraseList.join("")
//     console.log(fraseChange)
// }

// ejercicio()

// 8. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por
// ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.

// const ejercicio = () => { 
//     frase = "dame algo de dinero, por favor"
//     cant= 0
//     fraseList = Array.from(frase)
//     fraseList.forEach(item => {
//             item === "a"
//                 ? cant++
//                 : null  
//     });
//     return cant
// }

// console.log(ejercicio())

// 9. Crea una función que, dado un array de números, devuelva el número más grande del
// mismo.

// const ejercicio = () => {
//     lista = [2, 5, 72, 67, 3, 1, 795, 7, 37, 21, 59, 123, 63, 29, 45]
//     max = 0
//     for (let i = 0; i < lista.length; i++) {
//         lista[i] > max
//             ? max = lista[i]
//             : null
//     }
//     return max
// }

// console.log(ejercicio())



// 10. Crea una función que, dado un array de números, devuelva la suma de todos los
// números que contiene.

// const ejercicio = () => {
//     lista = [2, 4, 6, 2, 8, 6, 2]
//     total = 0
//     for (let i = 0; i < lista.length; i++) {
//         total += lista[i]
//     }
//     return total
// }

// console.log(ejercicio())



// 11. Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un
// número(A).


// const ejercicio = () => {
//     a = 10
//     b = 60
//     perc = (b/100)
//     slice = a*perc
    

//     return slice
// }

// console.log(ejercicio())


