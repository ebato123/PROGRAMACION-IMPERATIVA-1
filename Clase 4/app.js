const prompt = require("prompt-sync")({ sigint: true });

// Actividad 1 - FIAMBRERÍA
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

// Actividad 2 - CLASE
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

// Actividad 3 - DESAFÍO EXTRA
let cajonRemeras = "pantalones";
let cajonPantalones = "remeras";
let contenedor;

//Saco Pantalones del cajon de Remeras y lo dejo en Contenedor
contenedor = cajonRemeras;
//Lleno cajon de Remeras con las Remeras
cajonRemeras = cajonPantalones;
//Saco Pantalones del Contenedor y lo guardo en cajon de Pantalones
cajonPantalones = contenedor;

console.log("En el cajon de las remeras hay " + cajonRemeras + ".")
console.log("En el cajon de los pantalones hay " + cajonPantalones + ".")