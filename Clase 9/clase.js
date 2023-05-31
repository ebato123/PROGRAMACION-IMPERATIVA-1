const prompt = require("prompt-sync")({ sigint: true });

// Actividad 1)
let ingresarFrase = prompt("Ingrese la frase: ");
console.log(ingresarFrase)

// Actividad 2)
let ingresarNombre = prompt("Ingresá tu nombre: ");
console.log("Hola " + ingresarNombre + "!");

// Actividad 3)
let primerNumero = parseInt(prompt("Ingrese el primer valor: "));
let segundoNumero = parseInt(prompt("Ingrese el segundo valor: "));
let sum = primerNumero + segundoNumero;
console.log("Tu resultado es: " + sum);

// Actividad 4)
let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let añoActual = 2023;
let edad = añoActual - añoNacimiento;
console.log("Tu edad es " + edad + " años.");

// Actividad 5)
let numeroAleatorio = Math.floor(Math.random() * 10);
let adivinanza = parseInt(prompt("Intenta adivinar el número del 1 al 10: "));
if (adivinanza === numeroAleatorio){
	console.log("Felicitaciones, ese era!");
}
else {
	console.log("Lo siento, intenta nuevamente!");
}

// Actividad 1)

// Actividad 1)
