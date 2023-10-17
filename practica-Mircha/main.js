/* Ejercicio 1: 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const numerosCaracteres = (cadena = '') =>  (!cadena) ? 'No es un string' : cadena.length ;

//console.log(numerosCaracteres('Hola Mundo'));

/*2) Ejercicio 2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola". */

const recortado = (texto ='', longitud = undefined) => 
(!texto) ? console.log('ERROR') : (longitud === undefined) 
?console.log('No ingresaste la longitud del texto') 
: console.log(texto.slice(0, longitud));

//recortado('Hola Mundo', 7);

// Ejercicio 3 programa una funcion que dada una cadena de string devuelva un array separado por cierto caracter ejemplo:

const arraySeparador = (text ='', caracter = undefined) => 
(!text) 
? console.log('No ingresastes un texto') 
: (caracter === undefined)
? console.log('No ingresaste el separador') 
: console.log(text.split(caracter));

//arraySeparador('Hola mundo', ' ');

/* ejercicio 4 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo
 Hola Mundo. */

 const repiteTexto = (texto ='', cantidad = undefined) => {
    if (!texto) 
       return console.log('No Ingresaste un texto');

    if (cantidad === undefined) 
        return   console.log('No ingresaste un valor');

    if (cantidad <= 0)
        return console.log('Ingrese un numero mayor a cero');
    
        for (let i = 1; i <= cantidad; i++) {
            console.log(texto);
        }
 }

 //repiteTexto('Hola Mundo',3) 

//*******************************************************************************************************************************
/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const alReves = (text = '') => 
(!text) ? console.log('Ingresa un texto')
: (typeof text === 'number') 
? console.log(`ERROR ${text} no es un texto`)
: console.log(text.split('').reverse().join('')); // al momento de usar varios metodos notar este codigo


//alReves('Hola Mundo');

 /*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const cantidadRepetidos = (text, palabra) => {

   let palabras = text.split(' ');
   let contador = 0;

   for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra){
            contador ++
        }
   }
   return contador
}

//console.log(cantidadRepetidos('hola mundo adios mundo mundo', 'mundo'));

//***************************************************************************************************************************** */
/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromo = (text = '') => {
    if (!text)
    return console.log('No Ingresaste un texto');

    if (typeof text === 'number') 
    return console.log(`ERROR ${text} no es un texto`);
    // Operacion
    let alrevez = text.split('').reverse().join('')
    // Asignacion del valor a resultPolind de true o false
    let resultPolind = alrevez === text;
    // Aca utilizamos un operador ternario para impimir resultados en consola
    (resultPolind) ? console.log(`La palabra "${text}" es palindromo`) : console.log(`La palabra "${text}" no es palindromo`)
}
//palindromo('nadan');

//*********************************************************************************************************************************
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const eliminandoCaracteres = (...text) =>{
    let array = [...text]
    let conversion = array.join(', ')
    let terminator = '';
    for ( let i = 0; i < conversion.length; i++) {
        if ("xyz".indexOf(conversion[i]) === -1) {
            terminator += conversion[i];
    }
}
return terminator
}
console.log(eliminandoCaracteres('xyz1', 'xyz2', 'xyz3', 'xyz4', 'xyz5'));