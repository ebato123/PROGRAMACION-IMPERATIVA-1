const prompt = require("prompt-sync")({ sigint: true });

// Micro Desafío 1
// Se ejecuta el cálculo de: 40 - 10 (y - x)

// Micro Desafío 2
// Se ejecuta la función pero solamente hasta que se contempla el return. 
// (multiplica el primer parámetro e ignora el segundo)

// ACTIVIDAD 1
function pulgadasACentimetros() {
    x = prompt("Ingrese las pulgadas: ");
    return x * 2.54;
}

let pulgadasACentimetros2 = (x = prompt("Ingrese las pulgadas (ARROW FUNCTION): ")) => x * 2.54;

// ACTIVIDAD 2
function stringAURL() {
    y = prompt("Ingrese la string: ");
    return "https://www." + y + ".com";
}

let stringAURL2 = (y = prompt("Ingrese la string (ARROW FUNCTION): ")) => "https://www." + y + ".com";


// ACTIVIDAD 3
function stringAdmiracion() {
    z = prompt("Ingrese la string: ");
    return z + "!";
}

let stringAdmiracion2 = (z = prompt("Ingrese la string(ARROW FUNCTION): ")) => z + "!";

// ACTIVIDAD 4 + EXPRESIÓN DECLARADA Y EXPRESADA + ARROW FUNCTION
function edadPerrruna() {
    a = prompt("Ingrese la edad perruna: ");
    return a * 7;
}
let edadPerrruna2 = function() {
    a = prompt("Ingrese la edad perruna (FUNCIÓN EXPRESADA): ");
    return a * 7;
}

let edadPerrruna3 = (a = prompt("Ingrese la edad perruna (ARROW FUNCTION): ")) => a * 7;

// ACTIVIDAD 5
function horasDeTrabajo() {
    b = prompt("Ingrese su sueldo mensual: ");
    return b / 40;
}

let horasDeTrabajo2 = (b = prompt("Ingrese su sueldo mensual (ARROW FUNCTION): ")) => b / 40;

// ACTIVIDAD 6
function calculadorIMC() {
    x = prompt("Ingrese la altura (MT): ");
    y = prompt("Ingrese el peso (KG): ");
    return y / Math.pow(x, 2);
}

let calculadorIMC2 = (x = prompt("Ingrese la altura (MT)(ARROW FUNCTION): "), y = prompt("Ingrese el peso (KG): ")) => y / Math.pow(x, 2);

// ACTIVIDAD 7
function minAMayusc() {
    string = prompt("Ingrese la string (En minusc.): ");
    return string.toUpperCase();
}

let minAMayusc2 = (string = prompt("Ingrese la string (En minusc.)(ARROW FUNCTION): ")) => string.toUpperCase();

// ACTIVIDAD 8 

function obtenerTipoDeDato(dato) {
    dato = prompt("Ingrese un Valor: ");
    return typeof dato;
}

// ACTIVIDAD 9
function calcularCircunferencia(){
    radio = prompt("Ingrese el radio del círculo: ");
    return 2 * Math.PI * radio;
}

let calcularCircunferencia2 = (radio = prompt("Ingrese el radio del círculo: ")) => 2 * Math.PI * radio;

console.log(pulgadasACentimetros());
console.log(pulgadasACentimetros2());
console.log(stringAURL());
console.log(stringAURL2());
console.log(stringAdmiracion());
console.log(stringAdmiracion2());
console.log(edadPerrruna());
console.log(edadPerrruna2());
console.log(edadPerrruna3());
console.log(horasDeTrabajo());
console.log(horasDeTrabajo2());
console.log(calculadorIMC());
console.log(calculadorIMC2());
console.log(minAMayusc());
console.log(minAMayusc2());
console.log("Su tipo de dato es: " + obtenerTipoDeDato(5));
console.log(calcularCircunferencia());
console.log(calcularCircunferencia2());