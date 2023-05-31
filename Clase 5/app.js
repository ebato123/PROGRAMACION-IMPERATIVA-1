const prompt = require("prompt-sync")({ sigint: true });

// Micro Desafío 1
// Se ejecuta el cálculo de: 40 - 10 (y - x)

// Micro Desafío 2
// Se ejecuta la función pero solamente hasta que se contempla el return. 
// (multiplica el primer parámetro e ignora el segundo)

// ACTIVIDAD 1
function pulgadasACentimetros() {
    x = prompt("Ingrese las pulgadas: ")
    return x * 2.54
}

// ACTIVIDAD 2
function stringAURL() {
    y = prompt("Ingrese la string: ")
    return "https://www." + y + ".com"
}

// ACTIVIDAD 3
function stringAdmiracion() {
    z = prompt("Ingrese la string: ")
    return z + "!"
}

// ACTIVIDAD 4 + EXPRESIÓN DECLARADA Y EXPRESADA + ARROW FUNCTION
function edadPerrruna() {
    a = prompt("Ingrese la edad perruna: ")
    return a * 7
}
let edadPerrruna2 = function() {
    a = prompt("Ingrese la edad perruna (otra vez...): ")
    return a * 7
}

let edadPerrruna3 = (a = prompt("Ingrese la edad perruna (otra vez... de nuevo....): ")) => a * 7;

// ACTIVIDAD 5
function horasDeTrabajo() {
    b = prompt("Ingrese su sueldo mensual: ")
    return b / 40 
}

// ACTIVIDAD 6
function calculadorIMC() {
    x = prompt("Ingrese la altura (MT): ")
    y = prompt("Ingrese el peso (KG): ")
    return y / Math.pow(x, 2)
}

// ACTIVIDAD 7
function minAMayusc() {
    string = prompt("Ingrese la string (En minusc.): ")
    return string.toUpperCase()
}

// ACTIVIDAD 8 REVISAR PROMT ONLY OUTPUTS STRINGS

function obtenerTipoDeDato(dato) {
    return typeof dato;
}

// ACTIVIDAD 9
function calcularCircunferencia(){
    radio = prompt("Ingrese el radio del círculo: ");
    return 2 * Math.PI * radio;
}

console.log(pulgadasACentimetros())
console.log(stringAURL())
console.log(stringAdmiracion())
console.log(edadPerrruna())
console.log(edadPerrruna2())
console.log(edadPerrruna3())
console.log(horasDeTrabajo())
console.log(calculadorIMC())
console.log(minAMayusc())
console.log("Su tipo de dato es: " + obtenerTipoDeDato(5))
console.log(calcularCircunferencia())
