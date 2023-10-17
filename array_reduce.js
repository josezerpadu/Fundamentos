const lstSeccionA = [4,7,6,8,2,9,5];

const lstSeccionB = [5,8,4,3,8,9,4];

const lstSeccionC = [6,3,8,4,9,4,5];

const todasSecciones = lstSeccionA.concat(lstSeccionB, lstSeccionC);

let valor = todasSecciones.reduce((prev, ataual) => prev + ataual / (todasSecciones.length),0)

console.log(valor.toFixed(2))

const sumaSecciones = (lst) => {
    return lst.reduce((prev, actul) => prev + actul,0)
}

//let sumaSeccionesTotal = sumaSecciones(lstSeccionA) + sumaSecciones(lstSeccionB) + sumaSecciones(lstSeccionC);

//let cantidadAlumnos = lstSeccionA.length + lstSeccionB.length + lstSeccionC.length;

//let media = sumaSeccionesTotal / cantidadAlumnos;

//console.log(media);