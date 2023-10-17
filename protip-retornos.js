// Ejemplo de crear un objeto en funciones (Primera manera)
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Reynaldo', 'Zerpa');
console.log(persona);