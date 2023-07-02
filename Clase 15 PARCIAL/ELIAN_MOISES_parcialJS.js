// PARCIAL de JavaScript - ELIÁN MOISÉS

// EJERCICIO 1: Desarrollar una función para cada uno de las siguientes apartados:

// a) Que reciba por parámetro 1 número, le sume 10, y verifique que si ese resultado 
//    es múltiplo de 5. Si lo es, tiene que retornar la frase: ‘[número] + 10 es 
//    múltiplo de 5’, sino, retornará ‘[número] + 10 no es múltiplo de 5’.

// function sumar(numero){
//     let numeroMas10 = numero + 10;
//     if (numeroMas10 % 5 === 0){
//         return numero + " + 10 es múltiplo de 5"}
//     return numero + " + 10 NO es múltiplo de 5";
// }

// console.log(sumar(10))

// b) Que reciba por parámetro dos números enteros y retorne la multiplicación 
//    de ambos.

// function multiplicar(numero1, numero2){
//     return numero1 * numero2;
// }

// console.log(multiplicar(25, 4))

// c) Que acepte un arreglo de números y devuelva la suma de todos ellos.

// function arraySumado(array){
//     let resultado = 0;
//     for(i = 0; i < array.length; i++){
//         resultado += array[i];
//     }
//     return resultado;
// }

// console.log(arraySumado([10, 5, 20]))

// EJERCICIO 2: 
// 1.) Deberás escribir un objeto literal llamado empresa que contenga las 
//     siguientes propiedades que deberás completar con tus datos:

// a. nombre string
// b. actividad string
// c. sueldos array de 10 números

// 2.)

// let empresa = {
// nombre : "Digital House",
// actividad : "Educación Informática",
// sueldos : [800, 1000, 1200, 1400, 1600, 1800, 20000, 59400, 89900, 400000],
// totalSueldos : 0,
// pagoSueldos : function(){
//     for(let i = 0; i < this.sueldos.length; i++){
//         this.totalSueldos += this.sueldos[i];
//     }
//     if(this.totalSueldos > 200000){
//         return "La empresa " + this.nombre + " se encuentra en quiebra ya que su pago de sueldos es de $" + this.totalSueldos + ", por lo tanto, necesita hacer un ajuste en sus empleados."
//     }else{
//         return "La empresa " + this.nombre + " se encuentra bien economicamente, ya que su pago de sueldos es de $" + this.totalSueldos + ", por lo tanto, NO necesita hacer un ajuste en sus empleados."
//     }
//     }
// }

// console.log(empresa.pagoSueldos())

// EJERCICIO 3:

// ● Crear un array vacío, que tenga el nombre libros

// let libros = [];

// ● Usando estos 4 objetos:

//     let historiasInconscientes = 
//     {
//     anio : 2013,
//     autor : "Gabriel Rolón",
//     paginas: 352
//     }
//     let elAlquimista = {
//     anio : 1988,
//     autor : "Paulo Coehlo",
//     paginas: 192
//     }
//     let elCampamento = {
//     anio : 2021,
//     autor : "Blue Jeans",
//     paginas: 480
//     }
//     let operacionMasacre = {
//     anio: 2009,
//     autor: "Rodolfo Walsh",
//     paginas: 236
// };

// ● Deberás agregarlos al array utilizando un método de array

// libros.unshift(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre);

// ● Mostrar por consola el array para ver que contenga esos objetos.

// console.log(libros)

// ● Deberás crear una función que reciba el array libros como parámetro, y si 
//   el año de lanzamiento es anterior a 2020, deberá agregar una propiedad a 
//   cada objeto que se llame época y tenga el valor pre-pandemia, si el año es 
//   posterior o igual a 2020 el valor de la propiedad época será post-pandemia.

// function añadirEpoca(array){
//     for (let i = 0; i < array.length; i++){
//         array[i].anio < 2020?array[i].epoca = "pre-pandemia":array[i].epoca = "post-pandemia";
//         }
//     }

// añadirEpoca(libros);
// console.log(libros);