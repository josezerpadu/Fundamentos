let alumnosNodeJs = [ 'Lucio', 'Martinez', 'Ingnacio', 'Danielaa', 'Marcos', 'Mariangel'];

let notas = [8, 6.5, 9, 9.2, 7.3, 5.4];

let lstNotasYAlumnos = [[ 'Lucio', 'Martinez', 'Ingnacio', 'Danielaa', 'Marcos', 'Mariangel'], 
                        [8, 6.5, 9, 9.2, 7.3, 5.4]];

let alumno = 'Mariangel';

if (lstNotasYAlumnos[0].includes(alumno)) {
    let posicionAlumno = lstNotasYAlumnos[0].indexOf(alumno)
    console.log(`La nota final de ${alumno} es de ${lstNotasYAlumnos[1][posicionAlumno]}`);
}else {
    console.log('Alumno no encontrado');
}  
   