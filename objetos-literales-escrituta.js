let nombre = 'Reynaldo';

const persona = {
    nombre,
    saludar() {
        console.log(`Hola ${this.nombre} soy la funcion en el objeto con "this" 
haciendo referencia a la propiedad dentro del mismo objeto`);
    }
}

console.log(persona.nombre);
persona.saludar()