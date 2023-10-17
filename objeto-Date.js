/* Para crear un estancia del objeto Date debemos asignar la estancia en una varible y luego trabajar con ella dependiendo de nuestra 
necesidad del codigo */ //Ejemplo:

console.log(Date()); // aca imprimimo el objeto en si y me mostrara fecha y hora.

// Asignacion de la estancia del objeto Date a una variable para trabajar desde la estancia.

let fecha = new Date();
console.log({fecha});

// Dia del mes 
console.log(fecha.getDate());
// Dia de la semana hace referencia desde el dia domingo arrancando en posicion 0 hasta el sabado posicion 6
console.log(fecha.getDay());
// Mes 
console.log(fecha.getMonth());
// Año
console.log(fecha.getFullYear());
// Hora militar 
console.log(fecha.getHours());
// Minutos
console.log(fecha.getMinutes());
// Segundos 
console.log(fecha.getSeconds());
// Milisegundos
console.log(fecha.getMilliseconds());
// DiaSemana mes diaMes Año hora posicion de la hora mundial 
console.log(fecha.toString());
// Dia mes fechaMes año
console.log(fecha.toDateString());
// Fecha entendimiento mas humana
console.log(fecha.toLocaleString());
// dia mes año fecha mas de entendimiento humano
console.log(fecha.toLocaleDateString());
// Hora entendimiento humano
console.log(fecha.toLocaleTimeString());

console.log(fecha.getTimezoneOffset());
// Dia del mes
console.log(fecha.getUTCDate());

console.log(fecha.getUTCHours());
// segundos que han recorrido desde la fecha implementada en JS
console.log(Date.now());

let miCumple = new Date(1986, 6, 23);
console.log(miCumple);

