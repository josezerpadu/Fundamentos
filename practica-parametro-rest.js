//Escribe una función llamada promedio que acepte un número variable de argumentos y calcule el promedio de todos ellos.

const promedio = (a, b,...c) => {
    const array = [a, b,...c]
    const suma = array.reduce((acumulador, actual) => acumulador + actual ,0);
    return suma / array.length;
};

const resultado = promedio(2,2,2,2,2);
console.log(resultado);

/* ejercicio 2: Crea una función llamada concatenar que tome una cadena como el primer argumento y luego acepta un número variable de cadenas adicionales 
como argumentos restantes. La función debe concatenar todas las cadenas en una sola cadena. */

/*const concatenar = (...restoText) => {
    const cadena = [...restoText];
    let acumulador = '';

    cadena.forEach((Element) => acumulador += ' ' + Element)

    return acumulador
*********************************************************************************************************************************
    /*for(let i = 0; i < cadena.length; i++) {              este codigo ejecuta la funcion concatenar con estructura de for
        acumulador += ' ' + cadena[i]
    }
}*/

const concatenar = (...restoText) => restoText.join(' ') // manera mas eficiente segun chatgpt para resolver elejercicio 2

const sumaTotal = concatenar('Hola', 'Reynaldo', 'Zerpa', 'Dugarte', 'Lo lograste eres un crack!'); 
console.log(sumaTotal);

/*Implementa una función de llamada maximo que acepta un número variable de argumentos y devuelve el número más grande de la lista.*/

const maximo = (...cantidades) => Math.max(...cantidades);

const numeroMaximo = maximo(1, 5, 9, 3, 7,12);
console.log(numeroMaximo);
console.clear();

// Distribución del operador Spread: *********************************************************************************************

/* Ejercicio 1: Implementa una función llamada mezclarArreglos que tome dos o más arreglos como argumentos y devuelva un nuevo arreglo que contenga todos 
los elementos de los arreglos originales. */
const number1 = [10, 20, 30];
const number2 = [40, 50, 60];
const number3 = [70, 80, 90];

const mezclarArreglos = (...arrays) => [...arrays];

const nuevoArray = mezclarArreglos(...number1,...number2,...number3);
console.log({nuevoArray});
console.clear();

/* ejercicio 2: Escribe una función llamada clonarObjeto que tome un objeto como argumento y devuelva una copia exacta de ese 
objeto utilizando el operador spread.*/

const persona = {
    nombre: 'Reynaldo',
    apellido: 'zerpa',
    casado: 'karla'
}

const clonarObjeto = (objeto) => copiaExacta = {...objeto};

const nuevoClon = clonarObjeto(persona);
console.log(nuevoClon);
console.clear();

/* Ejercicio 5: Escribe una función llamada eliminarDuplicados que tome un arreglo como argumento y devuelva una versión del arreglo 
sin elementos duplicados utilizando el operador spread.*/

const duplicados = [1,1,2,2,3,3,4,4,5,5,6,6];

const eliminarDuplicados = (...numb) => [...new Set(numb)];

const sinDuplicados = eliminarDuplicados(...duplicados);
console.log(sinDuplicados);
console.table( sinDuplicados);
console.log(Date())




