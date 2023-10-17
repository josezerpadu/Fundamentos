// Parametro REST se utiliza en la definicion de una funcion y nos sirve para guardar x cantidades de valores
function suma(a,b, ...c) {
    const resultado = [a, b, ...c]
    return resultado.reduce((acumulador, valorActual) => acumulador + valorActual, 0);  
}

const resultadoFuncionSuma = suma(2, 2, 6, 20, 40, 30);
console.log({resultadoFuncionSuma});

// Operdador Spread, aca tenemos dos array donde haremos un tercer array utilizando el operador Spread, uniendo ambos datos en uno solo 

const numero1 = [60, 70, 80, 90, 100];

const numero2 = [10, 20, 30, 40, 50];

const array1 = [...numero2,...numero1]; // Aca tambien podriamos utilizar el metodo .concat y unir ambos array
console.log({array1});
// Podemos crear un array uniendo dos array utilizando el spread operator como en ejemplo anterior

// En el siguiente ejemplo crearemos un array partiendo de uno hecho y agregaremos datos sin el metodo push, utilizaremos ...operator

const array2 = [...numero2,...[60, 70, 80, 90, 100]];
console.log({array2});

