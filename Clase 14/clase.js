// (1) A partir de el siguiente array de edades nos solicitan 
//     lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// a. Obtener en un nuevo array las edades menores a 18.

// function edadMenor(edad){
//     let arrayEdades = [];
//     for(let i = 0; i < edad.length; i++){
//         if(edad[i] < 18){
//             arrayEdades.push(edad[i]);
//         }
//     }
//     return arrayEdades
// }
// console.log(edadMenor(edades))

// b. Obtener en un nuevo array las edades mayor o igual a 18.

// function edadMayor(edad){
//     let arrayEdades = [];
//     for(let i = 0; i < edad.length; i++){
//         if(edad[i] >= 18){
//             arrayEdades.push(edad[i]);
//         }
//     }
//     return arrayEdades;
// }

// console.log(edadMayor(edades))

// c. Obtener en un nuevo array las edades igual a 18.

// function edadIgualA18(edad){
//     let arrayEdades = [];
//     for(let i = 0; i < edad.length; i++){
//         if(edad[i] == 18){
//             arrayEdades.push(edad[i]);
//         }
//     }
//     return arrayEdades
// }

// console.log(edadIgualA18(edades))

// d. Obtener el menor.

// function obtenerElMenor(array){
//     let i = 0;
//     let numeroMenor = array[0];
//     do{
//         if(array[i] < numeroMenor){
//             numeroMenor = array[i];
//         }
//         i++;
//     }while(i < array.length);
//     return numeroMenor;
// }

// console.log(obtenerElMenor(edades))

// e. Obtener el mayor.

// function obtenerElMenor(array){
//     let i = 0;
//     let numeroMenor = array[0];
//     do{
//         if(array[i] > numeroMenor){
//             numeroMenor = array[i];
//         }
//         i++;
//     }while(i < array.length);
//     return numeroMenor;
// }

// console.log(obtenerElMenor(edades))

// f. Obtener el promedio de edades.

// function obtenerElPromedio(array){
//     let sumaDeNumeros = 0;
//     for(let numero of array){
//         sumaDeNumeros += numero;
//     }
//     let promedio = sumaDeNumeros / array.length;
//     return promedio;
// }

// console.log(obtenerElPromedio(edades))

// g. Incrementar en 1 todas las edades.

// function incrementarEdadesEn1(array){
//     for(let i = 0; i < array.length; i++){
//         array[i]++;
//     }
//     return array;
// }

// console.log(incrementarEdadesEn1(edades))

// (2) Tenemos como base un array de cuentas bancarias, donde a 
//     cada una la representamos con un objeto literal. A partir
//     de este array trabajaremos sobre los siguientes enunciados,
//     resolviendo de la forma que nos parezca más adecuada.

const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

// a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

// function edadesMenoresA30(array){
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].edadTitular < 30){
//             nuevoArray.push(array[i]);
//         }
//     }
//     return nuevoArray;
// };

// console.log(edadesMenoresA30(arrayCuentas));

// b. Obtener un nuevo array de cuentas cuyas edades sean mayor 
//    o igual a 30.

// function edadesMayoresOIgualesA30(array){
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].edadTitular >= 30){
//             nuevoArray.push(array[i]);
//         }
//     }
//     return nuevoArray;
// };

// console.log(edadesMayoresOIgualesA30(arrayCuentas));

// c. Obtener un nuevo array de cuentas cuyas edades sean menores
//    o igual a 30.

// function edadesMayoresOIgualesA30(array){
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].edadTitular <= 30){
//             nuevoArray.push(array[i]);
//         }
//     }
//     return nuevoArray;
// };

// console.log(edadesMayoresOIgualesA30(arrayCuentas));

// d. Obtener la cuenta con el titular de la misma más joven.

// function obtenerLaEdadMenor(array){
//     cuenta = {};
//     edadMenor = array[0].edadTitular;
//     for(let i = 0; i < array.length; i++){
//         if(array[i].edadTitular < edadMenor){
//             edadMenor = array[i].edadTitular;
//             cuenta = array[i];
//         }
//     }
//     return cuenta;
// };

// console.log(obtenerLaEdadMenor(arrayCuentas));

// e. Obtener un array con las cuentas habilitadas.

// function obtenerCuentasHabilitadas(array){
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].estaHabilitada === true){
//             nuevoArray.push(array[i]);
//         }
//     }
//     return nuevoArray;
// };

// console.log(obtenerCuentasHabilitadas(arrayCuentas));

// f. Obtener un array con las cuentas deshabilitadas.

// function obtenerCuentasDeshabilitadas(array){
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].estaHabilitada === false){
//             nuevoArray.push(array[i]);
//         }
//     }
//     return nuevoArray;
// };

// console.log(obtenerCuentasDeshabilitadas(arrayCuentas));

// g. Obtener la cuenta con el menor saldo.

// function obtenerMenorSaldo(array){
//     cuenta = {};
//     saldoMenor = array[0].saldo;
//     for(let i = 0; i < array.length; i++){
//         if(array[i].saldo < saldoMenor){
//             saldoMenor = array[i].saldo;
//             cuenta = array[i];
//         }
//     }
//     return cuenta;
// };

// console.log(obtenerMenorSaldo(arrayCuentas));

// h. Obtener la cuenta con el mayor saldo.

// function obtenerMenorSaldo(array){
//     cuenta = {};
//     saldoMenor = array[0].saldo;
//     for(let i = 0; i < array.length; i++){
//         if(array[i].saldo > saldoMenor){
//             saldoMenor = array[i].saldo;
//             cuenta = array[i];
//         }
//     }
//     return cuenta;
// };

// console.log(obtenerMenorSaldo(arrayCuentas));

// EXTRAS
// 1)

// function generadorID(array){
//     let id = 1;
//     for(let i = 0; i < array.length; i++){
//         array[i].id = id;
//         id++;
//     }
//     return array;
// };

// console.log(generadorID(arrayCuentas));

// 2)

// function buscarPorID(array, id){
//     let objeto = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i].id === id){
//             objeto = array[i];
//         }else if(objeto === 0){
//             objeto = null;
//         }
//     }
//     return objeto;
// };

// console.log(buscarPorID(generadorID(arrayCuentas), 9));

// 3)

// function filtrarPorSaldos(array, saldo){
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].saldo < saldo){
//             nuevoArray.push(array[i]);
//         }
//     }if(nuevoArray.length === 0){
//         nuevoArray = null;
//     }
//     return nuevoArray;
// };

// console.log(filtrarPorSaldos(arrayCuentas, 1500));

// 4)

// function incrementarSaldo(array, id, saldo){
//     let objeto = buscarPorID(array, id);
//     if(objeto != null){
//         objeto.saldo += saldo;
//         return objeto;
//     }else{
//         objeto = undefined;
//     }
//     return objeto;
// }

// console.log(incrementarSaldo(generadorID(arrayCuentas), 2, 300));

