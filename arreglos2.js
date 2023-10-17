let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

// Como identificar la cantidad de elementos de un arreglo?
console.log('Elemento', juegos.length); 

// Para identificar el indice de un arreglo ejemplo:
console.log('Indice', juegos.length - 1); 

// Para acceder al primer elemento o a cualquier otro Ejemplo:
console.log('Primero: ', juegos[0]);
console.log('Cualquiera: ', juegos[2]);

// Para acceder al ultimo elemento Ejemplo:
console.log('Ultimo elemento: ', juegos[juegos.length - 1]);

// Metodo forEach para recorrer todo el array Ejemplo:

juegos.forEach((elemento, indice) => {
    console.log({elemento, indice});
})

let nuevoJuego = juegos.push('F-Zero');
console.log(nuevoJuego, juegos);

let nuevoJuego2 = juegos.unshift('Agente');
console.log(nuevoJuego2, juegos);

let venta = juegos.pop();
console.log(venta, juegos);

juegos.shift();
console.log(juegos);

let eliminado = juegos.splice(1, 2);
console.log({eliminado, juegos});

juegos.reverse()
console.log(juegos)

juegos.slice()
