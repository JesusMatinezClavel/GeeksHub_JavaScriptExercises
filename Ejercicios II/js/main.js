///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////                           EJERCICIOS II                          //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
// valores necesarios para calcular el área. Para ello has de crear un método por cada figura
// para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

// let figura = prompt("elige circulo, cuadrado o triangulo")

// const PI = 3.14

// switch (figura) {
//     case "circulo":
//         radio = prompt("dime el radio")
//         res = (radio ** 2) * PI
//         console.log("el area del circulo es " + res)
//         break;
//     case "cuadrado":
//         base = prompt("dime la base")
//         altura = prompt("dime la altura")
//         res = (base * altura) / 2
//         console.log("el area del cuadrado es " + res)
//         break;
//     case "triangulo":
//         lado1 = prompt("dime un lado")
//         lado2 = prompt("dime el otro lado")
//         res = lado1 * lado2
//         console.log("el area del triángulo es " + res)
// }


// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros  entre qué
// números queremos que los genere, podemos pedirlas al usuario antes de generar los
// números. Este método devolverá un número entero aleatorio. Muestra estos números por
// consola.

// let num1 = prompt("dime el primer numero del rango")
// let num2 = prompt("dime el ultimo numero del rango")

// const randomNum = (a, b) => {
//     rango = b - a
//     aleatorio = parseFloat(Math.random().toFixed(1))
//     console.log(aleatorio)
//     res = (aleatorio*rango) + a
//     console.log(res)
// }


// randomNum(num1, num2)




// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si es
// primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
// ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


// let num = parseInt(prompt("dime un número, el que quieras"))

// const isRandom = (a) => {
//     a === 2 || a === 3 || a === 5
//         ? console.log(a + " es primo")
//             : Number.isInteger(a / 2) || Number.isInteger(a / 3) || Number.isInteger(a / 5)
//                 ? console.log(a + " no es primo")
//                 : console.log(a + " es primo")

// }

// isRandom(num)




// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para calcular
// el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
// introducimos un 5, realizará esta operación 5*4*3*2*1=120.


// let num = 5

// const numL = []

// for (i = num; i > 1; i--) {
//     numL.push(i)
// }


// const factorial = numL.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue)
//     return accumulator * currentValue
// }, 1)

// console.log(factorial)




// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un String
// con el número convertido a binario. Para convertir un número decimal a binario, debemos
// dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
// no se pueda dividir más, el resto que obtengamos de cada división formará el número
// binario, de abajo a arriba.


// let numD = 12

// let list = []

// do {
//     res = numD / 2
//     list.push(Math.floor(numD % 2))
//     numD = res

// } while (res >= 1);




// console.log(list.join(''))



// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando
// el número por parámetro devolverá el número de cifras.

// let num = parseInt(Math.abs(prompt("dime un numerito")))

// console.log(num)

// const cifras = (a) => {
//    list =  Array.from(a.toString())
//    return list.length
// }

// cifras(num)

// console.log(cifras(num))




// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €



// CAMBIO LOS VALORES DE CAMBIO PORQUE EN INTERNET HE ENCONTRADO OTROS MAS ACTUALIZADOS //


// let dinero = parseFloat(Math.abs(prompt("dime la cantidad a cambiar"))).toFixed(2)

// let euro = dinero.toLocaleString('es-ES',{ style: 'currency', currency: 'EUR'})


// const change = (a) => {
//     console.log("tienes " + euro)
//         libraC = (a * 0.85).toLocaleString('en-GB', { style: 'currency', currency: 'GBP'})
//         console.log("tu cambio a libras es " + libraC)
//         dolarC = (a * 1.08).toLocaleString('en-US',{ style: 'currency', currency: 'USD'})
//         console.log("tu cambio a dolares es " + dolarC)
//         yenC =(a * 160.96).toLocaleString('ja-JP',{ style: 'currency', currency: 'JPY'})
//         console.log("tu cambio a yenes es " + yenC)
// }

// change(dinero)



// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// rellenar valores y otro para mostrar.


// let list = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

// const showList = (a) => {
//     console.log("la lista original es ")
//     a.forEach((item, index) => {
//         console.log(index, item)
//     })
// }

// const editList = (a) => {
//     a.map((item, index) => {
//         valor = parseInt(prompt("dime el valor para el índice " + index))
//         list.splice(index, 1, valor)
//     })
// }

// const showNewList = (a) => {
//     console.log("la nueva lista de list es:")
//     a.forEach((item, index) => {
//         console.log(index, item)
//     })
// }

// showList(list)
// editList(list)
// showNewList(list)


// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
// rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
// y otro para mostrar el contenido y la suma del array.




// const ejercicio = () => {
//     let lista = []
//     size = parseInt(prompt("dime el tamaño de la lista"))
//     num1 = parseInt(prompt("dime el primer numero del rango"))
//     num2 = parseInt(prompt("dime el ultimo numero del rango"))
//     lista.length = size
//     rango = num2 - num1
//     for (i = 0; i < size; i++) {
//         aleatorio = parseInt(Math.random()*rango + num1)
//         aleatorio < size
//             ? lista.splice(i, 1, aleatorio)
//             : lista.splice(i, 1, (aleatorio))
//     }
//     console.log(lista)
// }

// const suma = () => {
//     let plus = 0
//     for (i = 0; i < size; i++) {
//         plus += lista[i]
//     }

//     console.log(plus)
// }



// ejercicio()
// suma()



// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados, por último, nos indica cuál es el
// mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.


// const ejercicio = () => {
//     num1 = parseInt(prompt("dime el primer numero del rango"))
//     num2 = parseInt(prompt("dime el ultimo numero del rango"))
//     rango = num2 - num1
//     size = parseInt(prompt("el tamaño de la lista"))
//     lista = []
//     lista.length = size
//     for (let i = 0; i < size; i++) {
//         aleatorio = ((Math.random() * rango) + num1).toFixed(0)
//         Number.isInteger(aleatorio / 2) || Number.isInteger(aleatorio / 3) || Number.isInteger(aleatorio / 5)
//             ? i = i - 1
//             : lista.splice(i, 1, aleatorio)
//     }
//     console.log(lista)
//     //    console.log(Math.max(...lista))    //  Forma dada por ChatGPT
// }

// const mayor = () => {
//     lista.map((item, index) => {
//         comp = lista.every(valor => item >= valor)
//         comp ? console.log('el mayor valor es ' + item) : null
//     })
// }

// ejercicio()
// mayor()


// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0 del
// array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de cada
// array.


// let size = 5

// let list1 = []

// let list2 = []

// const ejercicio = () => {
//     list1.length = size
//     for (i = 0; i < list1.length; i++) {
//         aleatorio = (Math.random() * 100).toFixed(0)
//         list1.splice(i, 1, aleatorio)
//     }
//     list2 = [...list1]
//     console.log(list1, " y list2 copiada: " + list2)
//     for (i = 0; i < list2.length; i++) {
//         aleatorio = (Math.random() * 100).toFixed(0)
//         list2.splice(i, 1, aleatorio)
//     }
//     console.log(list2)
// }

// const nuevaLista = () => {
//     listNew = []
//     for (i = 0; i < list1.length; i++) {
//         res = list1[i] * list2[i]
//         listNew.splice(i,1,res)
//     }
//     console.log(listNew)
// }

// ejercicio()
// nuevaLista()

// 12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto),
// estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le
// indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

// const ejercicio = () => {
//     list = new Array(parseInt(prompt("dime la longitud de la primera lista")))
//     listNew = new Array()
//     valor = parseInt(prompt("dime el número en el que acabaran los valores seleccionados para la nueva lista"))
//     for (i = 0; i < list.length; i++) {
//         aleatorio = parseInt((Math.random().toFixed(2) * 299) + 1)
//         list.splice(i, 1, aleatorio)
//         aleatorio%10 == valor ? listNew.push(aleatorio) : null
//     }
//     console.log(list, " <= esta es la lista original")
//     console.log(listNew, " <= esta es la nueva lista con los numeros termninados en 5")
// }

// ejercicio()



