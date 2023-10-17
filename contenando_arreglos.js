let alumnosPhp = [ 'Lucia', 'Martina', 'Hugo', 'Daniel', 'Martin', 'Maria'];

let alumnosNodeJs = [ 'Lucio', 'Martinez', 'Ingnacio', 'Danielaa', 'Marcos', 'Mariangel'];

let unificacion = alumnosPhp.concat(alumnosNodeJs)


console.table({unificacion});
unificacion[1] = 'Joselo'
console.table({unificacion})