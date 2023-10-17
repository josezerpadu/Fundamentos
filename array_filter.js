// obtener la lista de alumnos que no alcazaron aprobar

const lstAlumnos = ['jose', 'maria', 'diego', 'juliana', 'cheo'];

const lstnotas = [2, 5, 6, 5, 8]; 

const lstReaprobados = lstAlumnos.filter((elemn,index) => lstnotas[index] < 6)

console.log(lstReaprobados);

const lstAlumnos2 = ['jose', 'maria', 'diego', 'juliana', 'cheo'];
const lstnotas2 = [21, 25, 16, 15, 18]; 

const nombreBuscado = lstAlumnos2.filter((elem, indic) => {
    return lstnotas2[indic] < 18
})

console.log(nombreBuscado);