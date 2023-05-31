const prompt = require("prompt-sync")({ sigint: true });

// FIAMBRERÍA
let temperatura = 23;
let lluvia = false;
let pisoAscensor = 4;
let horaActual = 18;
let minsActual = 23;
const horaApertura = 9;
const horaCierre = 20;

let cantidadQueso;
let deuda = 500;

console.log("La temperatura externa es de: " + temperatura + "°")
console.log("¿Está lloviendo?: " + lluvia)
console.log("Número de piso: " + pisoAscensor)
console.log("La hora actual es: " + horaActual + ":" + minsActual + "hs")
console.log("Hora de apertura de la fiambreria: " + horaApertura + ":00hs")
console.log("Hora de cierre de la fiambreria: " + horaCierre + ":00hs")
cantidadQueso = prompt("¿Cuantos gramos de queso va a llevar? : ");
console.log("Serían " + deuda + "$ a cargo(déuda).")