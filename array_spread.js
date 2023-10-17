const lstnotas = [3,5,4,7,6,8,2,9,];

const nuevaNotas = [...lstnotas];

nuevaNotas.push(10,9)

console.log(lstnotas);
console.log(nuevaNotas);

// el spread operator me sirve para clonar un array y trabjar en el y asi no mutar el array original...