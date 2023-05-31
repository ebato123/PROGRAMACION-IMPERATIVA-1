const prompt = require("prompt-sync")({ sigint: true });

let numero1;
let numero2;
let numero3;

function sumar(x, y) {
    suma = x + y;
    return suma;
}


function restar(x, y) {
    resta = x - y;
    return resta;
}


function multiplicar(x, y) {
    multiplicacion = x * y;
    return multiplicacion;
}


function dividir(x, y) {
    division = x / y;
    return division;
}

// NIVEL 3

function cuadradoDeUnNumero(x) {
    cuadrado = multiplicar(x, x);
    return cuadrado;
}

function promedioDeTresNumeros(x, y, z) {
    promedio = dividir((x + y + z), 3);
    return promedio;
}

function calcularPorcentaje(x, y) {
    porcentaje = multiplicar(x, (y / 100));
    return porcentaje;
}

console.log("TESTEO DE CALCULADORA")

console.log("Suma:")
numero1 = parseInt(prompt("Ingrese el primer valor : ")) 
numero2 = parseInt(prompt("Ingrese el segundo valor (suma): ")) 
console.log(sumar(numero1, numero2))

console.log("Resta:")
numero1 = parseInt(prompt("Ingrese el primer valor: ")) 
numero2 = parseInt(prompt("Ingrese el segundo valor (resta): ")) 
console.log(restar(numero1, numero2))

console.log("Multiplicación:")
numero1 = parseInt(prompt("Ingrese el primer valor: ")) 
numero2 = parseInt(prompt("Ingrese el segundo valor (mult.): ")) 
console.log(multiplicar(numero1, numero2))

console.log("División:")
numero1 = parseInt(prompt("Ingrese el primer valor: ")) 
numero2 = parseInt(prompt("Ingrese el segundo valor (div.): ")) 
console.log(dividir(numero1, numero2))

console.log("División (con 0):")
numero1 = parseInt(prompt("Ingrese el valor: ")) 
console.log(dividir(numero1, 0))

// NIVEL 3

numero1 = parseInt(prompt("Ingrese el valor a elevar al cuadrado: "))
console.log(cuadradoDeUnNumero(numero1))

console.log("Promedio:")
numero1 = parseInt(prompt("Ingrese el primer valor: ")) 
numero2 = parseInt(prompt("Ingrese el segundo valor: ")) 
numero3 = parseInt(prompt("Ingrese el tercer valor: ")) 
console.log("Su promedio es de: " + promedioDeTresNumeros(numero1, numero2, numero3))

console.log("Porcentaje:")
numero1 = parseInt(prompt("Ingrese el valor total: ")) 
numero2 = parseInt(prompt("Ingrese el porcentaje del valor: ")) 
console.log("El %" + numero2 + " de " + numero1 + " es: " + calcularPorcentaje(numero1, numero2))

