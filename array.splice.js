let listaAlumnos = [ 'Lucia', 'Martina', 'Hugo', 'Daniel', 'Martin', 'Maria'];

let abandonaron = listaAlumnos.splice(2, 2, 'Diego', 'Jose', 'Leonardo');

console.table({listaAlumnos});
console.table({abandonaron});