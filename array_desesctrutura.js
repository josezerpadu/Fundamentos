let lstNotasYAlumnos = [[ 'Lucio', 'Martinez', 'Ingnacio', 'Danielaa', 'Marcos', 'Mariangel'], 
                        [8, 6.5, 9, 9.2, 7.3, 5.4]];

let [lstNotasYAlumnos2, notas] = lstNotasYAlumnos;
console.log(lstNotasYAlumnos2);   
console.log(notas);                   

let alumno = 'Mariangel';

if (lstNotasYAlumnos2.includes(alumno)) {
    let posicionAlumno = lstNotasYAlumnos2.indexOf(alumno)
    console.log(`La nota final de ${alumno} es de ${notas[posicionAlumno]}`);
}else {
    console.log('Alumno no encontrado');
}  
   