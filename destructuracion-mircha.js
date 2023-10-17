// Destructuracion en arry con Mircha #18

const numeros = [10, 20, 30];

// Sin destrucuturacion del array de numeros
let one = numeros[0],
    two = numeros[1],
    three = numeros[2];
console.log(one, two, three);

// Con destrucuturacion del array de numeros
const [uno, dos, tres] = numeros;
console.log(uno, dos, tres);

// Destructuracion de objetos 
const persona = {
    nombre: 'Reynaldo',
    apellido: 'Zerpa',
    edad: 37,
    localidad: 'Montevideo'
}

const {nombre, apellido, edad, localidad} = persona;
console.log({nombre, apellido, edad, localidad});

// puedo asignar y hacer con esa variable cuaquier cosa y eso no afectaria mi objeto original
let miNombre = nombre
miNombre = 'crack'
console.log({miNombre});

console.log({persona});