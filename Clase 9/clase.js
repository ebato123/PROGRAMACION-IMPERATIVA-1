const prompt = require("prompt-sync")({ sigint: true });

// Actividad 1)
// let ingresarFrase = prompt("Ingrese la frase: ");
// console.log(ingresarFrase)

// // Actividad 2)
// let ingresarNombre = prompt("Ingresá tu nombre: ");
// console.log("Hola " + ingresarNombre + "!");

// // Actividad 3)
// let primerNumero = parseInt(prompt("Ingrese el primer valor: "));
// let segundoNumero = parseInt(prompt("Ingrese el segundo valor: "));
// let sum = primerNumero + segundoNumero;
// console.log("Tu resultado es: " + sum);

// Actividad 4)
// let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
// let añoActual = 2023;
// let edad = añoActual - añoNacimiento;
// console.log("Tu edad es " + edad + " años.");

// Actividad 5)
// let numeroAleatorio = Math.floor(Math.random() * 10);
// let adivinanza = parseInt(prompt("Intenta adivinar el número del 1 al 10: "));
// if (adivinanza === numeroAleatorio){
// 	console.log("Felicitaciones, ese era!");
// }else {
// 	console.log("Lo siento, intenta nuevamente!");
// }

// Actividad 6)
// let i = 0;
// while(i < 100){
//     if(i % 2 === 1){
//         i++
//         console.log(i)
//     }else{i++}
// }

// Actividad 7)
// const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

// for(let nombre of nombres){
//     console.log(nombre);
// }

// Actividad 8)
// let numero = prompt("Ingresar Número: ")
// let resultado = 0;
// let numeroParseado = parseInt(numero);
// if(numeroParseado > 500){
//     resultado = (numeroParseado / 100) * 18;
// }else{
//     resultado = numeroParseado;
// }
// console.log(resultado);

// Actividad 9)
// function elemento(array){
//     if(array.length >= 3){
//         for(let i = 0; i = 2; i++){
//             return array[i]
//         }
//     }else return -1
// }

// console.log(elemento(["NOSÉ","JUAN","Carlitos","Juan2"]))

// Actividad 10)

// let numeroIngresado = prompt("Ingrese un valor: ");
// let numeroIngresadoParseado = parseInt(numeroIngresado);
// let numerosRestantes = 0;
// if(numeroIngresadoParseado < 10){
//     while((numeroIngresadoParseado + numerosRestantes) < 10){
//         numerosRestantes++;
//     }console.log("A " + numeroIngresado + " le faltan " + numerosRestantes + " para llegar a ser un número de 2 cífras.")
// }else if(numeroIngresadoParseado >= 10 && numeroIngresadoParseado < 100){
//     while((numeroIngresadoParseado + numerosRestantes) < 100){
//         numerosRestantes++;
//     }console.log("A " + numeroIngresado + " le faltan " + numerosRestantes + " para llegar a ser un número de 3 cífras.")
// }else{
//     console.log("ERROR: Ingresar un número válido de HASTA 2 cífras.")
// }

// Actividad 11)

// let notas = [];
// let notasSuma = 0;
// let N = prompt("Ingrese la cantidad de Notas a promediar: ");
// let NParseado = parseInt(N);
// for(let i = 0; i < NParseado ; i++){
//     let valorActual = prompt("Ingrese el valor: ");
//     let valorActualParseado = parseInt(valorActual);
//     notas.push(valorActualParseado);
// }
// for(let nota of notas){
//     notasSuma += nota;
// }
// let promedio = notasSuma / NParseado;
// console.log(promedio);

// Actividad 12)

// let valores = [];
// let sumaValores = 0;
// let N = prompt("Ingrese la cantidad de números a sumar: ");
// let NParseado = parseInt(N);
// for(let i = 0; i < NParseado ; i++){
//     let valorActual = prompt("Ingrese el valor: ");
//     let valorActualParseado = parseInt(valorActual);
//     valores.push(valorActualParseado);
// }
// for(let valor of valores){
//     sumaValores += valor;
// }
// console.log(sumaValores);
