const prompt = require("prompt-sync")({ sigint: true });

// CLASE
let materia;
let nroAula = 15;
let horaInicio = 16;
let horaFin = horaInicio + 2;
let duracion = horaFin - horaInicio;
let contenido;
let resultado = true;

materia = prompt("Ingresá la materia: ")
console.log("Tu número de aula es: " + nroAula)
console.log("La hora de inicio es a las " + horaInicio + ":00hs.")
console.log("La hora de finalización es a las " + horaFin + ":00hs.")
console.log("Duración de la materia: " + duracion + "hs.")
contenido = prompt("Ingresá el contenido: ")
console.log("Tu resultado fue: " + resultado + ". Felicidades! Aprobaste este segmento.")
