let notas = [10, 20, 6, 9, 18, 12, 3, 4];

let nuevasNotas = notas.map((not) => (not / 2) < 3 ? 3 : not / 2);
console.log(notas);
console.log(nuevasNotas)


let nombres = ['reynaldo', 'karla', 'josefa', 'alicia'];

let nombresMayusculas = nombres.map((nomb) => nomb.toUpperCase()); 

console.log(nombresMayusculas);