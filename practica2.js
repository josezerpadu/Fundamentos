/*Suma de dos números: 
Crea una función que tome dos números como argumentos y devuelva su suma.*/

const suma = (a, b) => a + b;

//console.log(suma(5,5));

/*Calculadora simple: 
Crea una función que tome dos números y una operación (suma, resta, multiplicación o división) como argumentos y devuelva el 
resultado de esa operación.*/

const calculadora = (valor1, valor2, operador) => {
    // Suma
    if (operador === '+') 
      return  valor1 + valor2;
    // Resta
    if(operador === '-')
      return valor1 - valor2;
    // Multiplicacion
    if (operador === '*')
      return valor1 * valor2;
    // Division
    if (operador === '/') { 

        if ( valor2 === 0) {
              return'Introduzca un numero mayor a cero';
        }else {
            return valor1 / valor2;
    }
    } 
    return `Operador "${operador}" no es valido`;
}

let resultado = calculadora(0, 2, 'k');

console.log(resultado);

/*const pruebaArgument = function(nombre) {
    console.log(arguments);
};

pruebaArgument('Rey', 1,'Hola' ,true,false)
*/

