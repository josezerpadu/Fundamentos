/* Ejercicio 3: Funciones 
Escribe una función llamada calcularPromedio que acepte una matriz de números como parámetro y devuelva el 
promedio de esos números. 
let numeros = [];

    for (let i = 1; i <=100; i++) {
        numeros.push(i)
    }

function calcularPromedio(arreglo) {

    let notaMedia = 0;

    for (let i = 0; i <= arreglo.length -1; i++) {
         notaMedia += arreglo[i]
      
    }
    return notaMedia / arreglo.length
}
let promedio = calcularPromedio(numeros)

console.log(promedio) */

/* Ejercicio 4: Arrays 
Crea un programa que tome un array de números y encuentre el número más grande en ese array. Luego, muestra el 
número más grande en la consola. 

let arrayNumeros = [23, 26, 18, 3, 8, 64, 92, 56];

let numero = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
    
    if (numero < arrayNumeros[i]) {
        numero = arrayNumeros[i]
    }
}
console.log(numero) */

/* Forma mejorada de obtener el numero mas grande con el metodo Math.max
let arrayNumeros = [23, 26, 18, 3, 8, 64, 92, 56];

let numeroMayor = Math.max(...arrayNumeros);

console.log(numeroMayor);*/

/* Ejercicio 3: Funciones 
Escribe una función llamada calcularPromedio que acepte una matriz de números como parámetro y devuelva el 
promedio de esos números. */

/*let arrayNumeros = [23, 26, 18, 3, 8, 64, 92, 56, 99];

function numeroMayor(array) {
  let suma = array.reduce((previus,actual) => previus + actual,0);
  let promedio = suma / array.length;

  return promedio
}

let mayor = numeroMayor(arrayNumeros);

console.log(mayor.toFixed(2));  */

/* Ejercicio 2: Arrays
Crea un programa que tome un array de números y encuentre el número más pequeño en ese array. Luego, muestra el número más 
pequeño en la consola.*/

/*let arrayNumeros = [23, 26, 18, 3, 8, 64, 92, 56, 99];

let numeroPequeño = Math.min(...arrayNumeros);

console.log(numeroPequeño);

/* Ejercicio 4: Objetos
Crea un objeto llamado persona con propiedades como nombre, edad y dirección. Luego, muestra cada propiedad en la consola. */

/*let persona = {nombre: 'Reynaldo',
                edad: 37,
                direccion: 'montevideo'}

console.log(persona.nombre)*/

/* Ejercicio 5: Bucles
Escribe un programa que imprima los números del 1 al 100. Pero para los múltiplos de 3, en lugar del número, imprime "Fizz", y para los 
múltiplos de 5, imprime "Buzz". Para los números que son múltiplos de ambos (3 y 5), imprime "FizzBuzz".

for (let i =1; i<= 100; i++) {
    
    if (i % 15 === 0) { 
        console.log('FizzBuzz')
    }else if (i % 5 === 0) {
        console.log('Buzz');  
    } else if (i % 3 === 0){
        console.log('Fizz')
    }else {
        console.log(i)
    }
}*/

/*Ejercicio 6: Funciones
Escribe una función llamada esPalindromo que acepte una cadena de texto como parámetro y determine si es un palíndromo 
(se lee igual de izquierda a derecha y de derecha a izquierda, ignorando los espacios y la puntuación). Por ejemplo, "anilina" es un palíndromo.*/

/*function esPalindromo(texto) {
    let alrevez = texto.reverse()
    console.log(alrevez);
}

esPalindromo('hola')


let saludo = 'Hola';

saludo.reverse()

console.log(saludo); no lo pude hacer */

/* Ejercicio 7: Arrays
Crea un programa que tome un array de números y calcule la suma de todos los números pares en ese array.


let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let acumulador = 0;

for (let i = 0; i < numeros.length; i++) {
    
     if ((numeros[i] % 2) === 0) {
        acumulador += numeros[i];
       
     }
} console.log(acumulador); excelente codigo*/

/*Ejercicio 8: Estructuras de Control
Escribe un programa que genere un número aleatorio entre 1 y 100 y le pida al usuario que adivine ese número. El programa debe dar pistas 
(mayor o menor) hasta que el usuario adivine el número correcto.*/



/*let numerosCaracteres = (text) => {
    if (!text)
    return text.length
}

console.log(numerosCaracteres('hola')); */

const arreglo = ['Juan', 'Reynaldo', 'Zerpa', 'Dugarte'];

arreglo.forEach((element, id) => console.log(`<li> id="${id}" ${element}</li>`))

